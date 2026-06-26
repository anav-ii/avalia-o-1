import { calcPremio } from "./script.calculo.js";

// PEGANDO ELEMENTOS
const formEmpresa = document.querySelector('#form-empresa');
const divLista = document.querySelector('#div-lista-empresas');

// ARRAY
const empresas = [];

// EVENTO SUBMIT
formEmpresa.addEventListener('submit', (evt) => {
    evt.preventDefault();

    // PEGANDO DADOS DO FORM
    const dadosFormEmpresa = new FormData(formEmpresa);

    // OBJETO LITERAL
    const empresa = {
        descricao: dadosFormEmpresa.get('descricao'),
        quantidade: Number(dadosFormEmpresa.get('quantidade'))
    };

    // ADICIONAR NO ARRAY
    addEmpresa(empresa);

    // LIMPAR FORM
    formEmpresa.reset();
});

// FUNÇÃO ADICIONAR
const addEmpresa = (objEmpresa) => {
    empresas.push(objEmpresa);
    listaEmpresas();
};

// FUNÇÃO LISTAR
const listaEmpresas = () => {
    divLista.innerHTML = '';

    empresas.forEach((elem, i) => {

        let valorReceber = elem.quantidade * 220;
        let premio = calcPremio(valorReceber);
        let valorFinal = valorReceber + premio;

        divLista.innerHTML += `
        ${i + 1} - ${elem.descricao} |
        ${elem.quantidade} toneladas |
        Valor: R$ ${valorReceber.toFixed(2).replace('.', ',')} |
        Prêmio: ${premio === 0 ? "Abaixo da Meta" : "R$ " + premio.toFixed(2).replace('.', ',')} |
        Final: R$ ${valorFinal.toFixed(2).replace('.', ',')}
        <br><br>
        `;
    });
};