"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rl = require("readline-sync");
var num1 = rl.questionFloat('Digite o primeiro valor: ');
var num2 = rl.questionFloat('Digite o segundo valor: ');
var calculo = rl.question('Escreve somar, dividir, subtrair ou multiplicar e veja o resultado: ');
var somar = num1 + num2;
var subtrair = num1 - num2;
var dividir = num1 / num2;
var multiplicar = num1 * num2;
if (calculo === 'somar') {
    console.log("O resultado \u00E9 ".concat(somar));
}
else if (calculo === 'dividir') {
    console.log("O resultado \u00E9 ".concat(dividir));
}
else if (calculo === 'subtrair') {
    console.log("O resultado \u00E9 ".concat(subtrair));
}
else if (calculo === 'multiplicar') {
    console.log("O resultado \u00E9 ".concat(multiplicar));
}
else {
    console.log("Opera\u00E7\u00E3o inv\u00E1lida.");
}
