import { Sabores } from "./Sabores";

export class Pizza {

    constructor(sabor: Sabores, tamanho: string, preco: number) {
        this.sabor = sabor,
        this.tamanho = tamanho
        this.preco = preco
    }
    protected sabor: Sabores;
    protected tamanho: string;
    protected preco: number

    getDescricao() {
        return `Sabor: ${this.sabor}, tamanho ${this.tamanho} e o valor R$${this.preco}`
    }
}