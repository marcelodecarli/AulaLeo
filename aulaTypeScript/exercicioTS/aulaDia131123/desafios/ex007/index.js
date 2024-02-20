var dna = "ATTGCTGCGCATTAACGACGCGTA";
var arrayDna = dna.split("");
var arrayRna = [];
for (var i = 0; i < arrayDna.length; i++) {
    var letra = arrayDna[i];
    if (letra === "A") {
        arrayRna.push("U");
    }
    else if (letra === "T") {
        arrayRna.push("A");
    }
    else if (letra === "C") {
        arrayRna.push("G");
    }
    else if (letra === "G") {
        arrayRna.push("C");
    }
}
var rna = arrayRna.toString().split(",").join("");
console.log(rna);
