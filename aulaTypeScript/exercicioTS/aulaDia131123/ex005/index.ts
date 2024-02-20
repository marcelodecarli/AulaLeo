function checaRenovacaoRG(): boolean {
  const anoAtual: number = 2023//"Digite o ano atual"
  const anoNascimento: number = 1991 //Number(prompt("Digite o ano de nascimento"))
  const anoEmissao: number = 2010 //Number(prompt("Digite o ano de emissão do documento"))

  const idade: number = anoAtual - anoNascimento
  const tempoCarteira: number = anoAtual - anoEmissao

  const cond1 = idade <= 20 && tempoCarteira >= 5
  const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10
  const cond3 = idade > 50 && tempoCarteira >= 15

  return (cond1 || cond2 || cond3)
}

console.log(checaRenovacaoRG())