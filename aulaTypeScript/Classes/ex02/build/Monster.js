"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monster = void 0;
class Monster {
    constructor(name) {
        this.name = name;
        this.strength = 50;
        this.life = 10;
    }
    attack(warrior) {
        console.log(`The monster ${this.name} attack the warrior ${warrior.getName()}`);
        warrior.damage(this.strength);
    }
    damage(strength) {
        console.log(`The monster ${this.name} recive attack of strength ${strength}`);
        this.life = this.life - strength;
    }
    setName(newName) {
        this.name = newName;
    }
    getName() {
        return this.name;
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
    ====================== MONSTER ======================
                    Name: ${this.name}
                    Strength: ${this.strength}
                    Health: ${this.life}`);
    }
}
exports.Monster = Monster;
//# sourceMappingURL=Monster.js.map