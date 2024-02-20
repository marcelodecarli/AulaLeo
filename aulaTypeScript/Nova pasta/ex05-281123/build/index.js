let consulta = [
    { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
    { nome: "Pedro", idade: 31, dataDaConsulta: "02/07/2021" },
    { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" },
    { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" }
];
let listaConsulta = [];
function ordenarPorNome() {
    for (let i = 0; i < consulta.length; i++) {
        let paciente = consulta[i];
        listaConsulta.push(paciente.nome);
        listaConsulta.sort();
    }
}
console.log(ordenarPorNome());
//# sourceMappingURL=index.js.map