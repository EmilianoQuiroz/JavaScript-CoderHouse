//--- FUNCIONES ---//
/*
Cuando se desarrolla una aplicación o sitio web, es 
muy habitual utilizar una y otra vez las mismas 
instrucciones.
En programación, una función es un conjunto de instrucciones 
que se agrupan para realizar una tarea concreta, que 
luego se puede reutilizar a lo largo de diferentes 
instancias del código.
*/

//--- DECLARACIÓN ---//
/*Se declara a través de la palabra reservada function. 
Deben tener un nombre en minúscula y sin espacios seguidos 
de los característicos paréntesis (). El contenido de 
la función se escribe entre las llaves. El nombre de 
la función no se puede repetir en otra.

function saludar() {
    console.log("¡Hola estudiantes!");
}

*/

//--- LLAMADO ---//
/*
Una vez que declaramos la función, podemos usarla en 
cualquier otra parte del código todas las veces que 
queramos. 
Para ejecutar una función sólo hay que escribir su 
nombre y finalizar la sentencia con (). A esto se lo 
conoce como llamado a la función.

saludar();

Donde escribamos el llamado, se interpretarán las 
instrucciones definidas en esa función.
*/

//--- PARÁMETROS ---//
/*
Una función simple, puede no necesitar ninguna dato 
para funcionar. 
Pero cuando empezamos a codificar funciones más complejas, 
nos encontramos con la necesidad de recibir cierta 
información. 
Cuando enviamos a la función uno o más valores para 
ser empleados en sus operaciones, estamos hablando 
de los parámetros de la función.
Los parámetros se envían a la función mediante variables 
y se colocan entre los paréntesis posteriores al nombre 
de la función.

Los parámetros son variables que se declaran dentro 
de la función, entre sus paréntesis. Los valores de 
éstos se definen luego en el llamado.

function conParametros(parametro1, parametro2) {
    console.log(parametro1 + " " + parametro2);
}

Así, podemos armar funciones dinámicas que, siguiendo 
la lógica que querramos, pueden generar distintos resultados 
al recibir diferentes valores.

El valor que toman estos parámetros se definen en el 
llamado. Cuando llamamos a la función, los valores 
que pasamos a la función entre paréntesis se asignan 
posicionalmente a los parámetros correspondientes, 
generando posibles resultados diferentes:

conParametros("Hola", "Coder"); // -> “Hola Coder”
conParametros("Cursando", "JS"); // -> “Cursando JS”

En este caso, el primer string que pasamos se asigna 
en parametro1, y el segundo string en parametro2; 
armando las salidas según la lógica definida.

*/

//--- RETURN ---//
/*
Las funciones pueden generar un valor de retorno usando 
la palabra return, obteniendo el valor cuando la función 
es llamada.

function sumar(primerNumero, segundoNumero) {
    return primerNumero + segundoNumero;
}
let resultado = sumar(5, 8);

La función puede comportarse como una operación que 
genera valores (como en las operaciones matemáticas y 
lógicas previas). 
En el espacio donde llamo a la función se genera un 
nuevo valor: este valor es el definido por el return 
de la misma.
*/

//--- SCOPE ---//
/*
El scope o ámbito de una variable es la zona del programa 
en la cual se define, el contexto al que pertenece la 
misma dentro de un algoritmo, restringiendo su uso y 
alcance JavaScript define dos ámbitos para las variables: 
global y local.
*/

//--- VARIABLES GLOBALES ---//
/*
Si una variable se declara fuera de cualquier función 
o bloque, automáticamente se transforma en variable 
global.
*/

//--- VARIABLES LOCALES ---//
/*
Cuando definimos una variable dentro de una función 
o bloque es una variable local,  y será accesible 
sólo dentro de ese espacio. Si queremos utilizarla 
por fuera, la variable no existirá para JS.
*/

/*
Entender que cada scope local es un espacio cerrado 
nos permite crear bloques de trabajo bien diferenciados 
e independientes, sin preocuparnos por repetir nombres 
de variables, sabiendo que se entienden como diferentes 
según dónde las llamemos.
*/

//--- FUNCIONES ANÓNIMAS ---//
/*
Una función anónima es una función que se define sin 
nombre y se utiliza para ser pasada como parámetro o 
asignada a una variable. En el caso de asignarla a 
una variable, pueden llamar usando el identificador 
de la variable declarada.

Una función anónima es una función que se define sin 
nombre y se utiliza para ser pasada como parámetro o 
asignada a una variable. En el caso de asignarla a 
una variable, pueden llamar usando el identificador 
de la variable declarada.

const suma  = (a, b) => { return a + b }
    //Si es una función de una sola línea con retorno podemos evitar escribir el cuerpo.
const resta = (a, b) =>  a - b ;
console.log( suma(15,20) )
console.log( resta(20,5) )
*/
//--- EJEMPLO ---//
/*
const suma  = (a,b) => a + b
const resta = (a,b) => a - b
//Si una función es una sola línea con retorno y un parámetro puede evitar escribir los ()
const iva   = x => x * 0.21
let precioProducto  = 500
let descuento = 50 
//Calculo el precioProducto + IVA - descuento
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento) 
console.log(nuevoPrecio)

*/




