function desconto(price: number, discount: number = 0.05): number {
    return price * (1 * discount)
}

console.log(`O valor a pagar é de R$${desconto(100, 0.10)}.`)