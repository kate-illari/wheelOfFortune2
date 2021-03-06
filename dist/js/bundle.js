/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/AnimationHolder.js":
/*!*******************************!*\
  !*** ./js/AnimationHolder.js ***!
  \*******************************/
/*! exports provided: AnimationHolder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationHolder", function() { return AnimationHolder; });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./js/main.js");


class AnimationHolder {
    /**
     * @property {String} [id=""] The identifier for this animation, if you don't specify one we will try to use
     * parent.id + ":" + prop + "Animation"
     */
    /**
     * @property {Object} [target=undefined] The target object we want to animate, if you don't specify one we will
     * try to use the parent.target
     */
    /**
     * @property {String} [prop=undefined] The name of the properties on the target we want to change
     */
    /**
     * @property {Boolean} [running=false] If the animation is active
     */
    /**
     * @property {Number} [playbackSpeed=undefined] If we want to play the animation faster (>1) or slower (<1)
     */
    /**
     * @property {Boolean} [loop=false] Will repeat the whole animation. If it have separate operations with different
     * time the shorter ones will wait at the end key frame until the longest is done. onStart & onEnd will not be
     * called every loop (if that is needed, set callbacks on key frames instead). Will also wait for all it's
     * children to complete.
     */
    /**
     * @property {Boolean} [readyToLoop=false] Since we sometime need to wait for our children we use this to know
     * when we can loop back to the start.
     */
    /**
     * @property {Function} [onStart=undefined] Callback function before the animation starts
     */
    /**
     * @property {Function} [onEnd=undefined] Callback function when the animation is complete
     */
    /**
     * @property {Function} [onUpdate=undefined] Callback function on every frame before the operation run. Will be
     * called regardless if the holder have operation, target etc or not, as long as it is running (and it's parents) the
     * function will be called.
     */
    /**
     * @property {Array} [children=[]] So we can nestle animation
     */
    /**
     * @property {Animation.Holder} [parent=undefined] A reference to the holders parent
     */
    /**
     * @property {Number} [localTime=0] Local time counter
     */
    /**
     * @property {Number} [delay=0] Time before the operations start after the animation starts
     */
    /**
     * @property {Number} [startTimeOffset=0] If we want the animation to start at a specific time (TODO: currently if the offset is beyond the first keyframe it will start at that keyframe instead)
     */
    /**
     * @property {Object} [operations={}] The operations the holder preforms
     */
    /**
     * @property {Object} [operationSteps={}] The current key frame for every operation
     */
    /**
     * @property {Object} [operationEnded={}] If all the operations are done
     */


    /**
     * Constructor
     *
     * @param {Object} config The config object
     */
    constructor (config) {
        var me = this,
            defaultProp = {
                id                  : undefined,    // the identifier for this animation
                target              : undefined,    // the target object we want to animate
                prop                : undefined,    // the name of the properties on the target we want to change.
                animation           : {             // object that will hold keyFrames etc.
                    keyFrames : [],
                    step : 0,                       // the current keyFrame we're on
                    complete : false                // if the animation is done
                },
                running             : false,        // if the animation is active.
                playbackSpeed       : undefined,    // if we want to play the animation faster (>1) or slower (<1)
                loop                : false,        // will repeat the whole animation. If it have separate operations
                                                    // with different time the shorter ones will wait at the end key frame
                                                    // until the longest is done. onStart & onEnd will not be called every
                                                    // loop (if that is needed, set callbacks on key frames instead).
                                                    // Will also wait for all it's children to complete.
                readyToLoop         : false,        // since we sometime need to wait for our children we use this to know
                                                    // when we can loop back to the start.
                onStart             : undefined,    // callback before the animation starts
                onEnd               : undefined,    // callback when the animation is complete
                onUpdate            : undefined,    // callback on every frame before the operation run. Will be
                                                    // called regardless if the holder have operation, target etc or not
                children            : [],           // so we can nestle animation
                parent              : undefined,    // a reference to the holders parent
                localTime           : 0,            // local time counter
                delay               : 0,            // time before the operations start after the animation starts
                startTimeOffset     : undefined,    // if we want the animation to start at a specific time
                //operations          : {},           // the operations the holder preforms
                //operationSteps      : {},           // the current key frame for every operation
                //operationsEnded     : false,        // if all the operations are done
                addToAnimationLoop  : false         // adding the holder to the animation loop on creation
            };

        config = Sys.applyProperties(defaultProp, config);

        // Parse the config, this allows us to use several config syntax
        config = me.parseConfig(config);

        me = Sys.applyProperties(me, config);

        //// Set the default parameters needed by the operations
        //me.setOperationDefaultProperties();

        if ( config.addToAnimationLoop ){
            _main__WEBPACK_IMPORTED_MODULE_0__["animationBuffer"].push(me);
        }

    }

    /**
     * Parse the config so that it matches the actual object properties.
     *
     * @param config
     * @return {Object} The parsed properties
     */
    parseConfig  (config) {
        var properties = {
                animation : {
                    keyFrames : [],
                    step : 0,
                    complete : false
                }
            },
            //operations = Object.keys(Animation.Operations),
            timeSort = function (a, b) {
                return (a.time - b.time);
            },
            obj;

        // Process all keys on the config object
        Sys.iterate(config, function(key, value){

            // If we have an animation, parse it
            if (key === "animate" ) {

                /*DEBUG_START*/
                if ( key !== "animate" ){
                    // TODO: right now we only support the "animate" operation, when we need more we have to make them.
                    console.warn("You are trying to use a " + key + " operation on a Animation.Holder, for now only 'animate' is supported");
                }
                /*DEBUG_END*/

                // if the operation is an array or object
                if ( Sys.isObj(value) ){

                    Sys.iterate(value, function(time, frameValue){
                        // Define the frame object with the time value
                        obj = { time : parseInt(time, 10) };

                        // If the frame is an object with a defined value then we have non value properties mixed in
                        if (Sys.isObj(frameValue) ) {
                            if ( Sys.isDefined(frameValue.value) ){
                                obj = Sys.applyProperties(obj, frameValue);
                            }
                            else {
                                obj.value = frameValue;
                            }
                        }
                        // Otherwise it is just a plain value
                        else {
                            obj.value = frameValue;
                            /*DEBUG_START*/
                            if ( !Sys.isDefined(config.prop) && config.length > 1 ){
                                console.warn("If we only specify a number value the property 'prop' must exist");
                            }
                            /*DEBUG_END*/
                        }

                        // Push the key frame
                        properties.animation.keyFrames.push(obj);
                    });

                    properties.animation.keyFrames.sort(timeSort);
                }
                else if ( Sys.isArray(value) ){
                    // the operation is already in the right format, add it to the operations object
                    properties.animation.keyFrames = value;
                }
                else {
                    // error
                    console.warn("Operation is in wrong format");
                }
            }
            // Else assign the value
            else {
                properties[key] = value;
            }
        });

        // if target is undefined use the parents target (if it exist)
        if ( !Sys.isDefined(properties.target) && Sys.isDefined(properties.parent) && Sys.isDefined(properties.parent.target) ){
            properties.target = properties.parent.target;
        }

        /*DEBUG_START*/
        if ( Sys.isDefined(properties.target) && !Sys.isObj(properties.target) ){
            console.warn("The target of a Animation.Holder must be a Object");
        }
        /*DEBUG_END*/

        // if the id is undefined use the targets id (if it exist) and the operation type
        if ( !Sys.isDefined(properties.id) && Sys.isDefined(properties.target) && Sys.isDefined(properties.target.id) ){
            var prop = Sys.isDefined(properties.prop) ? properties.prop : "";

            properties.id = properties.target.id + ":" + prop + "Animation";
        }

        // if we already have children in the config, create them and add them
        if ( Sys.isDefined(properties.children) && properties.children.length > 0 ){
            var tempChildrenContainer = [],
                parent = this;

            properties.children.forEach(function(child){
                var animation;

                if ( Sys.isDefined(child.localTime) ){
                    // the child is already a AnimationHolder
                    animation = child;
                }
                else {
                    child.parent = {target : config.target};
                    animation = new AnimationHolder(child);
                }
                animation.parent = parent;
                tempChildrenContainer.push( animation );
            });

            properties.children = tempChildrenContainer;
        }

        return properties;
    }

    /**
     * Run the holder and it's children
     *
     * @param {Object} timeObj The object containing the time
     */
    run (timeObj) {
        var me = this,
            timeStep = timeObj.timeStep;

        if (me.localTime === 0 && Sys.isDefined(me.startTimeOffset) ){
            // if this is the first frame of the animation and we have a start offset
            timeStep += me.startTimeOffset;
        }

        if ( Sys.isDefined(me.playbackSpeed) ){
            // adjust the time step based on playback speed
            timeStep *= me.playbackSpeed;
        }

        me.localTime += timeStep; // increase the local timer

        if(me.localTime >= me.delay) {

            // Time step is used to keep track of internal timers on the operation level
            me.doAnimation(timeStep);

            me.children.forEach(function(child){
                if ( child.running ){
                    child.run({timeStep : timeStep, time : timeObj.time});

                    // if the child is still running
                    if ( child.running ){
                        // we should also be running
                        me.running = true;

                        if ( !child.loop && !child.readyToLoop ){
                            // if it's time for us to loop, wait until the children are done
                            // but don't wait on looping children
                            me.readyToLoop = false;
                        }
                    }
                }
            });

            if ( Sys.isDefined(me.onUpdate) ){
                me.onUpdate(timeStep);
            }
        }

        if ( me.loop && me.readyToLoop ){
            // meaning I'm done and all my children are done (ignoring children that are looping)
            me.restoreOnLoop();
        }
        else if ( !me.running ){
            // this animation is done
            if ( Sys.isDefined(me.onEnd) ){
                me.onEnd();
            }

            // restore the animation on completion so we can start it from the beginning on the next play()
            me.restore();
        }
    }

    /**
     * Runs each animation operation that is set for the holder
     *
     * @private
     * @param {Number} currentStepTime the current time step
     */
    doAnimation (currentStepTime) {
        var me = this,
            numKeyFrames = me.animation.keyFrames.length;

        // If we don't have any keyFrames or target just return
        if (numKeyFrames < 2 || !Sys.isDefined(me.target) ) {
            me.readyToLoop = true;
            me.running = false;
            return;
        }

        // Check if the animation have finished
        var running = me.performAction(currentStepTime);

        if (!running) {
            // all the operations are done
            me.running = false;
            me.readyToLoop = true;
        }
    }

    /**
     * Play the animation
     *
     * @param {Array|Boolean} [children] An array with children that we want to play. If none is
     * specified (or true) we play all the children. If you send in an empty array [] we'll only play the current.
     * @param {Boolean} [root] If this is the first object we call this function on (will be false for all it's children)
     */
    play (children, root) {
        var me = this,
            isRoot = Sys.isDefined(root) ? root : true;

        me.running = true;

        me.handleItems("play", children);

        if (me.localTime === 0 && Sys.isDefined(me.onStart)){
            // if we start the game from the beginning do the onStart callback
            me.onStart();
        }

        // make sure the parents are running
        if (isRoot){
            me.runParent();
        }
    }

    runParent (){
        var me = this;

        if ( Sys.isDefined(me.parent) ){
            me.parent.running = true;

            me.parent.runParent();
        }
    }

    /**
     * Pause the animation
     *
     * @param {Array} [children] An array with children that we want to pause. If none is
     * specified we pause all the children. If you send in an empty array [] we'll only pause the current holder.
     */
    pause (children) {
        this.running = false;

        this.handleItems("pause", children);
    }

    /**
     * Stop the animation and reset it to the beginning. Will do it for all the children as well
     *
     * @param {Array} [children] An array with children that we want to stop. If none is
     * specified we stop all the children. If you send in an empty array [] we'll only stop the current.
     * @param {Boolean} [root] If this is the first object we call this function on (will be false for all it's children)
     */
    stop (children, root) {
        var me = this,
            isRoot = Sys.isDefined(root) ? root : true;

        me.running = false;

        me.handleItems("stop", children);

        if ( isRoot ){
            me.restore(children, true);
        }
    }

    /**
     * Restores the basic properties of the holder in order to run it again.
     *
     * @param {Array|Boolean} [children] An array with children that we want to restore. If none is
     * specified (or true) we restore all the children. If you send in an empty array [] we'll only restore the current holder.
     * @param {Boolean} [root] If this is the first object we call this function on (will be false for all it's children)
     */
    restore (children, root) {
        var me = this,
            isRoot = Sys.isDefined(root) ? root : true;

        me.localTime = 0;
        me.readyToLoop = false;

        me.restoreAnimation();

        me.handleItems("restore", children);

        // if we are already running and are the root object we play()
        if ( me.running && isRoot ){
            me.play(children, true);
        }
    }

    /**
     * Restores the basic properties of the holder in order to run it again.
     *
     * @param {Array|Boolean} [children] An array with children that we want to restore. If none is
     * specified (or true) we restore all the children. If you send in an empty array [] we'll only restore the current holder.
     * @param {Boolean} [root] If this is the first object we call this function on (will be false for all it's children)
     */
    restoreOnLoop (children, root) {
        var me = this,
            isRoot = Sys.isDefined(root) ? root : true;

        if ( isRoot || !me.loop ){
            me.running = true;
            //me.localTime = 0;
            me.readyToLoop = false;

            me.restoreAnimation();

            me.handleItems("restoreOnLoop");
        }
    }

    restoreAnimation (){
        this.animation.time = 0;
        this.animation.step = 0;

        this.animation.keyFrames.forEach(function(key){
            if (Sys.isDefined(key.callback)) {
                key.callbackCompleted = false;
            }

            // add more stuff
        });
    }

    /**
     * @private
     * Update the holder with the operation configuration
     *
     * @param {Object} config The configuration
     */
    updateOperation (config) {
        var me = this,
            obj = {};

        //me.applyDefaultValuesToItem(me);

        obj.animate = config;

        obj = me.parseConfig(obj);

        me.animation = obj.animation;
        //me.applyDefaultValuesToOperation(me);

        me.restore();
    }

    /**
     * @private
     * Call the specified function on all the items
     *
     * @param {String} type The function to call on the items
     * @param {Array} [selection] The optional array of items to handle
     */
    handleItems (type, selection){
        var items = (Sys.isDefined(selection) && Sys.isArray(selection)) ? selection : this.children;

        items.forEach(function(child){
            child[type](true, false);
        });
    }

    setParent (parent){
        this.parent = parent;
        parent.children.push(this);

        // if you don't have a target, use the parents
        if ( !Sys.isDefined(this.target) ){
            this.target = parent.target;
        }
    }

    addChild (children){
        var me = this;

        if (Sys.isArray(children) ){
            children.forEach(function(child){
                child.setParent(me);
            });
        }
        else if (Sys.isObj(children)){
            children.setParent(me);
        }
    }

    /**
     * Will search children (and grandchildren) for a Holder that mach the key and value provide.
     *
     * NOTE: if there is more than one match you will get the first one.
     *
     * @param {String} value The value that should match
     * @param {String} [byKey] Which property key we should check against, default "id"
     *
     * @return {object|boolean} the items that match our search criteria, or false if it didn't find anything
     */
    findChild (value, byKey){
        var key = Sys.isDefined(byKey) ? byKey : "id",
            item = false,
            searchChildren = function(items) {
                var result = false,
                    subResult = false;

                items.forEach(function(item){
                    if ( Sys.isDefined(item[key]) && item[key] === value ){
                        result = item;
                    }

                    if ( Sys.isDefined(item.children) ){
                        subResult = searchChildren(item.children);

                        if ( Sys.isObj(subResult) ){
                            result = subResult;
                        }
                    }
                });

                return result;
            };

        // start with the main Holder
        if ( this[key] === value ){
            return this;
        }

        if ( Sys.isDefined(this.children) ){
            item = searchChildren(this.children );
        }

        return item;
    }

    /**
     * Performs the specified action on a given object.
     *
     * @param {Number} currentStepTime The time since the last render (ms)
     */
    performAction (currentStepTime) {
        var me = this,
            animation = me.animation,
            keyFrames = animation.keyFrames,
            numKeyFrames = keyFrames.length,
            currentTime = me.increaseAnimationTime(currentStepTime),
            currentKeyFrame = keyFrames[animation.step],
            nextKeyFrame = keyFrames[animation.step + 1],
            running = true;

        /*DEBUG_START*/
        if ( numKeyFrames < 2 ){
            console.warn("The Holder " + item + " have an animation with less than two keyFrames, the operation needs a minimum of two keyFrames to be able to animate.");
            return 0;
        }
        /*DEBUG_END*/

        me.handleCallback(currentKeyFrame); // added an extra callback check here to make sure callbacks on keyFrame 0 are fired

        // step through keyFrames, from oldKeyFrameIndex, until we are on the current one
        // loop if necessary
        // fire events and callbacks on every new keyFrame we pass
        // goTo keyFrames

        // check if we have passed the next keyFrame
        if ( nextKeyFrame.time <= currentTime){
            me.progressKeyFrame();

            currentKeyFrame = keyFrames[animation.step];

            // are we at the last keyFrame, ie we're not looping and the animation is complete
            if ( animation.step === numKeyFrames - 1 ){
                nextKeyFrame = currentKeyFrame;
                running = false;
            }
            else {
                nextKeyFrame = keyFrames[animation.step + 1];
            }
        }

        // when we have the current keyFrame, interpolate between that and the next keyFrame
        me.calculate(animation.time, currentKeyFrame, nextKeyFrame);

        return running;
    }

    progressKeyFrame (toIndex){
        var me = this,
            animation = me.animation,
            keyFrames = animation.keyFrames,
            currentKeyFrame;

        // step to next keyFrame
        animation.step = Sys.isDefined(toIndex) ? toIndex : animation.step + 1;

        // do events and callbacks
        currentKeyFrame = keyFrames[animation.step];
        me.handleCallback(currentKeyFrame);

        // check for goTo
        if ( Sys.isDefined(currentKeyFrame.goTo) ) {
            me.doGoTo(currentKeyFrame);
        }

        // if we haven't reached the last keyFrame
        if ( animation.step !== keyFrames.length - 1 ){
            // check if we should move one more
            if ( animation.time >= keyFrames[animation.step + 1].time){
                me.progressKeyFrame();
            }
        }
        else if ( me.loop  ){ // at the last keyFrame and we're looping
            animation.time -= keyFrames[animation.step].time;
            me.progressKeyFrame(0);
        }

    }

    doGoTo (keyFrame){
        var me = this;

        me.animation.time = me.animation.keyFrames[keyFrame.goTo].time;
        me.animation.step = keyFrame.goTo;

        /*DEBUG_START*/
        console.warn("Warning: goTo functionality not completed, use at own risk.");
        // TODO: fix goTo, callback resets when going back and callback firing when going forward etc.
        /*DEBUG_END*/
    }

    /**
     * Calculates the time steps and sets the values that should be interpolated.
     *
     * @protected
     * @param {Number} currentTime The current time step
     * @param {Object} currentStep The current frame
     * @param {Object} nextStep The next frame
     */
    calculate (currentTime, currentStep, nextStep) {
        var me = this,
            time = me.calculateTime(currentTime, currentStep, nextStep),
            from = currentStep.value,
            to = nextStep.value,
            target;

        if ( Sys.isObj(from) ){
            Sys.iterate(from, function(key, value){
                target = Sys.isDefined(me.prop) ? me.target[me.prop] : me.target;

                target[key] = Animation.utils.getInterpolationValue(value, to[key], time, currentStep.ease, key);
            });
        }
        else { // we only animate one number
            me.target[me.prop] = Animation.utils.getInterpolationValue(from, to, time, currentStep.ease);
        }
    }

    /**
     * @private
     * @param {Object} currentKeyFrame The object holding the current key frame information
     */
    handleCallback (currentKeyFrame) {
        var callback = currentKeyFrame.callback,
            container;

        if(Sys.isDefined(callback) && !currentKeyFrame.callbackCompleted) {

            if ( callback.fireImmediately ){
                if ( Sys.isString(callback.func) ){
                    // an event
                    callback.scope.fireEvent(callback.func, callback.args);
                }
                else if ( Sys.isFunc(callback.func) ){
                    // a function
                    callback.func.apply(callback.scope, callback.args);
                }
            }
            else {
                container = Game.stage.view.animationManager.callbackContainer;
                container.push(callback);
            }

            currentKeyFrame.callbackCompleted = true;
        }
    }

    /**
     * Calculates the time vars.
     *
     * @private
     * @param {Number} currentTime The current time step
     * @param {Object} currentStep The current frame
     * @param {Object} nextStep The next frame
     */
    calculateTime (currentTime, currentStep, nextStep) {
        var timeStep = currentTime - currentStep.time,
            totalTime = nextStep.time - currentStep.time;

        //If timeStep equals 0 and totalTime equals 0. The result will be NaN
        return totalTime !== 0 ? timeStep / totalTime : 1;
    }


    /**
     * Increase the timeBuffer
     *
     * @param {Number} time The time the time buffer should be increased
     */
    increaseAnimationTime  (time) {
        if (!Sys.isDefined(this.animation.time)) {
            this.animation.time = time;
        }
        else {
            this.animation.time += time;
        }

        return this.animation.time;
    }

    animate (config, play) {
        this.updateOperation(config);
        if ( play ){
            this.play();
        }
    }

}

