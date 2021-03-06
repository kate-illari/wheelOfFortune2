import {BonusWheelItem} from "./BonusWheelItem";
import {AnimationHolder} from "./AnimationHolder";
import {StorageManager} from "./StorageItemsManager";

const CIRCLE_DEG = 360;
    //the minimum difference (angle) between current wheel stop and previous wheel stop:
const MIN_DIFF = 270;
const START_BOUNCE = {
    //negative value, since the wheel moves backwards
    maxSpeed: -0.5,
        //time fraction of the whole acceleration time
        timeFraction: 1/500
};

const WHEEL_ITEMS_CENTER_OFFSET = 260;
const WHEEL_ITEM_CONFIG = {
    width: 110,
    height: 110
};
const WILD_ITEM_CONFIG = {
    width: 150,
    height: 150,
}

const LOGO_POSITION = {
    portrait: {
        x: 0,
        y: 430
    },
    landscape: {
        x: 380,
        y: 310
    }
};

const WHEEL_CONFIG = {
    name: "freespins",
    spineSlot: "1st_back",
    highlightSlot: "1st_back2",
    sectors: [0,1,2,3,4,5,6,7,8,9,10,11],
    maxSpeed: 16,
    minSpeed: 0.15,
    accelerationDuration: 1800,
    minimumSpinsBeforeStop: 3,
    image: "SYM8"
};

export class BonusWheel extends PIXI.Container {
    
    constructor (onStartBounceCompleteCallback, app) {
        super();
        var me = this;

        me.sectorItemsList = StorageManager.getSectorItemsList();

        me.background = me._initBackground();
        me.background.anchor.set(0.5,0.5);

        //degrees per frame
        me.maxSpeed = WHEEL_CONFIG.maxSpeed;

        me.minSpeed = WHEEL_CONFIG.minSpeed;
        me.wheelBgDisk = me.initWheelBackground();

        me.sprite = me._initWheelSprite();
        me.spinButton = me.initSpinButton();
        me.initSpinButtonActions();

        BonusWheel.wheelItems = me._initWheelItems(me.sprite);
        //will be added to a separate spine slot:
        me.highlightSprite = typeof WHEEL_CONFIG.image !== "undefined" ? me._initSprite(WHEEL_CONFIG.image, PIXI.BLEND_MODES.ADD) : me._initEmptySprite();

        me.sectorsAngles = me._mapSectorsAgles(WHEEL_CONFIG.sectors);
        me.animations = me._initAnimations(WHEEL_CONFIG);
        me.onStartBounceCompleteCallback = onStartBounceCompleteCallback;
        me.config = WHEEL_CONFIG;
        me.pick = me._initPickSprite();

        me.gift = me._initGiftSprite(me, "EMPTY");
        me.logo = me.initLogo();

        this.winSound = document.getElementById("winSound");

        me.pick = me._initPickSprite();
        me._initBgSpine(me, "glow", app);


        me.reset();
        me.refresh();
    }

    _initBackground () {
        return this.addChild(new PIXI.Sprite.fromImage("assets/images/background.png"))
    }

    initWheelBackground(){
        var sprite = new PIXI.Sprite.fromImage("assets/images/disk.png");
        sprite.anchor.set(0.5, 0.5);

        return this.addChild(sprite);
    }

    _initBgSpine (container, spineName, app) {
        var me = this,
            glow;

        PIXI.loader
            .add('glow', 'assets/spine/glow.json')
            .load(onAssetsLoaded);

        function onAssetsLoaded(loader,res) {
            // instantiate the spine animation
            glow = new PIXI.spine.Spine(res.glow.spineData);
            glow.skeleton.setToSetupPose();
            glow.update(0);
            glow.autoUpdate = false;
            glow.scale.set(0.75);
            me.addChild(glow);
            me.addChild(me.pick); // adding it here to make sure it's on top!!!

            // once position and scaled, set the animation to play
            glow.state.setAnimation(0, 'spin', true);
            app.ticker.add(function() {
                glow.update(0.05);
            });

            glow.visible = false;
            me.bgAnimation = glow;
        }

    }

    _initWheelSprite () {
        var sprite = new PIXI.Sprite.fromImage("assets/images/sectors.png");
        sprite.anchor.set(0.5, 0.5);

        return this.addChild(sprite);
    }

