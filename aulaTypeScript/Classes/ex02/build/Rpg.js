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
        console.log("Attaaaaackkk");
        monster.damage(this.strength);
    }
    damage(strength) {
        console.log("Defenseeeeee...");
        this.life = this.life - strength;
    }
}
exports.Warrior = Warrior;
//# sourceMappingURL=Rpg.js.map