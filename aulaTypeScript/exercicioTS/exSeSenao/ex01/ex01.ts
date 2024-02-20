import * as rl from 'readline-sync'

const nome: string = rl.question('Qual o seu nome: ')
const genero: string = rl.question('Diga seu gênero: ').toLowerCase()

if (genero === 'masculino') {
    console.log(`Bem vindo ${nome}!`)
}else if(genero === 'feminino'){
    console.log(`Bem vinda ${nome}!`)
}else if(genero === 'nao binario'){
    console.log(`Bem vinde ${nome}!`)
}else{
    console.log('Invalido!')
}
