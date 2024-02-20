import * as rl from 'readline-sync'

const num1: number = rl.questionInt('Digite o primeiro valor: ')
const num2: number = rl.questionInt('Digite o segundo valor: ')

const somar: number = num1 + num2
const subtrair: number = num1 - num2
const dividir: number = num1 / num2 
const multiplicar: number = num1 * num2

const media: number = (somar + subtrair + dividir + multiplicar) / 4

console.log(`

---------------------------------RESULTADOS---------------------------------
    A soma dos dois valores é: ${somar.toFixed(2)}
    A subrtração dos dois valores é: ${subtrair.toFixed(2)}
    A divisão dos dois valores é: ${dividir.toFixed(2)}
    A multiplicação dos dois valores é: ${multiplicar.toFixed(2)}
    O resultado médio de todos os cálculos é de: ${media.toFixed(2)}

`)