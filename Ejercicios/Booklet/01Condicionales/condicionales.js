/*
EJERCICIO 1:
Solicitar al usuario un (1) nombre.
Si el mismo es igual a otro nombre 
almacenado en una variable, realizar
 una salida por alerta con el mensaje “Fui yo”. 
Caso contrario, la salida será “Yo no fui”.
*/
/*
let nombreIngresado = prompt("Ingrese su nombre: ")
let nombreGuardado = "Santiago"

if(nombreIngresado == nombreGuardado){
    alert("fui yo")
}
else{
    alert("yo no fui")
}
*/

/*
EJERCICIO 2:
Solicitar al usuario una (1) tecla.
Si se presiona “y” (minúscula), o “Y” (mayúscula), 
realizar una salida por alerta con el mensaje 
“Correcto”. Caso contrario, la salida será “Error”.
*/
/*
let letraIngresada = prompt("Ingrese una letra: ")

if (letraIngresada == "y" || letraIngresada == "Y"){
    alert("Correcto")
}
else{
    alert("Incorrecto")
}
*/

/*
EJERCICIO 3:
Solicitar al usuario un (1) un número.
Si el valor está entre 1 y 4, efectuar
una de las siguientes salidas según corresponda: 
“Elegiste a Homero” si es 1.
“Elegiste a Marge” si es 2.
“Elegiste a Bart” si es 3.
“Elegiste a Lisa” si es 4
*/
/*
let numeroIngresado = prompt("Ingrese un numero entre el 1 y el 4: ")

if(numeroIngresado == 1){
    alert("Elegiste a Homero")
}
else if(numeroIngresado == 2){
    alert("Elegiste a Marge")
}
else if(numeroIngresado == 3){
    alert("Elegiste a Bart")
}
else if(numeroIngresado == 4){
    alert("Elegiste a Lisa")
}
else{
    alert("Numero incorrecto")
}
*/

/*
EJERCICIO 4:
Solicitar al usuario un (1) número.
Si el valor está entre dos números, 
efectuar una de las siguientes salidas, según corresponda: 
“Presupuesto bajo” si está entre 0 y 1000.
“Presupuesto medio” si está entre 1001 y 3000.
“Presupuesto alto” si es  mayor que 3000.
*/
/*
let presupuestoIngresado = prompt("Ingrese un presupuesto: ")

if (presupuestoIngresado >= 0 && presupuestoIngresado <= 1000){
    alert("Presupuesto bajo")
}
else if(presupuestoIngresado >= 1001 && presupuestoIngresado <= 3000){
    alert("Presupuesto medio")
}
else{
    alert("presupuesto alto")
}
*/

/*
EJERCICIO 5:
Solicitar al usuario cuatro (4) productos de almacén. 
Si todos los elementos fueron cargados, realizar una 
única salida compuesta por el listado de productos. 
Caso contrario, la salida será 
“Error: Es necesario cargar todos los productos”
*/
/*
let productoIngreso1 = prompt("Ingrese un producto: ")
let productoIngreso2 = prompt("Ingrese un producto: ")
let productoIngreso3 = prompt("Ingrese un producto: ")
let productoIngreso4 = prompt("Ingrese un producto: ")

if((productoIngresado1 != "") && (productoIngresado2 != "") && (productoIngresado3 != "") && (productoIngresado4 != "")){
    let totalProductos = (`1.${productoIngresado1} 2.${productoIngresado2} 3.${productoIngresado3} 4.${productoIngresado4}`)
   
    alert(totalProductos)
}
else{
    alert("Error: Es necesario cargar todos los productos")
}
*/
/*
let producto1 = prompt('INGRESAR 1er PRODUCTO');
let producto2 = prompt('INGRESAR 2do PRODUCTO');
let producto3 = prompt('INGRESAR 3er PRODUCTO');
let producto4 = prompt('INGRESAR 4to PRODUCTO');

if ((producto1 != "") && (producto2 != "") && (producto3 != "") && (producto4 != "")) {
    let heladera = "1) " + producto1 + " " +
        "2) " + producto2 + " " +
        "3) " + producto3 + " " +
        "4) " + producto4;
    alert(heladera);
} else {
    alert("ERROR: ES NECESARIO CARGAR TODOS LOS PRODUCTOS");
}
*/
//EJERCICIOS ADICIONALES
/*
1) Escriba un programa en donde el usuario ingrese 2 números 
e indique cuál es el mayor

let numero1 = parseInt(prompt("Ingrese el primer numero: "))
let numero2 = parseInt(prompt("Ingrese el segundo numero: "))

if(numero1 > numero2){
    alert("El primer digito es el mayo")
}
else{
    alert("El segundo digito es el mayo")
}
*/

/*
2) El costo del helado es de $5. Escriba un programa en donde 
se le pida al usuario ingresar la cantidad de helados que 
quiere y mostrar cuánto le saldría.

let cantidadIngresada = parseInt(prompt("Ingrese la cantidad de helados que desee comprar: "))

alert(`El importe final es ${cantidadIngresada * 5}`)
*/

/*
3) Escriba un programa en donde se le solicite la edad al 
usuario y calcule su año de nacimiento, tomando en cuenta 
que el año actual es 2022

let edad = parseInt(prompt("Ingrese su edad: "))
 alert(`Su edad es ${2021 - edad}`)
*/

