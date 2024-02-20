"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bird = void 0;
const Animal_1 = require("./Animal");
class Bird extends Animal_1.Animal {
    constructor(name, age, wingspan) {
        super(name, age);
        this.wingspan = wingspan;
    }
    showCharacteristics() {
        console.log(`
            The name is ${this.name}, 
            its age ${this.age} and
            its coat is ${this.wingspan}
        `);
    }
}
exports.Bird = Bird;
//# sourceMappingURL=Birds.js.map