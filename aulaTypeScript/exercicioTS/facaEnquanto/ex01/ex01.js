"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
// Criei um array vazio para armazenar cada funcionário
var cadastro = [];
// solicita ao usuário a quantidade de funcionários
var numFuncionarios = parseInt(readline.question("Digite a quantidade de funcionários: "));
// Usa um loop for para ler os dados de cada funcionário e adicioná-los ao array
for (var i = 0; i < numFuncionarios; i++) {
    var nome = readline.question("Digite o nome do funcion\u00E1rio ".concat(i + 1, ": "));
    var genero = readline.question("Digite o g\u00EAnero do funcion\u00E1rio (M para masculino, F para feminino, NB para n\u00E3o-bin\u00E1rio): ").toUpperCase();
    var salario = readline.questionFloat("Digite o sal\u00E1rio do funcion\u00E1rio : ");
    cadastro.push({ nome: nome, genero: genero, salario: salario });
}
// Usa o método reduce para somar os salários de cada gênero e o total
var salarioHomens = cadastro.reduce(function (acc, func) { return func.genero === 'M' ? acc + func.salario : acc; }, 0); //acc = acumulador
var salarioMulheres = cadastro.reduce(function (acc, func) { return func.genero === 'F' ? acc + func.salario : acc; }, 0); //func representa o funcionário
var salarioNaoBinarios = cadastro.reduce(function (acc, func) { return func.genero === 'NB' ? acc + func.salario : acc; }, 0);
var totalSalarios = salarioHomens + salarioMulheres + salarioNaoBinarios; // com o resultado do reduce de cada genero, criei um total da empresa
// Usa o método sort para ordenar o array por salário e pega o maior valor
var maiorSalario = cadastro.sort(function (a, b) { return b.salario - a.salario; })[0];
// Mostra os resultados na tela
console.log("O sal\u00E1rio mais alto \u00E9 de ".concat(maiorSalario.salario, ", do funcion\u00E1rio ").concat(maiorSalario.nome, " de g\u00EAnero ").concat(maiorSalario.genero, "."));
console.log("A quantidade de funcion\u00E1rios masculinos \u00E9 de ".concat(cadastro.filter(function (func) { return func.genero === 'M'; }).length, " funcion\u00E1rios."));
console.log("A quantidade de funcion\u00E1rias femininas \u00E9 de ".concat(cadastro.filter(function (func) { return func.genero === 'F'; }).length, " funcion\u00E1rios."));
console.log("A quantidade de funcion\u00E1rias (os) n\u00E3o-bin\u00E1rias \u00E9 de ".concat(cadastro.filter(function (func) { return func.genero === 'NB'; }).length, " funcion\u00E1rios."));
console.log("Folha salarial da empresa \u00E9 de R$".concat(totalSalarios.toFixed(2), "."));
console.log("Folha salarial somente dos homens \u00E9 de R$".concat(salarioHomens.toFixed(2)));
console.log("Folha salarial somente das mulheres \u00E9 de R$".concat(salarioMulheres.toFixed(2)));
console.log("Folha salarial somente das (os) n\u00E3o-bin\u00E1rios \u00E9 de R$".concat(salarioNaoBinarios.toFixed(2)));
// import * as readline from 'readline-sync'
// let cadastro: Array<{nome: string; genero: string; salario: number}> = []
// let funcHomem: number = 0
// let salarioHomens: number = 0
// let funcMulher: number = 0
// let salarioMulheres: number = 0
// let funcNaoBinarios: number = 0
// let salarioNaoBinarios: number = 0
// let numFuncionarios: number = 0;
// let totalSalarios: number = 0;
// numFuncionarios = parseInt(readline.question("Digite a quantidade de funcionários: "));
// let index = 0;
// while (index < numFuncionarios){
//     let nome: string = readline.question(`Digite o nome do funcionário ${index + 1}: `);
//     let genero: string = readline.question(`Digite o gênero do funcionário (M para masculino, F para feminino, NB para não-binário): `).toUpperCase();
//     let salario: number = readline.questionFloat(`Digite o salário do funcionário : `);
//     cadastro.push({nome, genero, salario});
//     totalSalarios += cadastro[index].salario;
//     index++;
// }
//   if (cadastro[index].genero === 'M') {
//     funcHomem++;
//     salarioHomens += cadastro[index].salario;
//   } else if (cadastro[index].genero === 'F') {
//     funcMulher++;
//     salarioMulheres += cadastro[index].salario;
//   } else if (cadastro[index].genero === 'NB') {
//     funcNaoBinarios++;
//     salarioNaoBinarios += cadastro[index].salario;
//   }
// // let generoMaiorSalario: string = "";
// let maiorSalario: number = Math.max(cadastro[index].salario); //Math.max() procura o maior numero
// console.log(`O salario mais alto é de ${maiorSalario}. `)
// console.log(`A quantidade de funcionários masculinos é de ${funcHomem} funcionários.`);
// console.log(`A quantidade de funcionárias femininas é de ${funcMulher} funcionários.`);
// console.log(`A quantidade de funcionárias (os) não-binárias é de ${funcNaoBinarios} funcionários.`);
// console.log(`Folha salarial da empresa é de R$${totalSalarios.toFixed(2)}.`);
// console.log(`Folha salarial somente dos homens é de R$${salarioHomens.toFixed(2)}`);
// console.log(`Folha salarial somente das mulheres é de R$${salarioMulheres.toFixed(2)}`);
// console.log(`Folha salarial somente das (os) não-binários é de R$${salarioNaoBinarios.toFixed(2)}`);
// // console.log(`Gênero com maior salário: ${generoMaiorSalario}`);