/***/ }),

/***/ "./js/BonusWheel.js":
/*!**************************!*\
  !*** ./js/BonusWheel.js ***!
  \**************************/
/*! exports provided: BonusWheel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonusWheel", function() { return BonusWheel; });
/* harmony import */ var _BonusWheelItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BonusWheelItem */ "./js/BonusWheelItem.js");
/* harmony import */ var _AnimationHolder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimationHolder */ "./js/AnimationHolder.js");
/* harmony import */ var _StorageItemsManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StorageItemsManager */ "./js/StorageItemsManager.js");




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

class BonusWheel extends PIXI.Container {
    
    constructor (onStartBounceCompleteCallback, app) {
        super();
        var me = this;

        me.sectorItemsList = _StorageItemsManager__WEBPACK_IMPORTED_MODULE_2__["StorageManager"].getSectorItemsList();

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
            itemsLeft = !_StorageItemsManager__WEBPACK_IMPORTED_MODULE_2__["StorageManager"].isNoMoreItems(),
            itemsList = _StorageItemsManager__WEBPACK_IMPORTED_MODULE_2__["StorageManager"].getLocalStorageItem("itemsList"),
            sectorToStopOn;

        button.texture = PIXI.Texture.fromImage("assets/images/stop_idle.png");

        if(!itemsLeft){
            alert("No more items, please go to menu");
            return;
        }

        button.interactive = false;

        sectorToStopOn = _StorageItemsManager__WEBPACK_IMPORTED_MODULE_2__["StorageManager"].findSectorToStopOn();
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
            itemsLeft = !_StorageItemsManager__WEBPACK_IMPORTED_MODULE_2__["StorageManager"].isNoMoreItems(),
            sectorToStopOn;

        button.texture = PIXI.Texture.fromImage("assets/images/stop_idle.png");

        if(!itemsLeft){
            console.error("no more items at all");
            return;
        }

        button.interactive = false;

        sectorToStopOn = _StorageItemsManager__WEBPACK_IMPORTED_MODULE_2__["StorageManager"].findSectorToStopOn();
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
            const texturePath = _StorageItemsManager__WEBPACK_IMPORTED_MODULE_2__["StorageManager"].getImgPath(item);
            const texture = new PIXI.Texture.fromImage(texturePath);
            const sizedContainer = new PIXI.Container();

            const bonusWheelItem = new _BonusWheelItem__WEBPACK_IMPORTED_MODULE_0__["BonusWheelItem"]({
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
        sprite.animation = new _AnimationHolder__WEBPACK_IMPORTED_MODULE_1__["AnimationHolder"]({
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
        var sprite = new PIXI.Sprite.fromImage(_StorageItemsManager__WEBPACK_IMPORTED_MODULE_2__["StorageManager"].getImgPath(imageName));

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

        return new _AnimationHolder__WEBPACK_IMPORTED_MODULE_1__["AnimationHolder"]({
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

        return new _AnimationHolder__WEBPACK_IMPORTED_MODULE_1__["AnimationHolder"]({
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

        return new _AnimationHolder__WEBPACK_IMPORTED_MODULE_1__["AnimationHolder"]({
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


/***/ }),

/***/ "./js/BonusWheelItem.js":
/*!******************************!*\
  !*** ./js/BonusWheelItem.js ***!
  \******************************/
/*! exports provided: BonusWheelItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonusWheelItem", function() { return BonusWheelItem; });
const WHEEL_ITEM_CONFIG = {
    width: 110,
    height: 110
};
const WILD_ITEM_CONFIG = {
    width: 150,
    height: 150,
}

class BonusWheelItem extends PIXI.Sprite {
    /**
     *
     * @param {object} config - wheelItem config
     * @param {PIXI.Container|PIXI.Sprite} config.parent - Display object, the wheelItem will be added to
     * @param {PIXI.Texture} config.texture - wheelItem texture
     * @param {number} config.sectorIndex - sector the item is added to
     * @param {number} config.centerOffset - distance from wheel center to wheelItem center
     * @param {number} config.totalSectorsNum - total number of sectors on the parent wheel
     */
    constructor (config) {
        super(config.texture);
        config.parent.addChild(this);

        this.anchor.set(0.5);
        this.scale.set(config.scale);
        this.updatePositionAndRotation(config.totalSectorsNum, config.sectorIndex, config.centerOffset);
        this.updateSize();
    }

    /**
     * Positions the item to the proper sector and rotates in a way that item's bottom is directed
     * to the wheel center;
     *
     * @param {number} totalSectorsNum - total number of sectors on the parent wheel
     * @param {number} sectorIndex - sector the item is added to
     * @param {number} centerOffset - distance from wheel center to wheelItem center
     */
    updatePositionAndRotation(totalSectorsNum, sectorIndex, centerOffset){
        var me = this,
            angle = (2 * Math.PI / totalSectorsNum) * sectorIndex,
            y = - centerOffset * Math.cos(angle),
            x = - centerOffset * Math.sin(angle);

        me.position.set(x, y);
        me.rotation = -angle;
    }

    hide(){
        this.visible = false;
    }

    show(){
        this.visible = true;
    }

    updateSize() {
        const wildSubstr = RegExp("wild");
        const isWild = wildSubstr.test(this.texture.baseTexture.imageUrl);
        if(isWild){
            this.width = WILD_ITEM_CONFIG.width;
            this.height = WILD_ITEM_CONFIG.height;
        } else {
            this.width = WHEEL_ITEM_CONFIG.width;
            this.height = WHEEL_ITEM_CONFIG.height;
        }
    }
}


/***/ }),

/***/ "./js/FullScreenButton.js":
/*!********************************!*\
  !*** ./js/FullScreenButton.js ***!
  \********************************/
/*! exports provided: FullScreenButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullScreenButton", function() { return FullScreenButton; });
const CONFIG = {
    x: 100,
    y: 10
};

class FullScreenButton extends PIXI.Sprite {
    constructor () {
        super();

        this.texture = new PIXI.Texture.from("assets/images/buttons/fullscreen.png");
        this.position.set(CONFIG.x, CONFIG.y);
        this.interactive = true;
        this.buttonMode = true;
        this.on('pointerdown', this.onButtonClick.bind(this));

        this.currentState = "off";
    }

    onButtonClick () {
        if(this.currentState === "off"){
            this.currentState = "on";
            document.documentElement.requestFullscreen();
        } else if (this.currentState === "on"){
            this.currentState = "off";
            document.exitFullscreen();
        } else {
            console.error("Check for error, current state is ", this.currentState);
        }
    }
}

/***/ }),

/***/ "./js/Menu.js":
/*!********************!*\
  !*** ./js/Menu.js ***!
  \********************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var _StorageItemsManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StorageItemsManager */ "./js/StorageItemsManager.js");
/* harmony import */ var _galleryConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./galleryConfig */ "./js/galleryConfig.js");



const OFFSET = 10;
const TOP_OFFSET = 80;

class Menu extends PIXI.Container{
    constructor () {
        super();

        const itemsListContainer = new PIXI.Container();
        const gallery = this.createGalleryInterface();
        itemsListContainer.position.y = TOP_OFFSET;

        let itemsList = _StorageItemsManager__WEBPACK_IMPORTED_MODULE_0__["StorageManager"].getLocalStorageItem("itemsList");
        if (typeof itemsList.SYM0 === "undefined"){
            window.localStorage.clear();
            _StorageItemsManager__WEBPACK_IMPORTED_MODULE_0__["StorageManager"].initStorage();
            itemsList = _StorageItemsManager__WEBPACK_IMPORTED_MODULE_0__["StorageManager"].getLocalStorageItem("itemsList");
        }
        Menu.itemGroups = this.createItemsListInterface(itemsList, itemsListContainer);

        this.addChild(itemsListContainer);
        this.addChild(gallery);

        this.hideMenu();
        gallery.visible = false;
        this.gallery = gallery;
    }

    onStorageUpdated () {
        console.log("updating the storage");
        const itemsList = _StorageItemsManager__WEBPACK_IMPORTED_MODULE_0__["StorageManager"].getLocalStorageItem("itemsList");
        Menu.itemGroups.forEach(function (item, index) {
            item.countText.text = itemsList["SYM" + index].count;
        });

    }

    showMenu () {
        this.visible = true;
    }

    hideMenu () {
        this.visible = false;
    }

    createItemsListInterface (itemsList, parentContainer) {
        var me = this,
            itemGroup, itemGroups = [];

        PIXI.loader
            .load(
                Object.values(itemsList).forEach(function (item, itemIndex) {
                    item.name = Object.keys(itemsList)[itemIndex];
                    itemGroup = me.createItemContainer(parentContainer, item, itemIndex);
                    itemGroups[itemIndex] = itemGroup;
                })
            );

        return itemGroups;
    }

    createGalleryInterface () {
        const container = new PIXI.Container();
        const me = this;
        container.position.set(200, TOP_OFFSET);

        PIXI.loader
            .load(
                Object.values(_galleryConfig__WEBPACK_IMPORTED_MODULE_1__["galleryConfig"]).forEach(function (imagePath, imageIndex) {
                    const texture = new PIXI.Texture.from(imagePath);
                    const itemImage = new PIXI.Sprite(texture);

                    itemImage.height = 28;
                    itemImage.width = 28;
                    itemImage.position.set(0, (28 * imageIndex) + (10 * imageIndex));
                    itemImage.interactive = true;
                    itemImage.buttonMode = true;
                    itemImage.on('pointerdown', me.onNewImgSelected.bind(me, imagePath));

                    container.addChild(itemImage);
                })
            );

        this.addItemsListBg(container);
        return container;
    }

    onNewImgSelected(imagePath){
        this.targetSprite.texture = new PIXI.Texture.from(imagePath);
        _StorageItemsManager__WEBPACK_IMPORTED_MODULE_0__["StorageManager"].setNewImgPath(this.targetName, imagePath);
    }

    createItemContainer (parentContainer, item, itemIndex) {
        const itemContainer = new PIXI.Container();
        let itemGroup = {};

        itemGroup.button = this.addButton(itemContainer, item.name, itemIndex);
        itemGroup.countText = this.addTxt(itemContainer, item.count);
        itemGroup.buttons = this.addPlusMinusButtons(itemContainer, itemIndex, item.count);
        itemContainer.position.set(OFFSET, (OFFSET * itemIndex) + (itemIndex * itemContainer.height));

        this.addItemsListBg(itemContainer);

        parentContainer.addChild(itemContainer);
        return itemGroup;
    }

    addItemsListBg (container) {
        var graphics = new PIXI.Graphics();

        graphics.beginFill(0x3d5c5c);
        graphics.lineStyle(2, 0xDE3249, 1);
        graphics.drawRect(0, 0, container.width, container.height);
        graphics.endFill();
        graphics.blendMode = 2;

        container.addChildAt(graphics, 0);
    }

    addButton (parentContainer, name) {
        const texture = new PIXI.Texture.from(_StorageItemsManager__WEBPACK_IMPORTED_MODULE_0__["StorageManager"].getImgPath(name));
        console.warn(texture);
        const itemImage = new PIXI.Sprite(texture);
        const me = this;

        itemImage.height = 50;
        itemImage.width = 50;
        itemImage.interactive = true;
        itemImage.buttonMode = true;
        itemImage.on('pointerdown', me.onItemClick.bind(me, itemImage, name));

        parentContainer.addChild(itemImage);
    }

    addTxt (parentContainer, count) {
        const style = new PIXI.TextStyle({
                fill: '#d8df75',
                fontSize: 15,
                fontFamily: 'Arial'
            }),
            txt = new PIXI.Text(count, style);

        txt.anchor.set(0.5);
        txt.position.set(100, parentContainer.width / 2);

        parentContainer.addChild(txt);
        return txt;
    }

    addPlusMinusButtons (parentContainer, itemIndex) {
        const me = this;
        let buttons = {};

        buttons.plusButton = me.initIncrementButton(
            {
                x: 160,
                y: 0,
                width: 20,
                height: 20,
                texture: new PIXI.Texture.from("assets/images/buttons/plus.png"),
                callback: me.onPlusButtonClick.bind(me, itemIndex),
                parentContainer: parentContainer
            });

        buttons.minusButton = me.initIncrementButton(
            {
                x: 160,
                y: 30,
                width: 20,
                height: 20,
                texture: new PIXI.Texture.from("assets/images/buttons/minus.png"),
                callback: me.onMinusButtonClick.bind(me, itemIndex),
                parentContainer: parentContainer
            });

        return buttons;
    }

    initIncrementButton (config) {
        let button = new PIXI.Sprite(config.texture);

        button.position.set(config.x, config.y);
        button.interactive = true;
        button.buttonMode = true;
        button.width = config.width;
        button.height = config.height;
        button.on("pointerdown", config.callback);
        config.parentContainer.addChild(button);

        return button;
    }

    onPlusButtonClick (itemIndex) {
        _StorageItemsManager__WEBPACK_IMPORTED_MODULE_0__["StorageManager"].addItem(itemIndex, 1);
        this.updateCountText(itemIndex);
    }

    onMinusButtonClick (itemIndex) {
        _StorageItemsManager__WEBPACK_IMPORTED_MODULE_0__["StorageManager"].removeItem(itemIndex, 1);
        this.updateCountText(itemIndex);
    }

    updateCountText (itemIndex) {
        Menu.itemGroups[itemIndex].countText.text = _StorageItemsManager__WEBPACK_IMPORTED_MODULE_0__["StorageManager"].getLocalStorageItem("itemsList")["SYM" + itemIndex].count;
    }

    onItemClick (targetSprite, targetName) {
        if(targetName === this.targetName && this.isOpen){
            this.gallery.visible = false;
            this.isOpen = false;
        } else {
            this.gallery.visible = true;
            this.isOpen = true;
        }

        this.targetSprite = targetSprite;
        this.targetName = targetName;
    }
}


/***/ }),

/***/ "./js/OpenCloseButton.js":
/*!*******************************!*\
  !*** ./js/OpenCloseButton.js ***!
  \*******************************/
/*! exports provided: OpenCloseButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenCloseButton", function() { return OpenCloseButton; });
const CONFIG = {
    x: 10,
    y: 10
};

class OpenCloseButton extends PIXI.Sprite{

    constructor (menu) {
        super();

        this.position.set(CONFIG.x, CONFIG.y);
        this.interactive = true;
        this.buttonMode = true;
        this.on('pointerdown', this.onButtonClick.bind(this));
        this.openCallback = menu.showMenu.bind(menu);
        this.closeCallback = menu.hideMenu.bind(menu);

        this.currentState = "closed";
        this.setClosedTexture();
    }

    onButtonClick () {
        if(this.currentState === "closed"){
            this.currentState = "opened";
            this.setOpenedTexture();
            this.openCallback();
        } else if (this.currentState === "opened"){
            this.currentState = "closed";
            this.setClosedTexture();
            this.closeCallback();
        } else {
            console.error("Check for error, current state is ", this.currentState);
        }
    }

    setClosedTexture () {
        this.texture = new PIXI.Texture.from("assets/images/buttons/settings.png")
    }

    setOpenedTexture () {
        this.texture = new PIXI.Texture.from("assets/images/buttons/error.png")
    }

    onForseClosed () {
        this.currentState = "closed";
        this.setClosedTexture();
        this.closeCallback();
    }
}

/***/ }),

