const horaTrabalhada: number = 10
const valorHora: number = 90.75
const nome: string = "Marcelo"
const cargo: string = "Desenvolvedor Back-end"

const salario: number = horaTrabalhada * valorHora

if (salario > 1000 && salario < 2000) {
    let salarioFinal: number = salario - (salario * 0.10)
    console.log(`
    Cadastro do funcionário:
    Nome: ${nome}.
    Cargo: ${cargo}.
    Horas trabalhadas: ${horaTrabalhada} horas.
    Valor recebido por hora: R$${valorHora}.
    Salário final com o desconto de 10%: R$${salarioFinal.toFixed(2).replace('.', ',')}
`)
} else if (salario > 2000 && salario < 3000) {
    let salarioFinal: number = salario - (salario * 0.15)
    console.log(`
    Cadastro do funcionário:
    Nome: ${nome}.
    Cargo: ${cargo}.
    Horas trabalhadas: ${horaTrabalhada} horas.
    Valor recebido por hora: R$${valorHora}.
    Salário final com o desconto de 15%: R$${salarioFinal.toFixed(2).replace('.', ',')}
`)
}else if(salario > 3000 && salario < 4000) {
    let salarioFinal: number = salario - (salario * 0.16)
    console.log(`
    Cadastro do funcionário:
    Nome: ${nome}.
    Cargo: ${cargo}.
    Horas trabalhadas: ${horaTrabalhada} horas.
    Valor recebido por hora: R$${valorHora}.
    Salário final com o desconto de 16%: R$${salarioFinal.toFixed(2).replace('.', ',')}
`)
}else if (salario > 4000) {
    let salarioFinal: number = salario - (salario * 0.20)
    console.log(`
    Cadastro do funcionário:
    Nome: ${nome}.
    Cargo: ${cargo}.
    Horas trabalhadas: ${horaTrabalhada} horas.
    Valor recebido por hora: R$${valorHora}.
    Salário final com o desconto de 20%: R$${salarioFinal.toFixed(2).replace('.', ',')}
`)
}else{
    console.log(`
    Cadastro do funcionário:
    Nome: ${nome}.
    Cargo: ${cargo}.
    Horas trabalhadas: ${horaTrabalhada} horas.
    Valor recebido por hora: R$${valorHora}.
    Salário final sem o desconto: R$${salario.toFixed(2).replace('.',',')}.
`)
}

