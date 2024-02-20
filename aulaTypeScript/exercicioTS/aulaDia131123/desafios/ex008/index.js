var palavra = '';
function invertendo(palavra) {
    var arrayNome = palavra.split("");
    var novoNome = arrayNome.reverse().join("");
    return novoNome;
}
console.log(invertendo('olecram'));
