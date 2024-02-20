import { EletricCar } from "./eletricCar";
import { Car } from "./car";

function displayCarInfo(car: Car): void {
    console.log(`Brand: ${car.brand}, Model ${car.model}, Year ${car.year}.`)
}
