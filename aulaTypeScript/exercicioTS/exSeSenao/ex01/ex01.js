"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rl = require("readline-sync");
var nome = rl.question('Qual o seu nome: ');
var genero = rl.question('Diga seu gênero: ').toLowerCase();
if (genero === 'masculino') {
    console.log("Bem vindo ".concat(nome, "!"));
}
else if (genero === 'feminino') {
    console.log("Bem vinda ".concat(nome, "!"));
}
else if (genero === 'nao binario') {
    console.log("Bem vinde ".concat(nome, "!"));
}
else {
    console.log('Invalido!');
}
