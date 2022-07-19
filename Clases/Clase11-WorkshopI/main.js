/*
*************************
*       Workshop I      *
*************************
*/
//--- 1- CONDICIONALES ---//
/*
Los condicionales son sentencias que podemos utilizar para interpretar un conjunto de instrucciones en función del resultado de una comparación.

let nombreIngresado   = prompt("Ingresar nombre");

if((nombreIngresado !="") && ((nombreIngresado == "EMA") || (nombreIngresado =="ema"))){
    alert("Hola Ema"); 
}else{
    alert("Error: Ingresar nombre valido");
}
*/

//--- 2- BUCLES ---//
/*
Los bucles son sentencias que podemos utilizar para repetir un conjunto de instrucciones más de una vez de forma consecutiva.

let entrada = prompt("Ingresar un dato");
//Repetimos con While hasta que el usuario ingresa "ESC"
while(entrada != "ESC" ){
    alert("El usuario ingresó "+ entrada);
    //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
    entrada = prompt("Ingresar otro dato");
}
*/

//--- 3- FUNCIONES ---//
/*
Las funciones son un conjunto de instrucciones destinadas a resolver una situación en el programa. Podemos reutilizarlas y modificarlas fácilmente.

const suma  = (a, b) => { return a + b };
//Si es una función de una sola línea con retorno podemos evitar escribir el cuerpo.
const resta = (a, b) =>  a - b ;
console.log(suma(15,20));
console.log(resta(20,5));
*/

//--- 4- OBJETOS ---//
/*
Los objetos son estructuras que podemos definir para agrupar valores bajo un mismo criterio y asignarle comportamiento.

function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad   = edad;
    this.calle  = calle;
    this.hablar = function(){ console.log("HOLA SOY "+ this.nombre)}
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");
persona1.hablar();
persona2.hablar();
*/

//--- 5- ARRAY ---//
/*
Los Arrays son objetos que nos permiten agrupar distintos elementos (incluso otros objetos). Son recursos muy útiles por sus métodos para aplicar filtros.

const numeros  = [1, 2, 3, 4, 5];
const porDos   = numeros.map(x => x * 2);   // porDos = [2, 4, 6, 8, 10]
const masCien  = numeros.map(x => x + 100); // porDos = [102, 104, 106, 108, 110]

const nombres = ["Ana", "Ema", "Juan", "Elia"];
const lengths = nombres.map(nombre => nombre.length);//lengths = [3, 3, 4, 4]
*/

//--- 6- STORAGE Y JSON ---//
/*
const productos = [{ id: 1,  producto: "Arroz", precio: 125 },
                  {  id: 2,  producto: "Fideo", precio: 70 },
                  {  id: 3,  producto: "Pan"  , precio: 50},
                  {  id: 4,  producto: "Flan" , precio: 100}];

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

//Almacenar producto por producto
for (const producto of productos) {
    guardarLocal(producto.id, JSON.stringify(producto));
}
// o almacenar array completo
guardarLocal("listaProductos", JSON.stringify(productos));
*/

//--- 7- DOM ---//
/*
El DOM es la representación del documento HTML que podemos emplear para modificar la página actual dinámicamente.

<p>Esta página es <strong>muy sencilla</strong></p>
*/

//--- 8- EVENTOS EN EL DOM ---//
/*
Los eventos son la manera que tenemos en Javascript de controlar las acciones de los usuarios y definir un comportamiento de aplicación cuando se produzcan. 

//CODIGO HTML DE REFERENCIA
 <form id="formulario">
      <input type="text">
      <input type="number">
      <input type="submit" value="Enviar">
    </form>
//CODIGO JS
let miFormulario      = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    console.log("Formulario Enviado");    
}
*/
