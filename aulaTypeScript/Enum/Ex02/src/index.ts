import { Pizza } from "./Pizzas";
import { Sabores } from "./Sabores";


let newPizza2 = new Pizza(Sabores.CALABRESA, 'grande', 95)
let newPizza3 = new Pizza(Sabores.CAMARAO, 'média', 59)
let newPizza4 = new Pizza(Sabores.CHOCOLATE, 'broto', 40)

console.log(newPizza2.getDescricao())

// console.log(newPizza2)
// console.log(newPizza3)
// console.log(newPizza4)
