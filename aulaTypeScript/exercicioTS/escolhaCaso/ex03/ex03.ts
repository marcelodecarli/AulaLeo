import * as rl from 'readline-sync'

const valorEmReais: number = rl.questionFloat('Qual a quantia em reais você tem: ')
const moeda: string = rl.question('Escolha qual moeda deseja comprar: dolar, pesos uruguaios ou euros: ').toLowerCase()
const dolar: number = 4.89
const pesosUruguaios: number = 0.12
const euro: number = 5.23

const conversaoDolar: number = valorEmReais / dolar
const conversaoPesosUru: number = valorEmReais / pesosUruguaios
const conversaoEuro: number = valorEmReais / euro

switch (moeda) {
    case 'dolar':
        console.log(`Você tem ${conversaoDolar.toFixed(2)} dólares.`)
        break;
    case 'pesos uruguaios':
        console.log(`O resultado é ${conversaoPesosUru.toFixed(2)}`)
        break;
    case 'euros':
        console.log(`O resultado é ${conversaoEuro.toFixed(2)}`)
        break;
    default:
        console.log(`Opção inválida! ${moeda}. Refaça!`)
        break;
}
