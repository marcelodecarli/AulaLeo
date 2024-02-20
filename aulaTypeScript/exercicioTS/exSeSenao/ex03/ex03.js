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
if (moeda === 'dolar') {
    console.log("Voc\u00EA tem ".concat(conversaoDolar, " d\u00F3lares."));
}
else if (moeda === 'pesos uruguaios') {
    console.log("O resultado \u00E9 ".concat(conversaoPesosUru));
}
else if (moeda === 'euros') {
    console.log("O resultado \u00E9 ".concat(conversaoEuro));
}
else {
    console.log("Opera\u00E7\u00E3o inv\u00E1lida.");
}
