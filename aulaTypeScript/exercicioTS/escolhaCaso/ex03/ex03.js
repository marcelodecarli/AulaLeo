"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rl = require("readline-sync");
var valorEmReais = rl.questionFloat('Qual a quantia em reais você tem: ');
var moeda = rl.question('Escolha qual moeda deseja comprar: dolar, pesos uruguaios ou euros ').toLowerCase();
var dolar = 4.89;
var pesosUruguaios = 0.12;
var euro = 5.23;
var conversaoDolar = valorEmReais / dolar;
var conversaoPesosUru = valorEmReais / pesosUruguaios;
var conversaoEuro = valorEmReais / euro;
switch (moeda) {
    case 'dolar':
        console.log("Voc\u00EA tem ".concat(conversaoDolar.toFixed(2), " d\u00F3lares."));
        break;
    case 'pesos uruguaios':
        console.log("O resultado \u00E9 ".concat(conversaoPesosUru.toFixed(2)));
        break;
    case 'euros':
        console.log("O resultado \u00E9 ".concat(conversaoEuro.toFixed(2)));
        break;
    default:
        console.log("Op\u00E7\u00E3o inv\u00E1lida! ".concat(moeda, ". Refa\u00E7a!"));
        break;
}
