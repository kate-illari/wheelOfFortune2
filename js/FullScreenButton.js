const CONFIG = {
    x: 100,
    y: 10
};

export class FullScreenButton extends PIXI.Sprite {
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