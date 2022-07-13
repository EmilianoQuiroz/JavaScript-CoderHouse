let tiempoRef = Date.now()
let cronometro = true
let acumulado = 0

function iniciar() {
    cronometro = true
}
function pausar() {
    cronometro = false
}
function reiniciar() {
    acumulado = 0
}

setInterval(() => {
    let tiempo = document.getElementById('tiempo')
    if(cronometro){
    acumulado += Date.now() - tiempoRef
    }
    tiempoRef = Date.now()
    tiempo.innerHTML = formatearMS(acumulado)
}, 1000/60)

function formatearMS(ms){
    let MS = ms%1000
    let S = Math.floor(((ms-MS)/1000)%60)
    let M = Math.floor((S/60)%60)
    let H = Math.floor((M/60))
    Number.prototype.ceros = function(n){
        return (this + "").padStart(n,0)
    }
    return H.ceros(2)+":"+M.ceros(2)+":"+S.ceros(2)+"."+MS.ceros(3)
}