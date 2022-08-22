function limpiar () {
    document.getElementById('formulario-id').reset();
}

function suma() {
    let x = document.getElementById('primer-valor').value;
    let y = document.getElementById('segundo-valor').value;
    document.getElementById('el-resultado').innerHTML = x + y ;
}
function resta() {
    let x = parseInt(document.getElementById('primer-valor').value);
    let y = parseInt(document.getElementById('segundo-valor').value);
    document.getElementById('el-resultado').innerHTML = x - y;
}
function multiplicar() {
    let x = parseInt(document.getElementById('primer-valor').value);
    let y = parseInt(document.getElementById('segundo-valor').value);
    document.getElementById('el-resultado').innerHTML = x / y;
}
function dividir() {
    let x = parseInt(document.getElementById('primer-valor').value);
    let y = parseInt(document.getElementById('segundo-valor').value);
    document.getElementById('el-resultado').innerHTML = x * y;
}
