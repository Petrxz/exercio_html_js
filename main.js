function validarFormulario(event) {
    event.preventDefault();

    var numeroA = parseInt(document.getElementById('numero-a').value);
    var numeroB = parseInt(document.getElementById('numero-b').value);

    if (numeroB > numeroA) {
        alert('Tudo certo, o número B é maior que o número A');
    } else {
        alert('O número B deve ser maior que o número A.');
    }
}

var formConsulta = document.getElementById('form-consulta');
formConsulta.addEventListener('submit', validarFormulario);
