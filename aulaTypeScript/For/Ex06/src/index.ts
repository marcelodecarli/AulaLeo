/*6.Escreva um programa que encontre o menor número
 em um array usando um loop for. Crie um array com pelo menos 5 números.
*/

let numbers: number[] = [1, 4, 5, -6, 7, -45, -15477]

let menor = 0

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < menor) {
        menor = numbers[i]
    }

}
console.log(menor)