/***/ "./js/ResetButton.js":
/*!***************************!*\
  !*** ./js/ResetButton.js ***!
  \***************************/
/*! exports provided: ResetButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetButton", function() { return ResetButton; });
const CONFIG = {
    x: 20,
    y: 100,
    width: 15,
    height: 15,
};

class ResetButton extends PIXI.Sprite {
    constructor () {
        super();

        this.texture = new PIXI.Texture.from("assets/images/buttons/reset.png");
        this.position.set(CONFIG.x, window.innerHeight - 50);
        this.width = CONFIG.width;
        this.height = CONFIG.height;
        this.interactive = true;
        this.buttonMode = true;
        this.on('pointerdown', this.onButtonClick.bind(this));
    }

    onButtonClick () {
        const confirmed = confirm("Are you sure to reset all values and images to default? You may lose your progress.");

        if(confirmed){
            window.localStorage.clear();
            location.reload();
        }
    }
}

/***/ }),

/***/ "./js/SoundButton.js":
/*!***************************!*\
  !*** ./js/SoundButton.js ***!
  \***************************/
/*! exports provided: SoundButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundButton", function() { return SoundButton; });
const CONFIG = {
    x: 50,
    y: 10
};

class SoundButton extends PIXI.Sprite {
    constructor () {
        super();

        this.position.set(CONFIG.x, CONFIG.y);
        this.interactive = true;
        this.buttonMode = true;
        this.on('pointerdown', this.onButtonClick.bind(this));
        this.ambientSound = document.getElementById("ambienceSound");
        this.ambientSound.loop = true;
        this.currentState = "off";
        this.setOffTexture();
    }

    onButtonClick () {
        if(this.currentState === "off"){
            this.currentState = "on";
            this.setOnTexture();
            this.soundOn();
        } else if (this.currentState === "on"){
            this.currentState = "off";
            this.setOffTexture();
            this.soundOff();
        } else {
            console.error("Check for error, current state is ", this.currentState);
        }
    }

    soundOn () {
        this.ambientSound.play();
    }

    soundOff () {
        this.ambientSound.pause();
    }

    setOffTexture () {
        this.texture = new PIXI.Texture.from("assets/images/buttons/soundOff.png")
    }

    setOnTexture () {
        this.texture = new PIXI.Texture.from("assets/images/buttons/soundOn.png")
    }
}

/***/ }),

