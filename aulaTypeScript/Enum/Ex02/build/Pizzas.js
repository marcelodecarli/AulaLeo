"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizza = void 0;
class Pizza {
    constructor(sabor, tamanho, preco) {
        this.sabor = sabor,
            this.tamanho = tamanho;
        this.preco = preco;
    }
    getDescricao() {
        return `Sabor: ${this.sabor}, tamanho ${this.tamanho} e o valor R$${this.preco}`;
    }
}
exports.Pizza = Pizza;
//# sourceMappingURL=Pizzas.js.map