"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Warrior_1 = require("./Warrior");
const Monster_1 = require("./Monster");
let newWarrior = new Warrior_1.Warrior("dudu", "archer", 5);
let newMonster = new Monster_1.Monster("Blue Sentinel");
console.log(newWarrior.getLife());
newMonster.attack(newWarrior);
console.log(newWarrior.getLife());
//# sourceMappingURL=index.js.map