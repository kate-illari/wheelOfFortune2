import {StorageManager} from "./StorageItemsManager";
import {imagesConfig} from "./imagesConfig";

const OFFSET = 10;
const TOP_OFFSET = 80;

export class Menu extends PIXI.Container{
    constructor () {
        super();

        const itemsListContainer = new PIXI.Container();
        const imageSelectorContainer = this.createImageSelectorInterface();
        itemsListContainer.position.y = TOP_OFFSET;

        let itemsList = StorageManager.getLocalStorageItem("itemsList");
        if (typeof itemsList.SYM0 === "undefined"){
            window.localStorage.clear();
            StorageManager.initStorage();
            itemsList = StorageManager.getLocalStorageItem("itemsList");
        }
        Menu.itemGroups = this.createItemsListInterface(itemsList, itemsListContainer);

        this.addChild(itemsListContainer);
        this.addChild(imageSelectorContainer);

        this.hideMenu();
        imageSelectorContainer.visible = false;
        this.imageSelectorContainer = imageSelectorContainer;
    }

    onStorageUpdated () {
        console.log("updating the storage");
        const itemsList = StorageManager.getLocalStorageItem("itemsList");
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

    createImageSelectorInterface () {
        const container = new PIXI.Container();
        const me = this;
        container.position.set(200, TOP_OFFSET);

        PIXI.loader
            .load(
                Object.values(imagesConfig).forEach(function (imagePath, imageIndex) {
                    const texture = new PIXI.Texture.from(imagePath);
                    const itemImage = new PIXI.Sprite(texture);

                    itemImage.height = 28;
                    itemImage.width = 28;
                    itemImage.position.set(0, 28 * imageIndex);
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
        this.targetSprite.setTexture(new PIXI.Texture.from(imagePath));
        StorageManager.setNewImgPath(this.targetName, imagePath);
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
        const texture = new PIXI.Texture.from(StorageManager.getImgPath(name));
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
        StorageManager.addItem(itemIndex, 1);
        this.updateCountText(itemIndex);
    }

    onMinusButtonClick (itemIndex) {
        StorageManager.removeItem(itemIndex, 1);
        this.updateCountText(itemIndex);
    }

    updateCountText (itemIndex) {
        Menu.itemGroups[itemIndex].countText.text = StorageManager.getLocalStorageItem("itemsList")["SYM" + itemIndex].count;
    }

    onItemClick (targetSprite, targetName) {
        this.targetSprite = targetSprite;
        this.targetName = targetName;
        this.imageSelectorContainer.visible = !this.imageSelectorContainer.visible;
    }
}
