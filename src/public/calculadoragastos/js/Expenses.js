"use strict";
class ArrayList {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    get(index) {
        const item = this.items.filter((element, i) => {
            return i === index;
        });
        if (item.length === 0) {
            return null;
        }
        else {
            return item[0];
        }
    }
    createFrom(value) {
        this.items = [...value];
    }
    getAll() {
        return this.items;
    }
}
class Expenses {
    constructor(currency) {
        this.count = 0;
        this.finalCurrency = currency;
        this.expenses = new ArrayList();
    }
    add(item) {
        item.id = this.count;
        this.count++;
        this.expenses.add(item);
        return true;
    }
    get(index) {
        return this.expenses.get(index);
    }
    getItems() {
        return this.expenses.getAll();
    }
    getTotal() {
        const total = this.getItems().reduce((accumulator, item) => {
            return accumulator += this.convertCurrency(item, this.finalCurrency);
        }, 0);
        return `${this.finalCurrency} $${total.toFixed(2).toString()}`;
    }
    remove(id) {
        const items = this.getItems().filter(item => {
            return item.id != id;
        });
        this.expenses.createFrom(items);
        return true;
    }
    convertCurrency(item, finalCurrency) {
        switch (item.cost.currency) {
            case 'USD':
                switch (finalCurrency) {
                    case 'BS':
                        return item.cost.number * 4.62;
                        break;
                    default:
                        return item.cost.number;
                }
                break;
            case 'BS':
                switch (finalCurrency) {
                    case 'USD':
                        return item.cost.number / 4.62;
                        break;
                    default:
                        return item.cost.number;
                }
                break;
            default:
                return 0;
        }
    }
}
