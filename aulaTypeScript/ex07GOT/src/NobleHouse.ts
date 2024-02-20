import { Heir } from "./Heir";
import { HouseHeir } from "./HouseHeir";
import { BaratheonHouse } from "./houses/baratheonHouse";
import { StarkHouse } from "./houses/starkHouse";
import { GreyjoyHouse } from "./houses/greyjoyHouse";
import { LannisterHouse } from "./houses/lannisterHouse";
import { TargaryenHouse } from "./houses/targaryenHouse";


//criação da classe NobleHouse

export class NobleHouse {
    nameHouse: string //nome da casa
    houseMotto: string //lema da casa
    listHeir: Heir[] = []

    constructor(nameHouse: string, houseMotto: string) {
        this.nameHouse = nameHouse,
            this.houseMotto = houseMotto

    }

    //método para adicionar os herdeiros a uma lista: Quero criar um método que envie para cada casa

    methodHeir(heir: Heir): void {
        //let list: Heir[] = [...this.listHeir]
        this.listHeir.push(heir)
        //this.listHeir = list
    }


    //método para exibir informações da casa e o nome do herdeiro: falta o nome do herdeiro nesse método
    methodInformationHouse(): void {

        console.log(`Nome da casa: ${this.nameHouse} Lema da casa: ${this.houseMotto} Herdeiros:`);
        console.log(this.listHeir)
        /* 
        for (let i = 0; i < this.listHeir.length; i++) {
            const heir = this.listHeir[i];
            console.log(`${i + 1}. ${heir.name}, age: ${heir.year}, position in succession: ${heir.rankingHeir}`)
            
        }*/
    }

    

    // public getnameHouse(): string {
    //     return this.nameHouse
    // }
    // public setnameHouse(newNameHouse: string) {
    //     this.nameHouse = newNameHouse
    // }

    // public gethouseMotto(): string {
    //     return this.houseMotto
    // }
    // public sethouseMotto(newHouseMotto: string) {
    //     this.houseMotto = newHouseMotto
    // }

    // methodConstructor(): void {
    //     console.log(`Name Noble house: ${this.getnameHouse}. Motto of Noble house: ${this.gethouseMotto}`)
    // }

}