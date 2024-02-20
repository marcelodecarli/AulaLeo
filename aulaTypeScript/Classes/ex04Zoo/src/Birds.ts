import { Animal } from "./Animal";
export class Bird extends Animal {

    private wingspan: number

    constructor(name: string, age: number, wingspan: number) {
        super(name, age)
        this.wingspan = wingspan
    }



    fly() {
        console.log("This bird is flying.")
    }

    getWingspan() {
        return this.wingspan
    }
    setWingspan(newWingspanr: number) {
        this.wingspan = newWingspanr
    }
}