/*
4) Escriba un programa en donde el usuario ingrese 3 notas, 
calcule el promedio y si es mayor o igual a 4 le indique 
que está aprobado con un alert

let nota1 = parseInt(prompt("Ingrese su primer nota: "))
let nota2 = parseInt(prompt("Ingrese su segunda nota: "))
let nota3 = parseInt(prompt("Ingrese su terecer nota: "))
let notaFinal = (nota1 + nota2 + nota3) / 3 

if (notaFinal >= 4) {
    alert(`Aprobaste! tu nota final es : ${notaFinal}`)    
}
else{
    alert(`Desaprobaste! tu nota final es : ${notaFinal}`)
}
*/
/*
5) Escriba un programa donde se le solicite el año de nacimiento. 
Si es mayor a 18 se le tiene que pedir que ingrese su nombre 
y apellido para mostrarle un texto con el formato: 
“Hola nombre apellido, tu edad actual es: edad”. 
Ejemplo: “Hola Rodrigo Río, tu edad actual es 25”.
NOTA: Solo solicitar el nombre y apellido si es mayor a 18.

let fechaNacimiento = prompt("Ingrese su fecha de nacimiento: ")

if (fechaNacimiento >= 18 ){
    let nombre = prompt("Ingrese su nombre: ")
    let apellido = prompt("Ingrese su apellido: ")
    alert(`Hola ${nombre} ${apellido}, tu edad actual es ${fechaNacimiento}`) 
}
else{
    alert("No tienes la edad requerida")
}
*/

/*
6) Escriba un programa que permita calcular el costo total 
del producto con su IVA.Para esto, solicite al usuario el 
precio del producto, calcule su IVA (21%) y muéstrele en 
pantalla con un alert el precio final.
*/
/*
let precio = parseInt(prompt("Ingrese el precio del producto: "))
let iva = precio * .21
let precioMasIva = precio + iva

alert(`Su total es ${precioMasIva}`)
*/
/*
7) Escriba un programa en donde se le pida al usuario ingresar
el lugar a donde quiera viajar. Teniendo en cuenta estos 
valores:
- Colombia: $40
- México: $50
- Brasil: $30
- Uruguay: $20
- Chile: $20
- Ecuador: $30
- Perú: $40
- Estados Unidos: $50
Mostrarle al usuario cuál sería el costo de viajar al lugar que escribió.
NOTA: Tener en cuenta las mayúsculas y minúsculas al momento de ingresar el
nombre del lugar

*/
/*
let destino = prompt("Ingrese su lugar de destino: ")

if(destino == "Mexico" || destino == "mexico" || destino == "Estados Unidos" || destino == "estados unidos"){
    alert("Su monto es de $50")
}
else if(destino == "Uruguay" || destino == "uruguay" || destino == "Chile" || destino == "chile"){
    alert("Su monto es de $20")
}
else if(destino == "Colombia" || destino == "colombia" || destino == "Peru" || destino == "peru"){
    alert("Su monto es de $40")
}
else{
    alert("Su monto es de $30")
}
*/

//Operadores logicos
/*
1) Siendo X, Y y Z valores booleanes cuyos valores son: 
X = true, Y = false y Z = true,
determine el valor de cada expresión lógica:
a) (X && Y) || (X && Z)
b) (X || !Y) && (!X || Z)
c) X || Y && Z
d) !(X || Y) && Z
e) X || Y || X && !Z && !Y
f) !X || !Y || Z && X && !Y
*/
let x = true 
let y = false
let z = true
let resultadoA = (x && y) || (x && z)
let resultadoB = (x || !y) && (!x || z)
let resultadoC = x || y && z
let resultadoD = !(x || y) && z
let resultadoE = x || y || x && !z && !y
let resultadoF = !x || !y || z && x && !y

console.log(resultadoA)
console.log(resultadoB)
console.log(resultadoC)
console.log(resultadoD)
console.log(resultadoE)
console.log(resultadoF)

/*
2) Escriba un programa que le pida una letra
al usuario y le diga si es una vocal o no.
*/
/*
let letra = prompt("Ingrese una letra: ")

if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
    alert("Es una vocal")
}
else{
    alert("No es una vocal")
}
*/
/*
3) Escriba un programa en donde se le pida un nombre y una 
edad al usuario. Muestre un mensaje en pantalla si:
- El nombre es “Gabriel” y tiene más de 24 años
- El nombre es “María” y tiene entre 28 y 35 años
*/
/*
 let nombre = prompt("Ingrese su nombre: ")
 let edad = parseInt(prompt("Ingrese su edad: "))

if (nombre == "Gabriel" || nombre == "gabriel" && edad > 24) {
    alert("Usted se llama Gabriel y tiene mas de 24 años")
}
else if (nombre == "Maria" || nombre == "maria" && edad > 28 || edad < 35){
    alert("Usted se llama Maria y tiene mas de 28 años")
}
else{
    alert("Nombre incorrecto")
}
*/
/*
4) Escriba un programa en donde se le solicite al usuario que 
ingrese 2 números y le muestre en pantalla un mensaje cuando 
su suma de 10 y su división tenga como resto 0.
*/
let numero1 = parseInt(prompt("Ingrese el primer numero: "))
let numero2 = parseInt(prompt("Ingrese el segundo numero: "))
let suma = numero1 + numero2
let resto = numero1 % numero2

if (suma == 10 && resto == 0){
    alert("El numero es correcto")
}
else{
    alert("El numero es incorrecto")
}



