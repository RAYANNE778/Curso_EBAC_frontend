const form = document.getElementById('form-contact');
const imgAdd = '<img src="./img/contatoadd.png" alt="Emoji contato adicionado" />';
const contatos = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    if (contatos.includes(inputNomeContato.value)) {
        alert(`O contato: ${inputNomeContato.value} já foi inserido`);
    } else {
        contatos.push(inputNomeContato.value);
        telefone.push(inputTelefoneContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelefoneContato.value}</td>`;
        linha += `<td>${imgAdd}</td>`;        
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

/* Máscara para telefone */
function aplicarMascaraTelefone(event) {
    const input = event.target;
    input.value = formatarTelefone(input.value);
}

function formatarTelefone(value) {
    value = value.replace(/\D/g, ""); 
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;
}

const inputTelefone = document.getElementById('telefone-contato');
inputTelefone.addEventListener('keyup', aplicarMascaraTelefone);