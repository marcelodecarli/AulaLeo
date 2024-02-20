
export class Animal  {
    private name: string;
    private age: number;

    constructor(name: string, age: number){
        this.name = name,
        this.age = age
    }


    emitSound(): string {
        return `${this.name} sound of animal.`
    }

    getName(): string {
        return this.name
    }
    setName(newName: string) {
        this.name = newName
    }
    getAge(): number {
        return this.age
    }
    setAge(newAge: number) {
        this.age = newAge
    }



}
