import { Animal } from "./Animal";
export class Bird extends Animal {

    protected wingspan: number

    constructor(name: string, weight: number, wingspan: number) {
        super(name, weight)
        this.wingspan = wingspan
    }


    showCharacteristics(): void {
        console.log(`
            The name is ${this.name}, 
            its age ${this.weight} and
            its coat is ${this.wingspan}
        `);
    }
}