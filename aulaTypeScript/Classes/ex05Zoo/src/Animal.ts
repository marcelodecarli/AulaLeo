
export class Animal  {
    protected name: string;
    protected weight: number;

    constructor(name: string, weight: number){
        this.name = name,
        this.weight = weight
    }


    emitSound(): string {
        return `${this.name} sound of animal.`
    }
}
