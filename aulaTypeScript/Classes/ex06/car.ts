export interface Car {
    brand: string;
    model: string;
    year: number;
    startEngine(): void;
    stopEngine?(): void;
    /*O ponto de interrogação significa que 
    não é obrigatório para criar a nova classe*/
}

/* seria como se fosse um contrato, basicamente
    o que tem no método interface será obrigatório
    na criação de uma nova classe. Como cada classe
    deve se comportar*/