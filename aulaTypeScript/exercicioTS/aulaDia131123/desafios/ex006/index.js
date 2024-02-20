function calculos(num1, num2) {
    console.log(num1 + num2);
    console.log(num1 - num2);
    console.log(num1 * num2);
    if (num1 > num2) {
        console.log("O numero maior \u00E9 ".concat(num1));
    }
    else if (num2 > num1) {
        console.log("O numero maior \u00E9 ".concat(num2));
    }
    else {
        console.log("Os n\u00FAmeros s\u00E3o iguais. N\u00BA 1 ".concat(num1, " e N\u00BA 2 ").concat(num2));
    }
}
calculos(20, 10);
