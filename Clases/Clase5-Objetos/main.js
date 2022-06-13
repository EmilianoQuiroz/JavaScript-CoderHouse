/*--- ¿QUÉ ES UN OBJETO ---*/
/*
En JS, los objetos son estructuras que podemos definir para agrupar valores bajo un mismo criterio. Podemos decir que un objeto es una colección de datos relacionados como una entidad. Se componen de un listado de pares clave-valor, es decir, contienen propiedades y valores agrupados.
*/

/*--- ¿POR QUÉ USAMOS OBJETOS? ---*/
/*
La utilidad de los objetos deviene de su composición por varios valores y operaciones comunes (funciones) para todos los elementos de este tipo y sus propiedades".

let nombre = "Homero";
let edad   = 39;
let calle  = "Av. Siempreviva 742";

// Los variables anteriores entran relacionados entre sí, entonces mejor usamos un objeto literal

const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742" }
*/

/*--- OBTENIENDO VALORES DEL OBJETO ---*/
/*
Para obtener el valor de una propiedad en un objeto utilizamos la notación punto (.): El nombre de la variable del objeto, seguido de punto y el nombre de la propiedad:

const persona1 = { nombre: "Homero",
                   edad: 39,
                   calle: "Av. Siempreviva 742"}
                   
console.log(persona1.nombre)
console.log(persona1.edad)
console.log(persona1.calle)

Otra forma de obtener el valor de una propiedad en un objeto utilizamos la notación corchetes ([]): El nombre de la variable del objeto, seguido de corchetes y dentro de ellos un string del nombre de la propiedad:

const persona1 = { nombre: "Homero",
                   edad: 39,
                   calle: "Av. Siempreviva 742"}
                   
console.log(persona1["nombre"])
console.log(persona1["edad"])
console.log(persona1["calle"])
*/

/*--- ASIGNAR VALORES A LAS PROPIEDADES ---*/
/*
Es posible usar las dos formas( corchetes y paréntesis) para acceder a las propiedades y asignar nuevos valores a los datos almacenados en la propiedades del objeto.

const persona1 = { nombre: "Homero",
                   edad: 39,
                   calle: "Av. Siempreviva 742"}
                   
persona1["nombre"] = "Marge"
persona1.edad = 36
*/

/*--- CONSTRUCTORES ---*/
/*
En JS, el constructor de un objeto es una función que usamos para crear un nuevo objeto cada vez que sea necesario.
Con esta “función constructora” podemos inicializar las propiedades del objeto al momento de ser instanciado con new.
Las funciones constructoras siempre se escriben con mayuscula la primer letra.

function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad 	 = edad;
    this.calle  = calle;
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");
*/

/*--- CONSTRUCTOR Y NEW ---*/
/*
En el ejemplo anterior, se define la función Persona, donde se asignan las diferentes propiedades con los valores recibidos como parámetros.

Luego, en algún lugar del código posterior a esas líneas, se puede construir un objeto Persona declarando una variable y asignando la referencia del objeto instanciado mediante la instrucción new Persona(...)
*/
/*--- USO DE THIS ---*/
/*
La palabra clave this (“este”) refiere al elemento actual en el que se está escribiendo el código.  Cuando se emplea un función constructora para crear un objeto (con la palabra clave new), this está enlazado al nuevo objeto instanciado.
 This es muy útil para asegurar que se emplean las propiedades del objeto actual.

function Persona(literal) {
    this.nombre = literal.nombre;
    this.edad   = literal.edad;
    this.calle  = literal.calle;
}
const persona1 = new Persona({ nombre: "Homero", edad: 39, calle: "Av.Siempreviva 742" });

 */
const productos = [{titulo: 'Zapatillas',
                     precio: '900'},
                    {titulo: 'Remeras',
                     precio: 200}];

let acumulador = '';

for(let i= 0; i < 2; i++) {
    acumulador += `<div> $${productos[i].precio}<br><button onclick="">Agregar<button></div>`;
}

document.write(acumulador);

function agregarAlCarrito(producto){

}
//011852

