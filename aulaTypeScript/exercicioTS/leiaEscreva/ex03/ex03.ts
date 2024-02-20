import * as rl from 'readline-sync'

const valorDolarDia: number = rl.questionFloat('Qual o valor atual da cotação do dólar: ')
const valorClienteTem: number = rl.questionFloat('Qual a quantia de reais que o cliente tem: ')
const valorEmDolar: number = valorClienteTem / valorDolarDia
const valorFinal: number = valorEmDolar - (valorEmDolar * 0.1)

console.log(`O valor em dólares com a taxa de 10% de câmbio ficou: $${valorFinal.toFixed(2)}.`)