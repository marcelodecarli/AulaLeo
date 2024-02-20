"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rl = require("readline-sync");
var calculo = rl.question('Escolha o tipo de cálculo: somar, dividir, subtrair ou multiplicar'.toLowerCase());
var num1 = rl.questionFloat('Digite um número: ');
var num2 = rl.questionFloat('Digite outro número: ');
switch (calculo) {
    case "somar":
        console.log("O resultado \u00E9 ".concat(num1, " + ").concat(num2, " = ").concat(num1 + num2));
        break;
    case "subtrair":
        console.log("O resultado \u00E9 ".concat(num1, " - ").concat(num2, " = ").concat(num1 - num2));
        break;
    case "multiplicar":
        console.log("O resultado \u00E9 ".concat(num1, " x ").concat(num2, " = ").concat(num1 * num2));
        break;
    case "dividir":
        console.log("O resultado \u00E9 ".concat(num1, " / ").concat(num2, " = ").concat(num1 / num2));
        break;
    default:
        break;
}
