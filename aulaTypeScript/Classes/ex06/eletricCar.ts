import {Car} from "./car"


export interface EletricCar extends Car{
    batteryCapacity: number;
    chargeBattery(): void;
}

