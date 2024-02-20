"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mammal = void 0;
const Animal_1 = require("./Animal");
class Mammal extends Animal_1.Animal {
    constructor(name, age) {
        super(name, age);
    }
    nurse() {
        console.log("This mammal is nursing.");
    }
    getCoatCollor() {
        return this.coatCollor;
    }
    setCoatCollor(newCoatCollor) {
        this.coatCollor = newCoatCollor;
    }
}
exports.Mammal = Mammal;
//# sourceMappingURL=Mammal.js.map