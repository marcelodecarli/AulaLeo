import { NobleHouse } from "./NobleHouse";
import { HouseRules } from "./HouseRules";
import { HouseHeir } from "./HouseHeir";
import { Heir } from "./Heir";
import { BaratheonHouse } from "./houses/baratheonHouse";
import { StarkHouse } from "./houses/starkHouse";
import { GreyjoyHouse } from "./houses/greyjoyHouse";
import { LannisterHouse } from "./houses/lannisterHouse";
import { TargaryenHouse } from "./houses/targaryenHouse";



export function BattleOfTheHouses(
    house1: BaratheonHouse | GreyjoyHouse | LannisterHouse | StarkHouse | TargaryenHouse,
    soldiers1: number,
    house2: BaratheonHouse | GreyjoyHouse | LannisterHouse | StarkHouse | TargaryenHouse,
    soldiers2: number): string {

    console.log(`Battle of Houses ${house1.nameHouse} and ${house2.nameHouse}`)

    if (soldiers1 > soldiers2) {
        return `${house1.nameHouse} Won the battle!`
    } else if (soldiers2 > soldiers1) {
        return `${house2.nameHouse} Won the battle!`
    } else {
        return 'the battle was tied!!!'
    }
}



//criação de novas casas

let newBaratheonHouse = new BaratheonHouse("Baratheon", "Nossa é a Fúria!")
let newStarkHouse = new StarkHouse("Stark", "O inverno está chegando!")
let newGreyjoyHouse = new GreyjoyHouse("Greyjoy", "Nós Não Semeamos!")
let newLannisterHouse = new LannisterHouse("Lannister", "Ouça-me Rugir!")
let newTargaryenHouse = new TargaryenHouse("Targaryen", "Fogo e Sangue!")


//criando herdeiros

let newHeirBaratheonHouse01 = new Heir("MARCELO", 1991, 1)
let newHeirBaratheonHouse02 = new Heir("BRENDA", 1997, 2)
let newHeirBaratheonHouse03 = new Heir("NADIA", 1962, 3)

let newStarkHouse01 = new Heir("Joao", 1995, 1)
let newStarkHouse02 = new Heir("Pedro", 1997, 2)

let newGreyjoyHouse01 = new Heir("Geison", 1992, 1)


let newHouse = new NobleHouse('House Stark', "Motto!")


//método criado na NobleHouse para adicionar os herdeiros à uma lista
//Quero criar um método que envie para cada casa

newBaratheonHouse.methodHeir(newHeirBaratheonHouse01)
newBaratheonHouse.methodHeir(newHeirBaratheonHouse02)
newBaratheonHouse.methodHeir(newHeirBaratheonHouse03)

newStarkHouse.methodHeir(newStarkHouse01)
newStarkHouse.methodHeir(newStarkHouse02)

newGreyjoyHouse.methodHeir(newGreyjoyHouse01)

newBaratheonHouse.methodInformationHouse()

// let winner = BattleOfTheHouses(newBaratheonHouse, newBaratheonHouse.soldierNumber, newStarkHouse, newStarkHouse.soldierNumber);
// console.log(winner);