import { Monster } from "./Monster";

export class Warrior {
    //atributtes
    private name: string;
    private type: string;
    private strength: number;
    private life: number

    constructor(name: string, type: string, strength: number) {
        this.name = name;
        this.type = type
        this.strength = strength
        this.life = 100
    }

    //methods
    //metodo que faz com que o herói ataque o monstro
    attack(monster: Monster): void {
        console.log(`${this.name} Attaaaaackkk the monster ${monster.getName()}`)
        monster.damage(this.strength);
    }
    //método que faz com que o heróis sofra um dano do monstro
    damage(strength: number): void {
        console.log(`Defenseeeeee... ${this.name} receive the attack ${strength}`)
        this.life = this.life - strength
    }

    public setName(newName: string) {
        this.name = newName
    }

    public getName(): string {
        return this.name
    }
    public setType(newType: string) {
        this.type = newType
    }

    public getType(): string {
        return this.type
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

    //método para apresesentar os dados do heroi
    info(): void {
        console.log(`
======================= WARRIOR =======================
                    Name: ${this.name}
                    Type: ${this.type}
                    Strength: ${this.strength}
                    Health: ${this.life}`)
    }
}