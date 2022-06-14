/*
********************
*       Arrays     *
********************
*/

/*--- ¿QUÉ ES UN ARRAY? ---*/
/*
Un Array es un tipo de dato que sirve para almacenar valores en forma de lista. Puede ser una colección de números, strings, booleanos, objetos o hasta una lista de listas. 
Los valores del array pueden ser distintos y es posible agregar o quitar elementos en todo momento.
Los elementos del array tienen un índice, que va desde el 0 (el primer elemento del array) hasta el último elemento
*/
//Ejemploi de Array
                //Listado en el eje y
// const matriz = [[0,0,0,0,],0,0,0,0,0,0,]//Listado en el eje x
//Acceso al array dentro del array
// matriz[0][0]

/*--- DECLARACIÓN DEL ARRAY ---*/
/*
Para declarar una variable y asignar un array empleamos los corchetes ([ ]) y dentro de ellos definimos todos los valores separados por coma.
Los arrays en Javascript empiezan siempre en la posición 0. Un array que tenga, por ejemplo, 10 elementos, tendrá posiciones de 0 a  9.

// Declaraciòn de array vacío
const arrayA = [];
// Declaracion de array con nùmeros
const arrayB = [1,2];
// Declaracion de array con strings
const arrayC = ["C1","C2","C3"];
// Declaracion de array con booleanos
const arrayD = [true,false,true,false];
// Declaracion de array mixto
const arrayE = [1,false,"C4"];
*/

/*--- ACCESO AL ARRAY ---*/
/*
Los elementos dentro de un array tienen un índice que determina su posición en el mismo. 
Así, es posible acceder a los elementos dentro de un array a través de su posición:

const  numeros = [1,2,3,4,5];
console.log( numeros[0] ) // 1; 
console.log( numeros[3] ) // 4; 
let resultado  = numeros[1] + numeros[2] 
console.log( resultado  ) // 5;

*/

/*--- RECORRIDO DEL ARRAY ---*/
/*
Decimos que estamos recorriendo un Array cuando empleamos un bucle para acceder a cada elemento por separado.
Los Array en JavaScript son objetos iterables, lo que permite usar distintas estructuras para iterar sobre ellos.

const numeros = [1, 2, 3, 4, 5];
for (let index = 0; index < 5; index++) {
    alert(numeros[index]);
}
*/

/*
***********************************
* ARRAY: MÉTODOS Y PROPIEDADES    *
***********************************
*/
/*--- LENGTH ---*/
/*
Al igual que en un String, la propiedad length nos sirve para obtener el largo de un Array, es decir, para identificar cuántos elementos tiene.

const miArray = ["marca", 3 ,"palabra"];
console.log( miArray.length ); //imprime 3

Es común utilizarlo para definir el límite de una iteración sobre un array, ya que la propiedad length me permite saber explícitamente la longitud del mismo:

const numeros = [1, 2, 3, 4, 5, 6, 7, 8]

for (let i= 0; i < numeros.length; i++) {
    alert(numeros[i]);
}

*/

/*--- AGREGAR ELEMENTOS ---*/
/*
Para sumar un elemento a un Array ya existente, se utiliza el método push, pasando como parámetro el valor (o variable) a agregar.

const miArray = ["marca", 3, "palabra"]
miArray.push('otro elemento')

console.log(miArray.length) // ⇒ 4
console.log(miArray)
//["marca", 3, "palabra", “otro elemento”]

El método push () agrega elementos al final del array. Si queremos agregar al inicio del array, utilizamos el método unshift() de forma similar:

const miArray = ["marca", 3, "palabra"]

miArray.unshift('otro elemento')

console.log(miArray)
//[“otro elemento”, "marca", 3, "palabra"]

*/
//Ejemplo Carrito de Compras
const productosEnELCarrito = [];

const productos = [{ id: 01,
                     titulo: 'Zapatillas',
                     precio: '900'},
                    {id: 02, 
                     titulo: 'Remeras',
                     precio: 200},
                    {id: 03, 
                     titulo: 'Buzos',
                     precio: 1200}];

let acumulador = '';

for(let i= 0; i < productos.length; i++) {
    
    acumulador += `<div> 
    $${productos[i].titulo} - $${productos[i].precio}<br>
    <button onclick="agregarAlCarrito(${productos[i].id})">Agregar<button></div>`;
    
}

document.write(acumulador);

function agregarAlCarrito(idDeProducto){
    console.log(idDeProducto);
    productosEnELCarrito.push(idDeProducto);
    console.log(`tenes ${productosEnELCarrito.length} producto/s en el carrito`);
    console.log(productosEnELCarrito)
}
/*---  ---*/