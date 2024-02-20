const nota1: number = 8
const nota2: number = 9
const nota3: number = 2
const media: number = (nota1+nota2+nota3)/3

if (media >= 6) {
    console.log(`A sua média foi de ${media.toFixed(2)}. Aprovado.`)
}else{
    console.log(`A sua média foi de ${media.toFixed(2)}. Reprovado.`)
}

