//npm init -y
//npx tsc index.ts && node index.js

let dna: string = "ATTGCTGCGCATTAACGACGCGTA"

 // função split converte uma string em um array de string
const arrayDna: Array<string> = dna.split("")

 //criando um array vazio para receber os novos valores convertidos
const arrayRna: Array<string> = []

//laço for para percorrer o array arrayDna
for (let i = 0; i < arrayDna.length; i++) {
    let letra: string = arrayDna[i] //variavel para acessar cada um indicies do array
    //convertendo as letras do array arrayDna
    if (letra === "A") {
        arrayRna.push("U")
    }else if(letra === "T"){
        arrayRna.push("A")
    }else if(letra === "C"){
        arrayRna.push("G")
    }else if(letra === "G"){ 
        arrayRna.push("C") 
    }
     
}

// método join() junta todos elementos de um array em uma string e retorna esta string.
const rna: string = arrayRna.join("")

console.log(rna)