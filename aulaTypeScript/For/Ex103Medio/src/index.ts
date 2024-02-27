/*
3.Escreva um programa que calcule a média das notas armazenadas em um array. 
Cada item é uma nota obtida pelo aluno.
*/

let notas: number[] = [6.5, 7.5, 7, 10, 5, 8]

let notasTotais = 0

for (let i = 0; i < notas.length; i++) {
    notasTotais = notas[i] + notasTotais    
}

let mediaNotas = notasTotais / notas.length
console.log(mediaNotas.toFixed(2));