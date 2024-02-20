"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bird = void 0;
const Animal_1 = require("./Animal");
class Bird extends Animal_1.Animal {
    constructor(name, age) {
        super(name, age);
    }
    fly() {
        console.log("This bird is flying.");
    }
    getWingspan() {
        return this.wingspan;
    }
    setWingspan(newWingspanr) {
        this.wingspan = newWingspanr;
    }
}
exports.Bird = Bird;
//# sourceMappingURL=Birds.js.map