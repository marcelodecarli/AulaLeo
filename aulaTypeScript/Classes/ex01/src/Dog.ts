import { Animal } from "./Animal";

export class Dog extends Animal {
    //atributtes 
    /*this code is if haven't parent class
    // private name: string;
    // private weight: number
*/
    constructor(name: string, weight: number) {
        super(name, weight)
    } 

    //methods
    bark(): void {
        console.log("Au au au au")
    }
    // eat(quantity: number): void {
    //     console.log("The dog has eaten: " + quantity)
    // }

    public getName(): string {
        return this.name
    }

    public setName(newName: string) {
        this.name = newName
    }
    public getWeight(): number {
        return this.weight
    }

    public setWeight(newWeight: number) {
        this.weight = newWeight
    }

}