    initSpinButton () {
        var sprite = new PIXI.Sprite.fromImage("assets/images/stop_idle.png");
        sprite.interactive = true;
        sprite.anchor.set(0.5, 0.5);
        this.addChild(sprite);

        return sprite;
    }

    initSpinButtonActions(){
        var me = this,
            button = me.spinButton;

        button.on("pointerdown", () => {
            button.texture = PIXI.Texture.fromImage("assets/images/stop_click.png");
        });

        button.on("pointerup", () => {
            this.onSpinButtonUp();
        });

        button.on("pointerupoutside", () => {
            button.texture = PIXI.Texture.fromImage("assets/images/stop_idle.png");
        });
    }

    onSpinButtonDown() {
        var me = this,
            button = me.spinButton;

        button.texture = PIXI.Texture.fromImage("assets/images/stop_click.png");
    }

    onSpinButtonUp() {
        var me = this,
            button = me.spinButton,
            itemsLeft = !StorageManager.isNoMoreItems(),
            itemsList = StorageManager.getLocalStorageItem("itemsList"),
            sectorToStopOn;

        button.texture = PIXI.Texture.fromImage("assets/images/stop_idle.png");

        if(!itemsLeft){
            alert("No more items, please go to menu");
            return;
        }

        button.interactive = false;

        sectorToStopOn = StorageManager.findSectorToStopOn();
        console.warn("stopping at: ", sectorToStopOn);

        me.start();
        me.setStoppingAngle(sectorToStopOn);
        me.startStopping().then(function () {
            if (Object.values(itemsList)[sectorToStopOn].name === "EMPTY") {
                button.interactive = true;
                me.bgAnimation.visible = false;
            } else {
                me.playGiftAnimation(Object.keys(itemsList)[sectorToStopOn], () => {
                    button.interactive = true;
                });
            }
        });
    }

    releaseHardButton(callback) {
        var me = this,
            button = me.spinButton,
            itemsLeft = !StorageManager.isNoMoreItems(),
            sectorToStopOn;

        button.texture = PIXI.Texture.fromImage("assets/images/stop_idle.png");

        if(!itemsLeft){
            console.error("no more items at all");
            return;
        }

        button.interactive = false;

        sectorToStopOn = StorageManager.findSectorToStopOn();
        console.warn("stopping at: ", sectorToStopOn);

        me.start();
        me.setStoppingAngle(sectorToStopOn);
        me.startStopping().then(function () {
            me.playGiftAnimation("SYM" + sectorToStopOn, () => {
                button.interactive = true;
                callback();
            });
        });
    }

    /**
     * Adds wheel items - sprites that rotate together with the wheel
     *
     * @param {PIXI.Container|PIXI.Sprite} parent - wheelItems will be added here
     * @returns {Array<S.BonusWheelItem>}
     * @private
     */
    _initWheelItems(parent){
        var me = this,
            whellItems = {};

        me.sectorItemsList.forEach(function (item, index) {
            const texturePath = StorageManager.getImgPath(item);
            const texture = new PIXI.Texture.fromImage(texturePath);
            const sizedContainer = new PIXI.Container();

            const bonusWheelItem = new BonusWheelItem({
                parent: sizedContainer,
                texture: texture,
                sectorIndex: index,
                centerOffset: WHEEL_ITEMS_CENTER_OFFSET,
                totalSectorsNum: me.sectorItemsList.length
            });

            bonusWheelItem.updateSize();

            parent.addChild(sizedContainer);
            whellItems[item] = bonusWheelItem;
        });

        return whellItems;
    }

    _initPickSprite () {
        var sprite = new PIXI.Sprite.fromImage("assets/images/arrow.png");
        sprite.anchor.set(0.5, 0.5);
        sprite.position.y = -350;

        return sprite;
    }

