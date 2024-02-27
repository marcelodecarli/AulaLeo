/*
5.Escreva um programa que calcule a soma dos números pares de 
1 a 10 usando um loop for. Use um if dentro do loop para verificar se o número é par.
*/

let par = 0
for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        par = i + par
    }
}

console.log(par);