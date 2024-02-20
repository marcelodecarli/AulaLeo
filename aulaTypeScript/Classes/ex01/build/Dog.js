"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
class Dog {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    bark() {
        console.log("Au au au au");
    }
    eat(quantity) {
        console.log("The dog has eaten: " + quantity);
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
exports.Dog = Dog;
//# sourceMappingURL=Dog.js.map