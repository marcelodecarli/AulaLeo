function desconto(price, discount) {
    if (discount === void 0) { discount = 0.05; }
    return price - (price * discount);
}
console.log("O valor a pagar é de R$".concat(desconto(100, 0.10), "."));
