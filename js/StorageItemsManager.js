export class StorageManager{
    static initStorage () {
        window.localStorage.setItem("itemsList", JSON.stringify([
                {name: "SYM8", count: 50},
                {name: "SYM8", count: 50},
                {name: "SYM1", count: 40},
                {name: "SYM8", count: 50},
                {name: "SYM8", count: 50},
                {name: "SYM2", count: 40},
                {name: "SYM8", count: 50},
                {name: "SYM8", count: 50},
                {name: "SYM3", count: 40},
                {name: "SYM8", count: 50},
                {name: "SYM8", count: 50},
                {name: "SYM8", count: 50}
            ])
        );
    }

    static randomInt (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static getSectorItemsList () {
        var list = [];

        JSON.parse(window.localStorage.getItem("itemsList")).forEach(function (item) {
            list.push(item.name);
        });

        return list;
    }

    static addItems (itemName, amount) {
        var itemsList = JSON.parse(window.localStorage.getItem("itemsList")),
            updatedList = itemsList.map(function (item) {
                if (itemName === item.name) {
                    item.count += amount;
                }
                return item;
            });

        window.localStorage.setItem("itemsList", JSON.stringify(updatedList));
    }

    static removeItems (itemName, amount) {
        var itemsList = JSON.parse(window.localStorage.getItem("itemsList")),
            updatedList = itemsList.map(function (item) {
                if (itemName === item.name) {
                    if (item.count - amount > 0) {
                        item.count -= amount;
                    } else {
                        item.count = 0;
                    }
                }
                return item
            });

        window.localStorage.setItem("itemsList", JSON.stringify(updatedList));
    }

    static addItem (index, amount) {
        var itemsList = JSON.parse(window.localStorage.getItem("itemsList")),
            updatedList = itemsList.map(function (item, itemIdx) {
                if (index === itemIdx) {
                    item.count += amount;
                }
                return item;
            });

        window.localStorage.setItem("itemsList", JSON.stringify(updatedList));
    }


    static removeItem (index, amount) {
        var itemsList = JSON.parse(window.localStorage.getItem("itemsList")),
            updatedList = itemsList.map(function (item, itemIdx) {
                if (index === itemIdx) {
                    if (item.count - amount > 0) {
                        item.count -= amount;
                    } else {
                        item.count = 0;
                    }
                }
                return item;
            });

        window.localStorage.setItem("itemsList", JSON.stringify(updatedList));
    }

    static setItemCount (index, amount) {
        var itemsList = JSON.parse(window.localStorage.getItem("itemsList")),
            updatedList = itemsList.map(function (item, itemIdx) {
                if (index === itemIdx) {
                    item.count = amount;
                }
                return item;
            });

        window.localStorage.setItem("itemsList", JSON.stringify(updatedList));
    }

    static countItemsProbabilities (items, total) {
        var probabilities = [];

        items.forEach(function (item) {
            probabilities.push(Math.floor(item.count * 100 / total));
        });

        return probabilities;
    }

    static countTotalItemsSum (itemsList) {
        var sum = 0;

        itemsList.forEach(function (item) {
            sum += item.count;
        });

        return sum;
    }

    static getRandomItemAccordingToProbability () {
        var itemsList = JSON.parse(window.localStorage.getItem("itemsList")),
            totalItemsSum = this.countTotalItemsSum(itemsList),
            itemsProbabilities = this.countItemsProbabilities(itemsList, totalItemsSum),
            probabilityArray = [],
            random;

        console.warn({itemsProbabilities});
        itemsList.forEach(function (item, idx) {
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
        return JSON.parse(window.localStorage.getItem("itemsList")).every(item => item.count === 0);
    }

    static findSectorToStopOn () {
        var me = this,
            randomIndex = me.getRandomItemAccordingToProbability(),
            itemsList = JSON.parse(window.localStorage.getItem("itemsList")),
            randomItem = itemsList[randomIndex];

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


