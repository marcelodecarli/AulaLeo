//nesse import recebemos os valores de Warrior
import { Warrior } from "./Warrior";

export class Monster {
    //atributtes
    private name: string;
    private strength: number;
    private life: number

    constructor(name: string) {
        this.name = name;
        this.strength = 50
        this.life = 10
    }

    //methods
    attack(warrior: Warrior): void {
        console.log(`The monster ${this.name} attack the warrior ${warrior.getName()}`)
        warrior.damage(this.strength);

    }
    damage(strength: number): void {
        console.log(`The monster ${this.name} recive attack of strength ${strength}`)
        this.life = this.life - strength
    }
    
    public setName(newName: string) {
        this.name = newName
    }

    public getName(): string {
        return this.name
    }

    public setStrength(newStrength: number) {
        this.strength = newStrength
    }

    public getStrength(): number {
        return this.strength
    }

    public setLife (newLife: number) {
        this.life = newLife
    }

    public getLife (): number {
        return this.life
    }

    info(): void {
        console.log(`
    ====================== MONSTER ======================
                    Name: ${this.name}
                    Strength: ${this.strength}
                    Health: ${this.life}`)
    }
}

