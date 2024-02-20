"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warrior = void 0;
class Warrior {
    constructor(name, type, strength) {
        this.name = name;
        this.type = type;
        this.strength = strength;
        this.life = 100;
    }
    attack(monster) {
        console.log(`${this.name} Attaaaaackkk the monster ${monster.getName()}`);
        monster.damage(this.strength);
    }
    damage(strength) {
        console.log(`Defenseeeeee... ${this.name} receive the attack ${strength}`);
        this.life = this.life - strength;
    }
    setName(newName) {
        this.name = newName;
    }
    getName() {
        return this.name;
    }
    setType(newType) {
        this.type = newType;
    }
    getType() {
        return this.type;
    }
    setStrength(newStrength) {
        this.strength = newStrength;
    }
    getStrength() {
        return this.strength;
    }
    setLife(newLife) {
        this.life = newLife;
    }
    getLife() {
        return this.life;
    }
    info() {
        console.log(`
======================= WARRIOR =======================
                    Name: ${this.name}
                    Type: ${this.type}
                    Strength: ${this.strength}
                    Health: ${this.life}`);
    }
}
exports.Warrior = Warrior;
//# sourceMappingURL=Warrior.js.map