import {SoundButton} from "./SoundButton";
import {StorageManager} from "./StorageItemsManager";
import {BonusWheel} from "./BonusWheel";
import {OpenCloseButton} from "./OpenCloseButton";
import {Menu} from "./Menu";

export const animationBuffer = [];

var app = new PIXI.Application(window.innerWidth, window.innerHeight, {backgroundColor : 0x000000});
document.body.appendChild(app.view);

const soundButton = new SoundButton();

var prerenderCallbacks = [animate],
    lastTimeStepOccured = 0,
    currentStepTime = 0,
    currentTime = 0;

lastTimeStepOccured = updateTime();

if(!window.localStorage.getItem("itemsList")){
    StorageManager.initStorage();
}

var wheel = new BonusWheel({
    name: "freespins",
    spineSlot: "1st_back",
    highlightSlot: "1st_back2",
    sectors: [0,1,2,3,4,5,6,7,8,9,10,11],
    maxSpeed: 16,
    minSpeed: 0.15,
    accelerationDuration: 1800,
    minimumSpinsBeforeStop: 3,
    sectorItemsList: StorageManager.getSectorItemsList(),
    image: "SYM8"
}, function () {
    menu.onStorageUpdated();
}, app);
window.wheel = wheel;

// move the sprite to the center of the screen
wheel.position.set(app.screen.width / 2, app.screen.height / 2);

window.addEventListener("resize", function() {
    app.renderer.resize(window.innerWidth, window.innerHeight);
    wheel.position.set(window.innerWidth / 2, window.innerHeight / 2);
});

// Listen for animate update
app.ticker.add(function(delta) {
    prerenderCallbacks.forEach(function(cb) {
        cb();
    });
});

function animate(){
    animationBuffer.forEach(function(holder){
        if ( holder.running ){
            holder.run({
                timeStep: currentStepTime,
                time: currentTime
            });
        }
    });
}

function updateTime() {
    var now = Date.now(),
        diff = now - lastTimeStepOccured;

    // Check if more time than allowed has passed since the last frame
    if (diff > 250) {
        diff = 1000 / 60;
    }

    currentStepTime = diff | 0;
    currentTime += currentStepTime;

    return now;
}

app.stage.addChild(wheel);

var openCloseButton = new OpenCloseButton({
    openCallback: function () {
        menu.showMenu();
    },
    closeCallback: function () {
        menu.hideMenu();
    }
});

var menu = new Menu({
    onItemImgChange: function (index, texture) {
        wheel.changeTexture(index, texture);
    },
    onCountChange: function (index, count) {
        StorageManager.setItemCount(index, count);
    }
});

app.stage.addChild(menu);
app.stage.addChild(soundButton);
app.stage.addChild(openCloseButton);

document.documentElement.webkitRequestFullscreen();


window.addEventListener("resize", refresh);
function refresh() {
    wheel.refresh();
}

function keyDownHandler(event) {
    if(event.keyCode === 32){
        document.removeEventListener("keydown", keyDownHandler);
        wheel.onSpinButtonDown();

        setTimeout(() => {
            wheel.releaseHardButton(() => {document.addEventListener("keydown", keyDownHandler)});
        }, 300);
    }
}

document.addEventListener("keydown", keyDownHandler);

window.storageManager = StorageManager;