/***/ "./js/StorageItemsManager.js":
/*!***********************************!*\
  !*** ./js/StorageItemsManager.js ***!
  \***********************************/
/*! exports provided: StorageManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageManager", function() { return StorageManager; });
/* harmony import */ var _BonusWheel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BonusWheel */ "./js/BonusWheel.js");


class StorageManager{
    static initStorage () {
        window.localStorage.setItem("itemsList", JSON.stringify(
                {
                    SYM0: {count: 1, imgPath: "assets/images/prizes/wild.png"},
                    SYM1: {count: 1, imgPath: "assets/images/prizes/merch.png"},
                    SYM2: {count: 1, imgPath: "assets/images/prizes/bottle.png"},
                    SYM3: {count: 1, imgPath: "assets/images/prizes/backpack.png"},
                    SYM4: {count: 1, imgPath: "assets/images/prizes/wild.png"},
                    SYM5: {count: 2, imgPath: "assets/images/prizes/towel.png"},
                    SYM6: {count: 2, imgPath: "assets/images/prizes/powerbank.png"},
                    SYM7: {count: 1, imgPath: "assets/images/prizes/merch.png"},
                    SYM8: {count: 1, imgPath: "assets/images/prizes/wild.png"},
                    SYM9: {count: 1, imgPath: "assets/images/prizes/run.png"},
                    SYM10: {count: 1, imgPath: "assets/images/prizes/merch.png"},
                    SYM11: {count: 2, imgPath: "assets/images/prizes/powerbank.png"},
                }
            )
        );


    }

