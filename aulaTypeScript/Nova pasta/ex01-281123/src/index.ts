// let minhaString: string = 10 // Neste caso ocorre um erro pois estamos declarando uma variável
//                             // e determinando que ela será do tipo string. Desse modo o erro ocorre
//                             //pois estamos passando como valor da string um número, que no caso
//                             //é um tipo number ocorre a inconsistência.

// let meuNumero: number | string = 10 // Nesse caso para que a variável aceite mais de um tipo                            
//                                     // utilizamos o | (pipe), ai podemos dar mais de um tipo


//

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

enum CorFavorita {
    COR1 = "vemelho",
    COR2 = "laranja",
    COR3 = "amarelo",
    COR4 = "verde",
    COR5 = "azul",
    COR6 = "anil",
    COR7 = "violeta"
}

const pessoa1: Pessoa = {
    nome: "marcelo",
    idade: 32,
    corFavorita: CorFavorita.COR1
}

const pessoa2: Pessoa = {
    nome: "joao",
    idade: 33,
    corFavorita: CorFavorita.COR2
}

const pessoa3: Pessoa = {
    nome: "brenda",
    idade: 32,
    corFavorita: CorFavorita.COR3
}

