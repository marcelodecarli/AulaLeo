/*
2.Escreva um programa que conte o número de vogais (a, e, i, o, u) em uma string.
*/

let vogais: string = 'abcdefghi'

for (let i = 0; i < vogais.length; i++) {

    if (vogais[i] === 'a' || vogais[i] === 'e' || vogais[i] === 'i' || vogais[i] === 'o' || vogais[i] === 'u') {
        console.log(vogais[i])
    }
    
}