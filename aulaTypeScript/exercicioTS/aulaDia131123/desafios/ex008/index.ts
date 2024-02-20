let palavra: string = ''

function invertendo(palavra:string): string  {
    const arrayNome: Array<string> = palavra.split("")
    const novoNome: string = arrayNome.reverse().join("")
    return novoNome
}

console.log(invertendo('olecram'))
