"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Owl = void 0;
class Owl {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    chrip() {
        console.log("Hu hu");
    }
    eat(quantity) {
        console.log("The little owl has eaten: " + quantity);
        let percent = +quantity * 0.1;
    }
    fly(time) {
        console.log("The little owl has flown for: " + time + " minutes.");
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        this.name = newName;
    }
    getWeight() {
        return this.weight;
    }
    setWeight(newWeight) {
        this.weight = newWeight;
    }
}
exports.Owl = Owl;
//# sourceMappingURL=Owl.js.map