import { Animal } from "./Animal";
export class Mammal extends Animal {

    private coatCollor: string

    constructor(name: string, age: number, coatCollor: string) {
        super(name, age);
        this.coatCollor = coatCollor
    }

    nurse() {
        console.log("This mammal is nursing.")
    }

    getCoatCollor() {
        return this.coatCollor
    }
    setCoatCollor(newCoatCollor: string) {
        this.coatCollor = newCoatCollor
    }
}