    static getImgPath (name) {
        if(name === "EMPTY"){
            return "assets/images/prizes/EMPTY.png";
        }
        return this.getLocalStorageItem("itemsList")[name].imgPath;
    }

    static setNewImgPath (name, newPath) {
        const itemsList = this.getLocalStorageItem("itemsList");
        itemsList[name].imgPath = newPath;
        window.localStorage.setItem("itemsList", JSON.stringify(itemsList));
        _BonusWheel__WEBPACK_IMPORTED_MODULE_0__["BonusWheel"].changeTexture(name, new PIXI.Texture.from(newPath));
    }


    static randomInt (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static getLocalStorageItem(name) {
        return JSON.parse(window.localStorage.getItem(name))
    }

    static getSectorItemsList () {
        return Object.keys(this.getLocalStorageItem("itemsList"));
    }

    static addItems (itemName, amount) {
        const itemsList = this.getLocalStorageItem("itemsList");

        itemsList[itemName].count += amount;
        window.localStorage.setItem("itemsList", JSON.stringify(itemsList));
    }

    static removeItems (itemName, amount) {
        const itemsList = this.getLocalStorageItem("itemsList");

        if(itemsList[itemName].count - amount > 0){
            itemsList[itemName].count -= amount;
        } else {
            itemsList[itemName].count = 0;
        }

        window.localStorage.setItem("itemsList", JSON.stringify(itemsList));
    }

    static addItem (index, amount) {
        console.log("index: ", index, "amount: ", amount);
        const itemsList = this.getLocalStorageItem("itemsList");

        console.warn(itemsList["SYM"+index].count, amount);
        itemsList["SYM"+index].count += amount;

        console.error(itemsList);
        window.localStorage.setItem("itemsList", JSON.stringify(itemsList));
    }


    static removeItem (index, amount) {
        const itemsList = this.getLocalStorageItem("itemsList");

        if(itemsList["SYM"+index].count - amount > 0){
            itemsList["SYM"+index].count -= amount;
        } else {
            itemsList["SYM"+index].count = 0;
        }

        window.localStorage.setItem("itemsList", JSON.stringify(itemsList));
    }

    static setItemCount (index, amount) {
        const itemsList = this.getLocalStorageItem("itemsList");

        itemsList["SYM"+index] = amount;

        window.localStorage.setItem("itemsList", JSON.stringify(itemsList));
    }

    static countItemsProbabilities (items, total) {
        var probabilities = [];

        Object.values(items).forEach(function (item) {
            probabilities.push(Math.floor(item.count * 100 / total));
        });

        return probabilities;
    }

    static countTotalItemsSum (itemsList) {
        var sum = 0;

        Object.values(itemsList).forEach(function (item) {
            sum += item.count;
        });

        return sum;
    }

    static getRandomItemAccordingToProbability () {
        var itemsList = this.getLocalStorageItem("itemsList"),
            totalItemsSum = this.countTotalItemsSum(itemsList),
            itemsProbabilities = this.countItemsProbabilities(itemsList, totalItemsSum),
            probabilityArray = [],
            random;

        console.warn({itemsProbabilities});
        Object.values(itemsList).forEach(function (item, idx) {
            for (var i = 0; i < itemsProbabilities[idx]; i++) {
                probabilityArray.push(idx);
            }
        });

        console.error({probabilityArray});

        random = this.randomInt(0, (probabilityArray.length - 1));
        console.log({random});

        return probabilityArray.sort(() => Math.random() - 0.5)[random];
    }

    static isNoMoreItems () {
        return Object.values(this.getLocalStorageItem("itemsList")).every(item => item.count === 0);
    }

    static findSectorToStopOn () {
        var me = this,
            randomIndex = me.getRandomItemAccordingToProbability(),
            itemsList = this.getLocalStorageItem("itemsList"),
            randomItem = Object.values(itemsList)[randomIndex];

        if (randomItem.count > 0) {
            randomItem.count--;
            window.localStorage.setItem("itemsList", JSON.stringify(itemsList));

            return randomIndex;
        } else {
            console.warn("no more ", randomItem.name);
            debugger;
            return me.findSectorToStopOn();
        }
    }
}

window.test = StorageManager;



/***/ }),

