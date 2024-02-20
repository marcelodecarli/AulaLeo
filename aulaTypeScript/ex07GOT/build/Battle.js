"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BattleOfTheHouses = void 0;
const NobleHouse_1 = require("./NobleHouse");
const Heir_1 = require("./Heir");
const baratheonHouse_1 = require("./houses/baratheonHouse");
const starkHouse_1 = require("./houses/starkHouse");
const greyjoyHouse_1 = require("./houses/greyjoyHouse");
const lannisterHouse_1 = require("./houses/lannisterHouse");
const targaryenHouse_1 = require("./houses/targaryenHouse");
function BattleOfTheHouses(house1, soldiers1, house2, soldiers2) {
    console.log(`Battle of Houses ${house1.nameHouse} and ${house2.nameHouse}`);
    if (soldiers1 > soldiers2) {
        return `${house1.nameHouse} Won the battle!`;
    }
    else if (soldiers2 > soldiers1) {
        return `${house2.nameHouse} Won the battle!`;
    }
    else {
        return 'the battle was tied!!!';
    }
}
exports.BattleOfTheHouses = BattleOfTheHouses;
let newBaratheonHouse = new baratheonHouse_1.BaratheonHouse("Baratheon", "Nossa é a Fúria!");
let newStarkHouse = new starkHouse_1.StarkHouse("Stark", "O inverno está chegando!");
let newGreyjoyHouse = new greyjoyHouse_1.GreyjoyHouse("Greyjoy", "Nós Não Semeamos!");
let newLannisterHouse = new lannisterHouse_1.LannisterHouse("Lannister", "Ouça-me Rugir!");
let newTargaryenHouse = new targaryenHouse_1.TargaryenHouse("Targaryen", "Fogo e Sangue!");
let newHeirBaratheonHouse01 = new Heir_1.Heir("MARCELO", 1991, 1);
let newHeirBaratheonHouse02 = new Heir_1.Heir("BRENDA", 1997, 2);
let newHeirBaratheonHouse03 = new Heir_1.Heir("NADIA", 1962, 3);
let newStarkHouse01 = new Heir_1.Heir("Joao", 1995, 1);
let newStarkHouse02 = new Heir_1.Heir("Pedro", 1997, 2);
let newGreyjoyHouse01 = new Heir_1.Heir("Geison", 1992, 1);
let newHouse = new NobleHouse_1.NobleHouse('House Stark', "Motto!");
newBaratheonHouse.methodHeir(newHeirBaratheonHouse01);
newBaratheonHouse.methodHeir(newHeirBaratheonHouse02);
newBaratheonHouse.methodHeir(newHeirBaratheonHouse03);
newStarkHouse.methodHeir(newStarkHouse01);
newStarkHouse.methodHeir(newStarkHouse02);
newGreyjoyHouse.methodHeir(newGreyjoyHouse01);
newBaratheonHouse.methodInformationHouse();
//# sourceMappingURL=Battle.js.map