// function obterEstatisticas(numeros: number | any): number | any{

//     const numerosOrdenados = numeros.sort(
//         (a: number, b: number) => a - b
//     )

//     let soma = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }
    
//     return estatisticas
// }


type AmostraDeDados = {
    numeros: number[],
    obterEstatisticas: (numeros: number[] | any[]) => number[] | any
}

let amostraDeIdades: AmostraDeDados = {

    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas: (numeros) => numeros.sort()

}

console.log(amostraDeIdades.obterEstatisticas(amostraDeIdades.numeros))