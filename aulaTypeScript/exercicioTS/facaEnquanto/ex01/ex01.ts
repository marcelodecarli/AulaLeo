import * as readline from 'readline-sync'

// Cria uma interface ou um type para representar um funcionário
interface Funcionario {
  nome: string;
  genero: string;
  salario: number;
}

// Criei um array vazio para armazenar cada funcionário
let cadastro: Funcionario[] = []

// solicita ao usuário a quantidade de funcionários
let numFuncionarios: number = parseInt(readline.question("Digite a quantidade de funcionários: "));

// Usa um loop for para ler os dados de cada funcionário e adicioná-los ao array
for (let i = 0; i < numFuncionarios; i++) {
  let nome: string = readline.question(`Digite o nome do funcionário ${i + 1}: `);
  let genero: string = readline.question(`Digite o gênero do funcionário (M para masculino, F para feminino, NB para não-binário): `).toUpperCase();
  let salario: number = readline.questionFloat(`Digite o salário do funcionário : `);

  cadastro.push({nome, genero, salario});
}

// Usa o método reduce para somar os salários de cada gênero e o total
let salarioHomens = cadastro.reduce((acc, func) => func.genero === 'M' ? acc + func.salario : acc, 0); //acc = acumulador
let salarioMulheres = cadastro.reduce((acc, func) => func.genero === 'F' ? acc + func.salario : acc, 0);//func representa o funcionário
let salarioNaoBinarios = cadastro.reduce((acc, func) => func.genero === 'NB' ? acc + func.salario : acc, 0);
let totalSalarios = salarioHomens + salarioMulheres + salarioNaoBinarios; // com o resultado do reduce de cada genero, criei um total da empresa

// Usa o método sort para ordenar o array por salário e pega o maior valor
let maiorSalario = cadastro.sort((a, b) => b.salario - a.salario)[0];

// Mostra os resultados na tela
console.log(`O salário mais alto é de R$${maiorSalario.salario}, do funcionário chamado ${maiorSalario.nome} do gênero ${maiorSalario.genero}.`);
console.log(`A quantidade de funcionários masculinos é de ${cadastro.filter(func => func.genero === 'M').length} funcionários.`);
console.log(`A quantidade de funcionárias femininas é de ${cadastro.filter(func => func.genero === 'F').length} funcionários.`);
console.log(`A quantidade de funcionárias (os) não-binárias é de ${cadastro.filter(func => func.genero === 'NB').length} funcionários.`);
console.log(`Folha salarial da empresa é de R$${totalSalarios.toFixed(2)}.`);
console.log(`Folha salarial somente dos homens é de R$${salarioHomens.toFixed(2)}`);
console.log(`Folha salarial somente das mulheres é de R$${salarioMulheres.toFixed(2)}`);
console.log(`Folha salarial somente das (os) não-binários é de R$${salarioNaoBinarios.toFixed(2)}`);





// import * as readline from 'readline-sync'

// let cadastro: Array<{nome: string; genero: string; salario: number}> = []
// let funcHomem: number = 0
// let salarioHomens: number = 0
// let funcMulher: number = 0
// let salarioMulheres: number = 0
// let funcNaoBinarios: number = 0
// let salarioNaoBinarios: number = 0
// let numFuncionarios: number = 0;
// let totalSalarios: number = 0;

// numFuncionarios = parseInt(readline.question("Digite a quantidade de funcionários: "));

// let index = 0;

// while (index < numFuncionarios){
//     let nome: string = readline.question(`Digite o nome do funcionário ${index + 1}: `);
//     let genero: string = readline.question(`Digite o gênero do funcionário (M para masculino, F para feminino, NB para não-binário): `).toUpperCase();
//     let salario: number = readline.questionFloat(`Digite o salário do funcionário : `);

//     cadastro.push({nome, genero, salario});
//     totalSalarios += cadastro[index].salario;
//     index++;
// }

//   if (cadastro[index].genero === 'M') {
//     funcHomem++;
//     salarioHomens += cadastro[index].salario;
//   } else if (cadastro[index].genero === 'F') {
//     funcMulher++;
//     salarioMulheres += cadastro[index].salario;
//   } else if (cadastro[index].genero === 'NB') {
//     funcNaoBinarios++;
//     salarioNaoBinarios += cadastro[index].salario;
//   }




// // let generoMaiorSalario: string = "";
// let maiorSalario: number = Math.max(cadastro[index].salario); //Math.max() procura o maior numero


// console.log(`O salario mais alto é de ${maiorSalario}. `)
// console.log(`A quantidade de funcionários masculinos é de ${funcHomem} funcionários.`);
// console.log(`A quantidade de funcionárias femininas é de ${funcMulher} funcionários.`);
// console.log(`A quantidade de funcionárias (os) não-binárias é de ${funcNaoBinarios} funcionários.`);
// console.log(`Folha salarial da empresa é de R$${totalSalarios.toFixed(2)}.`);
// console.log(`Folha salarial somente dos homens é de R$${salarioHomens.toFixed(2)}`);
// console.log(`Folha salarial somente das mulheres é de R$${salarioMulheres.toFixed(2)}`);
// console.log(`Folha salarial somente das (os) não-binários é de R$${salarioNaoBinarios.toFixed(2)}`);
// // console.log(`Gênero com maior salário: ${generoMaiorSalario}`);


