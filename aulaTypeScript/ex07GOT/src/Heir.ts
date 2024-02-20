import { HouseHeir } from "./HouseHeir";

//aqui temos a classe propriamente dita de herdeiros, estendendo da interface HouseHeir
export class Heir implements HouseHeir {

    name: string
    year: number
    rankingHeir: number


    constructor(name: string, year: number, rankingHeir: number) {
        name = this.name
        year = this.year
        rankingHeir = this.rankingHeir
    }
}