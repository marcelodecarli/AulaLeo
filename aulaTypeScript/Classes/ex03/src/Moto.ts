import { Veiculo } from "./Veiculo";

export class Moto extends Veiculo {
    /*Nesse exemplo a moto herdou ligar() e desligar() da classe pai Veiculo*/
    empinar() {
        console.log("Moto empinando.")
    }
}