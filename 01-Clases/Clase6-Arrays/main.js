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
// const productosEnELCarrito = [];

// const productos = [{ id: 01,
//                      titulo: 'Zapatillas',
//                      precio: '900'},
//                     {id: 02, 
//                      titulo: 'Remeras',
//                      precio: 200},
//                     {id: 03, 
//                      titulo: 'Buzos',
//                      precio: 1200}];

// let acumulador = '';

// for(let i= 0; i < productos.length; i++) {
    
//     acumulador += `<div> 
//     $${productos[i].titulo} - $${productos[i].precio}<br>
//     <button onclick="agregarAlCarrito(${productos[i].id})">Agregar<button></div>`;
    
// }

// document.write(acumulador);

// function agregarAlCarrito(idDeProducto){
//     console.log(idDeProducto);
//     productosEnELCarrito.push(idDeProducto);
//     console.log(`tenes ${productosEnELCarrito.
//length} producto/s en el carrito`);
//     console.log(productosEnELCarrito)
//}
/*--- QUITAR ELEMENTOS ---*/
/*
De forma inversa, existen métodos para eliminar elementos del array.
Si queremos eliminar el primer elemento del array utilizamos el método shift(); y si queremos eliminar el último elemento, el método pop().
*/

/*--- POP y SHIFT ---*/
/*
const nombres = ["Luis", "Ana", "Julia", “Juan”]

nombres.pop()
console.log(nombres) // ["Luis", "Ana", "Julia"]

nombres.shift()
console.log(nombres) // ["Ana", "Julia"]
*/

/*--- REVERSE ---*/
/*
Sirve para dar vuelta el array y se escribe de la siguiente manera:

nombreDelArray.reverse()
*/

/*--- SPLICE ---*/
/*
El método splice() permite eliminar uno o varios elementos de un array en cualquier posición. Funciona con 2 parámetros: el primero es el índice donde se ubica el método para trabajar, y el segundo es la cantidad de elementos a eliminar desde esa posición.

const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
nombres.splice(1, 2)

console.log(nombres)
// ['Rita', 'Ana', 'Vanesa']
*/

/*--- JOIN ---*/
/*
Mediante el método join  podemos generar un string con todos los elementos del array, separados por el valor que pasamos por parámetro:

const nombres = ["Luis", "Ana", "Julia", “Juan”]

console.log( nombres.join(“, ”) ) 
// Luis, Ana, Julia

console.log( nombres.join(“*”) ) 
// Luis*Ana*Julia

*/

/*--- CONCAT ---*/
/*
Mediante el método concat podemos combinar dos Arrays en un único Array resultante:

const perros   = ["Pupy", “Ronnie”]
const gatos = ["Mishi", “Garfield”, "Zuri"]
const mascotas = perros.concat(gatos)
console.log(mascotas)
// ["Pupy", “Ronnie”, "Mishi", “Garfield”, "Zuri"]
*/

/*--- SLICE ---*/
/*
El método slice devuelve una copia de una parte del Array dentro de un nuevo Array, empezando por el inicio hasta fin (fin no incluído). El Array original no se modificará.

const nombres    = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
const masculinos = nombres.slice(1, 3); // Nuevo array desde la posición 1 a 3.
// masculinos contiene ['Pedro','Miguel']
*/

/*--- INDEXOF ---*/
/*
El método indexOf() nos permite obtener el índice de un elemento en un array. Recibe por parámetro el elemento que queremos buscar en el array y, en caso de existir, nos retorna su índice. Si el elemento no existe nos retornará como valor: -1

const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];

console.log( nombres.indexOf('Rita') ) // ⇒ 0
console.log( nombres.indexOf('Ana') ) // ⇒ 3
console.log( nombres.indexOf('Julieta') ) // ⇒ -1
*/

/*--- INCLUDES ---*/
/*Similar al anterior, el método includes me permite saber si un elemento que recibo por parámetro existe o no dentro de un array, retornando un valor booleano en caso afirmativo o negativo:

const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']

console.log( nombres.includes('Rita') ) // ⇒ true
console.log( nombres.includes('Miguel') ) // ⇒ true
console.log( nombres.includes('Julieta') ) // ⇒ false
*/

/*--- REVERSE ---*/
/*
Como su nombre lo indica, el método reverse() invierte el orden de los elementos dentro de un array.

const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']
nombres.reverse()
console.log( nombres ) 
// ⇒ ['Vanesa', 'Ana','Miguel', 'Pedro','Rita']
*/

/*--- EJEMPLO APLICADO: CARGAR ARRAY CON ENTRADAS ---*/

//Declaraciòn de array vacío y variable para determinar cantidad
// const listaNombres = [];
// let   cantidad     = 5;
//Empleo de do...while para cargar nombres en el array por prompt()
// do{
//    let entrada = prompt("Ingresar nombre");
//    listaNombres.push(entrada.toUpperCase());
//    console.log(listaNombres.length);
// }while(listaNombres.length != cantidad)
// //Concatenamos un nuevo array de dos elementos
// const nuevaLista = listaNombres.concat(["ANA","EMA"]);
//Salida con salto de línea usando join
// alert(nuevaLista.join("\n"));

/*--- ARRAY DE OBJETOS ---*/
/*
Los array pueden usarse para almacenar objetos personalizados. Podemos asignar objetos literales o previamente instanciados en la declaración del array o agregar nuevos objetos usando el método push y el constructor.

const objeto1 = { id: 1, producto: "Arroz" };
const array   = [objeto1, { id: 2, producto: "Fideo" }];
array.push({ id: 3, producto: "Pan" });
*/

/*--- ¡ARRAYS + OBJETOS! ---*/
/*
La combinación de arrays con objetos genera estructuras complejas de datos. 
¡Los métodos de arrays y las herramientas para recorrerlos nos permiten acceder y manipular todos estos datos de forma precisa y prolija!
*/

/*--- FOR...OF ---*/
/*
La sentencia for...of permite recorrer un array ejecutando un bloque de código por cada elemento del objeto.

const productos = [{ id: 1, producto: "Arroz" },
                  { id: 2,  producto: "Fideo" },
                  { id: 3,  producto: "Pan" }];

for (const producto of productos) {
    console.log(producto.id);
    console.log(producto.producto);
}

Es un iterador que recorre el array de principio a fin, y en cada iteración accedemos al elemento en cuestión a través de la referencia que declaramos. Por cada iteración se ejecuta el bloque de código que definimos entre llaves.

for (const referencia of array) { … }

*/







