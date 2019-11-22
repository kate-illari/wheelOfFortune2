const CONFIG = {
    x: 50,
    y: 10
};

export class SoundButton extends PIXI.Sprite {
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