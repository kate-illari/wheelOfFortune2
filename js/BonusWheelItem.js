const WHEEL_ITEM_CONFIG = {
    width: 110,
    height: 110
};
const WILD_ITEM_CONFIG = {
    width: 150,
    height: 150,
}

export class BonusWheelItem extends PIXI.Sprite {
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
