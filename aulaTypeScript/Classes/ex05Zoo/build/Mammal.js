"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mammal = void 0;
const Animal_1 = require("./Animal");
class Mammal extends Animal_1.Animal {
    constructor(name, age, coatCollor) {
        super(name, age);
        this.coatCollor = coatCollor;
    }
    nurse() {
        return "This mammal is nursing.";
    }
    showCharacteristics() {
        console.log(`
            The name is ${this.name}, 
            its age ${this.age} and
            its coat is ${this.coatCollor}
        `);
    }
}
exports.Mammal = Mammal;
//# sourceMappingURL=Mammal.js.map