/***/ "./js/galleryConfig.js":
/*!*****************************!*\
  !*** ./js/galleryConfig.js ***!
  \*****************************/
/*! exports provided: galleryConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "galleryConfig", function() { return galleryConfig; });
const galleryConfig = {
    backpack: "assets/images/prizes/backpack.png",
    bottle: "assets/images/prizes/bottle.png",
    powerbank: "assets/images/prizes/powerbank.png",
    run: "assets/images/prizes/run.png",
    wild: "assets/images/prizes/wild.png",
    towel: "assets/images/prizes/towel.png",
    merch: "assets/images/prizes/merch.png",
};


/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! exports provided: animationBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationBuffer", function() { return animationBuffer; });
/* harmony import */ var _SoundButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SoundButton */ "./js/SoundButton.js");
/* harmony import */ var _ResetButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResetButton */ "./js/ResetButton.js");
/* harmony import */ var _FullScreenButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FullScreenButton */ "./js/FullScreenButton.js");
/* harmony import */ var _StorageItemsManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StorageItemsManager */ "./js/StorageItemsManager.js");
/* harmony import */ var _BonusWheel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BonusWheel */ "./js/BonusWheel.js");
/* harmony import */ var _OpenCloseButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OpenCloseButton */ "./js/OpenCloseButton.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Menu */ "./js/Menu.js");








