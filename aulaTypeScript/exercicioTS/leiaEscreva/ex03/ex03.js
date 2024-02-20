"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rl = require("readline-sync");
var valorDolarDia = rl.questionFloat('Qual o valor atual da cotação do dólar: ');
var valorClienteTem = rl.questionFloat('Qual a quantia de reais que o cliente tem: ');
var valorEmDolar = valorClienteTem / valorDolarDia;
var valorFinal = valorEmDolar - (valorEmDolar * 0.1);
console.log("O valor em d\u00F3lares com a taxa de 10% de c\u00E2mbio ficou: $".concat(valorFinal.toFixed(2), "."));
