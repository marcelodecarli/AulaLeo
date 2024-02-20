import { Veiculo } from "./Veiculo";

export class Carro extends Veiculo {
    /*Nesse exemplo o carro herdou ligar() e desligar() da classe pai Veiculo*/
    acelerar() {
        console.log("Carro acelerando.")
    }
}