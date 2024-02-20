//2. Escreva um programa que imprima todas as chaves e os valores de um objeto usando 
//. Crie um objeto com pelo menos 3 pares chave-valor à sua escolha.


let person: any = {
    name: 'Marcelo',
    age: 33,
    weight: 114
}

for (let key in person) {
    console.log(`${key} - ${person[key]}` )
}