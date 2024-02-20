function calculos(num1: number, num2: number): void {
    console.log(num1 + num2);
    console.log(num1 - num2);
    console.log(num1 * num2);

    if (num1 > num2) {
        console.log(`O numero maior é ${num1}`) 
    } else if(num2 > num1){
        console.log(`O numero maior é ${num2}`) 
    }else {
        console.log(`Os números são iguais. Nº 1 ${num1} e Nº 2 ${num2}`) 
    }

}

calculos(20,10)