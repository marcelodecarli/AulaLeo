import * as rl from 'readline-sync'

const num1: number = rl.questionFloat('Digite o primeiro valor: ')
const num2: number = rl.questionFloat('Digite o segundo valor: ')
const calculo: string = rl.question('Escreve somar, dividir, subtrair ou multiplicar e veja o resultado: ').toLowerCase()

const somar: number = num1 + num2
const subtrair: number = num1 - num2
const dividir: number = num1 / num2
const multiplicar: number = num1 * num2


if (calculo === 'somar') {
    console.log(`O resultado é ${somar}`)
}else if(calculo === 'dividir'){
    console.log(`O resultado é ${dividir}`)
}else if(calculo === 'subtrair'){
    console.log(`O resultado é ${subtrair}`)
}else if(calculo === 'multiplicar'){
    console.log(`O resultado é ${multiplicar}`)
}else{
    console.log(`Operação inválida.`)
}