    _initGiftSprite (container, imageName) {
        const sprite = this._initSprite(imageName, PIXI.BLEND_MODES.NORMAL);
        const wildSubstr = RegExp("wild");
        const isWild = wildSubstr.test(sprite.texture.baseTexture.imageUrl);
        const startWidth = isWild ? WILD_ITEM_CONFIG.width : WHEEL_ITEM_CONFIG.width;
        const startHeight = isWild ? WILD_ITEM_CONFIG.height : WHEEL_ITEM_CONFIG.height;

        container.addChild(sprite);
        sprite.width = startWidth;
        sprite.height = startHeight;
        sprite.position.y = -WHEEL_ITEMS_CENTER_OFFSET/2;
        sprite.visible = false;
        sprite.animation = new AnimationHolder({
            addToAnimationLoop: true,
            target: sprite,
            children: [
                {
                    prop: "position",
                    animate: {
                        200: {y: -(WHEEL_ITEMS_CENTER_OFFSET)},
                        1500: {y: 0},
                        5000: {y: 0},
                        5500: {y: -(WHEEL_ITEMS_CENTER_OFFSET)},
                    }
                },
                {
                    prop: "width",
                    animate: {
                        200: startWidth,
                        1500: startWidth * 4,
                        5000: startWidth * 4,
                        5500: startWidth
                    }
                },
                {
                    prop: "height",
                    animate: {
                        200: startHeight,
                        1500: startHeight * 4,
                        5000: startHeight * 4,
                        5500: startHeight
                    }
                }
            ]
        });

        return sprite;
    }

    /**
     *
     * @param animSprite - win presentation sprite
     * @private
     */
    _onWinAnimationComplete(animSprite){
        animSprite.visible = false;
        Object.values(BonusWheel.wheelItems).forEach(function(wheelItem){
            wheelItem.show();
        });
        this.bgAnimation.visible = false;
    }

    _initSprite (imageName, blendMode) {
        var sprite = new PIXI.Sprite.fromImage(StorageManager.getImgPath(imageName));

        sprite.anchor.set(0.5, 0.5);
        sprite.blendMode = blendMode;

        return sprite;
    }

    _initEmptySprite () {
        return new PIXI.Sprite(PIXI.Texture.EMPTY);
    }

    /**
     * @param {Array} sectorsNames - list of sectors names on the wheel
     * @returns {Object} sectorsAngles - config with all the sectors mapped to angles of wheel rotation
     */
    _mapSectorsAgles (sectorsNames) {
        var sectorsNumber = sectorsNames.length,
            degreesPerSector = CIRCLE_DEG / sectorsNumber,
            sectorsAngles = {};

        sectorsNames.forEach(function (sectorName, index) {
            //forced to use array of angles, since we might have multiple sectors for one value
            //for instance, the key wheel has 6 sectors with 0 and 2 sectors with 1
            if(!sectorsAngles[sectorName]){
                sectorsAngles[sectorName] = [];
            }
            sectorsAngles[sectorName].push(degreesPerSector * index);
        });

        return sectorsAngles
    }

    /**
     * These are not "animations" in common understanding of the Animation.Holder, they are rather tickers,
     * that perform certain update functions on every frame
     *
     * @param {Object} config - wheel config
     * @returns {Object} list of all available animations
     */
    _initAnimations (config) {
        return {
            "accelerationTicker": this._initAccelerationTicker(config.accelerationDuration),
            "uniformRotationTicker": this._initUnformRotationTicker(),
            "decelerationTicker": this._initDecelerationTicker()
        }
    }

    /**
     * @param {number} accelerationTime - time it will take to accelerate from 0 to maximum speed
     * @returns {Object} animation holder that gradually(with easing) increases currentSpeed
     * that will be used in _updateSpriteAngle on each frame for smooth wheel start
     */
    _initAccelerationTicker (accelerationTime) {
        var me = this;

        return new AnimationHolder({
            target: me,
            prop: "currentSpeed",
            onUpdate: me._updateSpriteAngle.bind(me),
            onEnd: me.startUniformRotation.bind(me),
            animate: [
                {
                    time: 0,
                    value: 0,
                    ease: Animation.utils.powerTwoOut
                },
                //the wheel bounce back on start:
                {
                    time: accelerationTime * START_BOUNCE.timeFraction,
                    value: START_BOUNCE.maxSpeed,
                    ease: Animation.utils.powerTwoIn
                },
                {
                    time: accelerationTime,
                    value: me.maxSpeed
                }
            ],
            addToAnimationLoop: true
        });
    }

    /**
     * @returns {Object} animation holder that calls _updateSpriteAngle on every frame
     * by this moment, the speed reaches maximum value, so this spins the wheel uniformly
     */
    _initUnformRotationTicker () {
        var me = this;

        return new AnimationHolder({
            onUpdate: me._updateSpriteAngle.bind(me),
            addToAnimationLoop: true,
            loop: true
        });
    }

