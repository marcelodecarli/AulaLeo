type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// A - no terminal na pasta do arquivo colocaria npx tsc exercicio-4.ts e após transpilar para 
// javascript criará o arquivo exercicio-4.js, com isso no terminal coloque node exercicio-4.ts
// e o programa rodará normalmente.

// B - Se o arquivo estiver na pasta src devemos utilizar
//
//"scripts": {
//    "start": "npx tsc && node ./build/exercicio-4.js},