const CONFIG = {
    x: 20,
    y: 100,
    width: 15,
    height: 15,
};

export class ResetButton extends PIXI.Sprite {
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