    /**
     * @returns {Object} animation holder that calls decelerateRotation on every frame and smoothly stops the wheel
     */
    _initDecelerationTicker () {
        var me = this;

        return new AnimationHolder({
            addToAnimationLoop: true,
            onUpdate: me.decelerateRotation.bind(me),
            loop: true
        });
    }

    startUniformRotation () {
        var me = this;
        //resolving promise (there's no callback on restore):
        me.onWheelStartCallback && me.onWheelStartCallback();
        //in regular case it would've reached maxSpeed naturally by this moment, but on restores we're forced to set it manually:
        me.currentSpeed = me.maxSpeed;
        me.animations.uniformRotationTicker.play();
    }

    /**
     *  decreases currentSpeed depending on currentAngle relative to finalAngle
     *  the closer we are to the finalAngle the slower we go
     *  calls _updateSpriteAngle to apply new speed
     */
    decelerateRotation () {
        var me = this,
            currentAngle = me.sprite.rotation * PIXI.RAD_TO_DEG,
            distanceLeft = me.finalAngle - currentAngle,
            maxSpeedFraction = distanceLeft / me.stoppingDistance,
            timePassedFromStart = 1 - maxSpeedFraction;

        me.currentSpeed = Animation.utils.powerTwoIn(me.maxSpeed, 0, timePassedFromStart);

        //proceed with uniform rotation if the speed might become too low:
        if (me.currentSpeed < me.minSpeed) {
            me.currentSpeed = me.minSpeed;
        }

        me._updateSpriteAngle();
    }

    /**
     *  Changes the sprite angle by adding currentSpeed to it, stops the deceleration ticker if reached final angle
     */
    _updateSpriteAngle () {
        var me = this,
            currentRotation = me.sprite.rotation * PIXI.RAD_TO_DEG,
            timeScale = me.getTimeScale(),
            newRawRotation = currentRotation + me.currentSpeed * timeScale,
            newRotation;

        //startBounce completion condition:
        if(me.prevFrameSpeed < 0 && me.currentSpeed > 0){
            me.onStartBounceCompleteCallback(me.config.name);
        }

        if (newRawRotation >= me.finalAngle) {
            newRotation = me.finalAngle;
            me.currentSpeed = 0;
            me.animations.decelerationTicker.stop();

            //resolving promise:
            me.onWheelStopped();
        } else {
            newRotation = newRawRotation;
        }

        me.sprite.rotation = newRotation * PIXI.DEG_TO_RAD;
        me.highlightSprite.rotation = me.sprite.rotation;
        me.prevFrameSpeed = me.currentSpeed;
    }

    /**
     *  Returns timescale coefficient to adjust the animation duration on low FPS
     *
     *  @returns {number} - deltaTime correction coefficient
     */
    getTimeScale () {
        var me = this,
            //todo: remove before release:
            timeScale = 1.5,
            oneFrameDuration = 1000/60,
            now = Date.now(),
            prev = me.lastTick ? me.lastTick : now - oneFrameDuration;

        me.lastTick = now;

        //todo: remove before release:
        return (now - prev) * timeScale/oneFrameDuration;
    }

    start (callback) {
        this.onWheelStartCallback = callback;
        this.animations.accelerationTicker.play();

        const winSound = this.winSound.cloneNode();
        winSound.play();
    }

    startDeceleration (prevWheelStoppingDistance, onWheelStopped) {
        var me = this;

        me.onWheelStopped = onWheelStopped;
        me.animations.uniformRotationTicker.stop();
        me._updateStoppingDistance(prevWheelStoppingDistance);
        me.animations.decelerationTicker.play();

        this.bgAnimation.visible = true;
        this.bgAnimation.state.setAnimation(0, 'spin', true);
    }

