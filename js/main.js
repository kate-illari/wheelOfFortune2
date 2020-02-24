import {SoundButton} from "./SoundButton";
import {ResetButton} from "./ResetButton";
import {FullScreenButton} from "./FullScreenButton";
import {StorageManager} from "./StorageItemsManager";
import {BonusWheel} from "./BonusWheel";
import {OpenCloseButton} from "./OpenCloseButton";
import {Menu} from "./Menu";

export const animationBuffer = [];

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
    StorageManager.initStorage();
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



const menu = new Menu();

var wheel = new BonusWheel(function () {
    menu.onStorageUpdated();
}, app);

// move the sprite to the center of the screen
wheel.position.set(app.screen.width / 2, app.screen.height / 2);

window.addEventListener("resize", function() {
    app.renderer.resize(window.innerWidth, window.innerHeight);
    wheel.position.set(window.innerWidth / 2, window.innerHeight / 2);
});



const soundButton = new SoundButton();
const fullScreenButton = new FullScreenButton();
const openCloseButton = new OpenCloseButton(menu);
const resetButton = new ResetButton();

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