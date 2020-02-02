import {BonusWheel} from "./BonusWheel";

export class StorageManager{
    static initStorage () {
        window.localStorage.setItem("itemsList", JSON.stringify(
                {
                    SYM0: {count: 1, imgPath: "assets/images/prizes/backpack.png"},
                    SYM1: {count: 5, imgPath: "assets/images/prizes/bag.png"},
                    SYM2: {count: 5, imgPath: "assets/images/prizes/bottle.png"},
                    SYM3: {count: 5, imgPath: "assets/images/prizes/bag_laptop.png"},
                    SYM4: {count: 5, imgPath: "assets/images/prizes/certificate.png"},
                    SYM5: {count: 5, imgPath: "assets/images/prizes/fly.png"},
                    SYM6: {count: 5, imgPath: "assets/images/prizes/memory_card.png"},
                    SYM7: {count: 5, imgPath: "assets/images/prizes/pen.png"},
                    SYM8: {count: 5, imgPath: "assets/images/prizes/notebook.png"},
                    SYM9: {count: 5, imgPath: "assets/images/prizes/pendant.png"},
                    SYM10: {count: 7, imgPath: "assets/images/prizes/phone_cover.png"},
                    SYM11: {count: 5, imgPath: "assets/images/prizes/powerbank.png"},
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
        BonusWheel.changeTexture(name, new PIXI.Texture.from(newPath));
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

