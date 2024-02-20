"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rl = require("readline-sync");
var turno = rl.question('Qual o turno (M - manhã \ T - tarde \ N - noite): '.toUpperCase());
var nome = rl.question('Qual o seu nome: ');
switch (turno) {
    case "M":
        console.log("Bom dia ".concat(nome));
        break;
    case "T":
        console.log("Boa tarde! ".concat(nome));
        break;
    case "N":
        console.log("Boa noite! ".concat(nome));
        break;
    default:
        break;
}
