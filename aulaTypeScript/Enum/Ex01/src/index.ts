import { Level } from "./Level";
import { Survivor } from "./Survivor";

let newSurvivor = new Survivor(1)
console.log(newSurvivor.getLevel())

newSurvivor.levelUp()

console.log(newSurvivor.getLevel())