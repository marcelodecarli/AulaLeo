function descobrirIdadeHistorica(ano: number, sigla: string): string {
  if (ano <= 100000 && ano > 4000 && sigla == "AC") {
    return "Surgimento do homem moderno, a Pré-História"
  } else if (ano < 4000 && ano > 476 && sigla == "AC") {
    return "Idade Antiga, na qual o ser humano estava dividido em impérios de diversos tamanhos e culturas"
  } else if (ano < 476 && sigla == "AC") {
    return "Idade Média. Este período foi marcado, principalmente, pela falta de centralização política."
  } else if (ano > 1453 && ano < 1789 && sigla == "DC" || sigla == "") {
    return `início da Idade Moderna. Ao pensar neste período, 4 grandes conceitos 
            são os mais importantes: o renascimento cultural (social),
            o mercantilismo (economia), o absolutismo (política)
            e as reformas protestantes (religião)`
  } else if (ano > 1789 && ano <= 2023 && sigla == "DC" || sigla == "") {
    return "início da Idade Contemporânea"
  } else { 
    return "Valor inválido"
  }

}

console.log(descobrirIdadeHistorica(1998, "DC"));
console.log(descobrirIdadeHistorica(1998, "AC"));
console.log(descobrirIdadeHistorica(4850, "DC"));
console.log(descobrirIdadeHistorica(10000, "AC"));
console.log(descobrirIdadeHistorica(100000, "AC"));
console.log(descobrirIdadeHistorica(2222, "DC"));