import { Animal } from "./Animal";
export class Mammal extends Animal {

    protected coatCollor: string

    constructor(name: string, weight: number, coatCollor: string) {
        super(name, weight);
        this.coatCollor = coatCollor
    }

    nurse() {
         return "This mammal is nursing."
    }

    showCharacteristics(): void{
        console.log(`
            The name is ${this.name}, 
            its age ${this.weight} and
            its coat is ${this.coatCollor}
        `);
    }
}