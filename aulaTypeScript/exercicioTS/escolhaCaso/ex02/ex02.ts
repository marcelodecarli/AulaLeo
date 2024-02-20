import * as rl from 'readline-sync'

const calculo: string = rl.question('Escolha o tipo de cálculo: somar, dividir, subtrair ou multiplicar: '.toLowerCase())
const num1: number = rl.questionFloat('Digite um número: ')
const num2: number = rl.questionFloat('Digite outro número: ')


switch (calculo) {
    case "somar":
        console.log(`O resultado é ${num1} + ${num2} = ${num1 + num2}`)
        break;
    case "subtrair":
        console.log(`O resultado é ${num1} - ${num2} = ${num1 - num2}`)
        break;
    case "multiplicar":
        console.log(`O resultado é ${num1} x ${num2} = ${num1 * num2}`)
        break;
    case "dividir":
        console.log(`O resultado é ${num1} / ${num2} = ${num1 / num2}`)
        break;
    default:
        break;
}