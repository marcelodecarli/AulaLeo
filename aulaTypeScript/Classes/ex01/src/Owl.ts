export class Owl {
    private name: string
    private weight: number

    constructor(name: string, weight: number) {
        this.name = name;
        this.weight = weight
    }

    chrip(): void {
        console.log("Hu hu")
    }
    eat(quantity: number) {
        console.log("The little owl has eaten: " + quantity)
        let percent = + quantity * 0.1
    }
    fly(time: number) {
        console.log("The little owl has flown for: " + time + " minutes.")
    }

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

