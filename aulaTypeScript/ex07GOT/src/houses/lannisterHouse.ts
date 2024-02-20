import { NobleHouse } from "../NobleHouse"
import { HouseHeir } from "../HouseHeir"
import { Heir } from "../Heir"
import { HouseRules } from "../HouseRules"

export class LannisterHouse extends NobleHouse implements HouseRules {

    name: string;
    motto: string

    constructor(nameHouse: string, houseMotto: string){
        super(nameHouse, houseMotto)
    }
}

