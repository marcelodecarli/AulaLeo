"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Moto_1 = require("./Moto");
const Carro_1 = require("./Carro");
function realizarAcao(veiculo) {
    veiculo.ligar();
    veiculo.desligar();
}
const meuCarro = new Carro_1.Carro();
const minhaMoto = new Moto_1.Moto();
meuCarro.acelerar();
meuCarro.ligar;
//# sourceMappingURL=index.js.map