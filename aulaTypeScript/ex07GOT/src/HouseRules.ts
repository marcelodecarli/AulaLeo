
//interface para criação de cada uma das classes (Cada casa nova que será adicionada)

import { NobleHouse } from "./NobleHouse";

export interface HouseRules extends NobleHouse {
    name: string;
    motto: string;
}