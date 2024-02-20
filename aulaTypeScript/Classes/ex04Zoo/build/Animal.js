"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(name, age) {
        this.name = name,
            this.age = age;
    }
    emitSound() {
        return "sound of animal.";
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        this.name = newName;
    }
    getAge() {
        return this.age;
    }
    setAge(newAge) {
        this.age = newAge;
    }
}
exports.Animal = Animal;
//# sourceMappingURL=Animal.js.map