    /**
     *  updates distance to the destination point and final sprite angle at the moment of stopping
     *  depending on currentAngle, stopAngle and prevWheelStoppingDistance
     *
     *  @param {number} prevWheelStoppingDistance - distance, the previous wheel has to cover before full stop
     */
    _updateStoppingDistance (prevWheelStoppingDistance) {

        var me = this,
            currentAngle = me.sprite.rotation * PIXI.RAD_TO_DEG,
            //using % me.CIRCLE_DEG here to simply calculations:
            currentAngleReduced = currentAngle % CIRCLE_DEG,
            angleToFullCircleLeft = CIRCLE_DEG - currentAngleReduced,
            stopAngle = me.getStoppingAngle(),
            minDistanceToTarget = angleToFullCircleLeft + stopAngle,
            //number of 360 degrees wheel revolutions before stop
            revolutionsBeforeStop = me.getRevolutionsBeforeStop(minDistanceToTarget, prevWheelStoppingDistance);

        me.stoppingDistance = minDistanceToTarget + revolutionsBeforeStop * CIRCLE_DEG;
        me.finalAngle = currentAngle + me.stoppingDistance;
    }

    /**
     * Calculates the number of extra revolutions to make depending on previous wheel stopping distance
     * (current wheel distance should always be greater than the previous one)
     *
     * @param {number} minDistanceToTarget - minimum possible distance between current and final angles
     * @param {number} prevWheelStoppingDistance - distance the previous wheel will cover before full stop
     * @returns {number} spinsBeforeStop - number of extra revolutions before full stop
     */
    getRevolutionsBeforeStop (minDistanceToTarget, prevWheelStoppingDistance) {
        var me = this,
            revsBeforeStop = 0,
            targetDistance = prevWheelStoppingDistance + MIN_DIFF,
            currentValue = minDistanceToTarget;
        
        while(currentValue < targetDistance){
            revsBeforeStop++;
            currentValue = minDistanceToTarget + CIRCLE_DEG * revsBeforeStop;
        }

        revsBeforeStop = Math.max(revsBeforeStop, me.config.minimumSpinsBeforeStop);

        return revsBeforeStop;
    }

    /**
     * Randomly selects from all available sectors angles for itemToStopOn
     * (for instance, out of 6 options for 0 level on level wheel) and sets it as stopAngle
     *
     * @param {number | string} itemToStopOn - value on the sector whe wheel should stop on
     * @returns {void}
     */
    setStoppingAngle (itemToStopOn) {
        var me = this,
            targetAngles = me.sectorsAngles[itemToStopOn],
            targetAnglesCount = targetAngles.length,
            randomAngleIndex = Math.floor(Math.random() * targetAnglesCount);

        me.stopAngle = targetAngles[randomAngleIndex];
    }

    getStoppingAngle () {
        return this.stopAngle;
    }

    getCurrentStoppingDistance () {
        return this.stoppingDistance;
    }

    playGiftAnimation (name, onEndCallback) {
        console.warn(name);
        var me = this,
            gift = me.gift,
            currentWheelItem = BonusWheel.wheelItems[name];

        currentWheelItem.hide();

        gift.texture = currentWheelItem.texture;
        gift.visible = true;

        gift.animation.onEnd = function () {
            me._onWinAnimationComplete(gift);
            onEndCallback();
        };

        gift.animation.play();

        me.bgAnimation.state.setAnimation(0, 'win', true);
    }

    initLogo () {
        var sprite = new PIXI.Sprite.fromImage("assets/images/logo.png");
        sprite.anchor.set(0.5, 0.5);
        this.addChild(sprite);
        sprite.position.y = -350;

        return sprite;
    }

    reset () {
        var me = this;

        me.stoppingDistance = Infinity;
        me.finalAngle = Infinity;
        me.sprite.rotation = 0;
        me.currentSpeed = 0;
        me.lastTick = 0;
    }

    startStopping () {
        var me = this;

        return new Promise(function (resolve) {
            me.startDeceleration(0, function () {
                resolve();
            })
        })
    }

    static changeTexture(name, texture){
        const wildSubstr = RegExp("wild");
        BonusWheel.wheelItems[name].texture = texture;
        BonusWheel.wheelItems[name].updateSize();
    }

    refresh () {
        if(window.innerHeight > window.innerWidth){
            //portrait
            this.background.rotation = (Math.PI/2);
            this.logo.position.set(LOGO_POSITION.portrait.x, LOGO_POSITION.portrait.y);
        } else {
            //landscape
            this.background.rotation = (Math.PI*2);
            this.logo.position.set(LOGO_POSITION.landscape.x, LOGO_POSITION.landscape.y);
        }

    }
}

window.WHEEL = BonusWheel
