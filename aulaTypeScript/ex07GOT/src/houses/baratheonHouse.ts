import { NobleHouse } from "../NobleHouse"
import { HouseHeir } from "../HouseHeir"
import { Heir } from "../Heir"
import { HouseRules } from "../HouseRules"

export class BaratheonHouse extends NobleHouse implements HouseRules {

    name: string;
    motto: string

    constructor(name: string, motto: string) {
        super(name, motto)
    }
}
