import { Veiculo } from "./Veiculo";
import { Moto } from "./Moto";
import { Carro } from "./Carro";


/*A função realizarAcao aceita um parametro do tipo veiculo,
que é a classe base ou classe pai. No entanto, você passar objetos de classes
derivadas (Carro e Moto) como argumentos para essa função. Isso é possível porque 
objetos das classe derivadas são tratadas como objetos da classe base, graças ao polimorfismo. */

function realizarAcao(veiculo: Veiculo) {
    veiculo.ligar()
    veiculo.desligar()
}

const meuCarro = new Carro();
const minhaMoto = new Moto();

// realizarAcao(meuCarro)
// realizarAcao(minhaMoto)
meuCarro.acelerar()
realizarAcao(meuCarro)