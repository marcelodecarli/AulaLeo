import { Warrior } from "./Warrior";
import { Monster } from "./Monster";

let newWarrior = new Warrior("dudu", "archer", 5)

let newMonster = new Monster("Blue Sentinel")


// console.log(newMonster.getLife())
// newWarrior.attack(newMonster)

// console.log(newMonster.getLife())


console.log(newWarrior.getLife())
newMonster.attack(newWarrior)

console.log(newWarrior.getLife())

// newMonster.info()
// newWarrior.info()