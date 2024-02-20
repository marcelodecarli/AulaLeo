import * as rl from 'readline-sync'

const turno: string = rl.question('Qual o turno (M - manhã \ T - tarde \ N - noite): '.toUpperCase())
const nome: string = rl.question('Qual o seu nome: ')


switch (turno) {
    case "M":
        console.log(`Bom dia ${nome}`)
        break;
    case "T":
        console.log(`Boa tarde! ${nome}`)
        break;
    case "N":
        console.log(`Boa noite! ${nome}`)
        break;

    default:
        break;
}