const animationBuffer = [];

var app = new PIXI.Application(window.innerWidth, window.innerHeight, {backgroundColor : 0x000000});
document.body.appendChild(app.view);

var prerenderCallbacks = [animate],
    lastTimeStepOccured = 0,
    currentStepTime = 0,
    currentTime = 0;

lastTimeStepOccured = updateTime();

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

if(!window.localStorage.getItem("itemsList")) {
    _StorageItemsManager__WEBPACK_IMPORTED_MODULE_3__["StorageManager"].initStorage();
}

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


// Listen for animate update
app.ticker.add(function(delta) {
    prerenderCallbacks.forEach(function(cb) {
        cb();
    });
});



const menu = new _Menu__WEBPACK_IMPORTED_MODULE_6__["Menu"]();

var wheel = new _BonusWheel__WEBPACK_IMPORTED_MODULE_4__["BonusWheel"](function () {
    menu.onStorageUpdated();
}, app);

// move the sprite to the center of the screen
wheel.position.set(app.screen.width / 2, app.screen.height / 2);

window.addEventListener("resize", function() {
    app.renderer.resize(window.innerWidth, window.innerHeight);
    wheel.position.set(window.innerWidth / 2, window.innerHeight / 2);
});



const soundButton = new _SoundButton__WEBPACK_IMPORTED_MODULE_0__["SoundButton"]();
const fullScreenButton = new _FullScreenButton__WEBPACK_IMPORTED_MODULE_2__["FullScreenButton"]();
const openCloseButton = new _OpenCloseButton__WEBPACK_IMPORTED_MODULE_5__["OpenCloseButton"](menu);
const resetButton = new _ResetButton__WEBPACK_IMPORTED_MODULE_1__["ResetButton"]();

app.stage.addChild(wheel);
app.stage.addChild(menu);
app.stage.addChild(soundButton);
app.stage.addChild(openCloseButton);
app.stage.addChild(fullScreenButton);
app.stage.addChild(resetButton);
window.resetButton = resetButton;

document.documentElement.webkitRequestFullscreen();


window.addEventListener("resize", refresh);
function refresh() {
    wheel.refresh();
}

document.addEventListener("keydown", function(event) {
    if(event.keyCode === 32){
        document.removeEventListener("keydown", keyDownHandler);
        wheel.onSpinButtonDown();

        setTimeout(() => {
            wheel.releaseHardButton(() => {document.addEventListener("keydown", keyDownHandler)});
        }, 300);
    }
});

/***/ }),

/***/ 0:
/*!**************************!*\
  !*** multi ./js/main.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./js/main.js */"./js/main.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map