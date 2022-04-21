//FUNCIONES
/*
Temas a tratar:
-Concepto de funcion
-Parametros de entrada y salida de una funcion
-Que es el Scope y cuales son las variables locales 
y globales
-Diferencia entre una funcion anonima y una funcion
flecha 
*/

//---DEFINICION DE FUNCION---//
/*
Una funcion es un conjunto de instrucciones que se
agrupan para realizar una tarea concreta, que luego
se puede reutilizar a lo largo de diferentes instancias
de codigo
*/

//---DECLARACION---//
/*
Se declara a traves de la palabra reservada function.
Deben tener un nombre en minuscula y sin espacios 
seguidos de los caracteristicos parentesis (). El 
contenido de la funcion se escribe entre las llaves.
El nombre de la funcion no se puede repetir
*/

//---LLAMADO---//
/*
Una vez declarada la funcion, podemos usarla en cualquier
otra parte del codigo todas las veces que queramos. Para 
ejecutar la funcion solo hay que escribir su nombre y finalizar 
la sentencia con un parentesis. A esto se le conoce como 
llamado a la funcion.
*/
//EJEMPLO
/*
//Creacion de la funcion
function saludar(){
    console.log("Hola" + "\n")
}
//LLamado de la funcion 
saludar()
saludar()
saludar()
saludar()
*/

//---PARAMETROS---//
/*
Cuando enviamos a la funcion uno o mas valores
para ser empleados en sus operaciones, estamos
hablando de los parametros de una funcion. Los
parametros se envian a la funcion mediante variables
y se colocan entre los parentesis posteriores al 
nombre de la funcion
*/
//15000
//EJEMPLO
/*
function conParametro(parametro1, parametro2, parametro3){
    console.log(`${parametro1} ${parametro2} ${parametro3}`)
}
conParametro("Hola","Santiago","Como estas?")
*/

//EJEMPLO con una suma
/*
Con dos funciones hacer una suma y luego mostrar el
resultado por consola.
*/
/*
let resultado = 0; //Primero inicializamos la variable
//Luego creamos la funcion sumar
function sumar(parametro1, parametro2){
    resultado = parametro1 + parametro2;
    mostrar(resultado);//LLamado de una funcion dentro de una funcion
}
//luego creamos la funcion para mostrar el resultado
function mostrar(mensaje){
    console.log(mensaje);
}
//Por ultimo llamamos a la funcion
sumar(30, 80);
//mostrar(resultado);
*/

//---RETURN---//
//Con return podemos retornar el valor de una variable
//EJEMPLO
/*
let resultado = 0;
function sumar(parametro1, parametro2){
    resultado = parametro1 + parametro2;

    return resultado;
    //Retorna el valor de resultado
}
function mostrar(mensaje){
    console.log(mensaje);
}
//Guardo el llamado a la funcion en una variable
resultadoSuma = sumar(30, 15);
//Luego muestro la variable que contiene el return del
//resultado de la funcion sumar en la funcion mostrar
mostrar(resultadoSuma);
*/

//EJEMPLO calculadora
/*
function calculadora(parametro1, parametro2, parametro3){
    switch(parametro3){
        case "+":
            return parametro1 + parametro2;
            break;
        case "-":
            return parametro1 - parametro2;
            break;
        case "*":
            return parametro1 * parametro2;
        case "/":
            return parametro1 / parametro2;
            break;
        default:
            return 0;
    }
}
let resultadoSuma = calculadora(50, 120, "+");
console.log(resultadoSuma);
let resultadoResta = calculadora(50,30,"-");
console.log(resultadoResta)
let resultadoMult = calculadora(6,20,"*");
console.log(resultadoMult);
let resultadoDiv= calculadora(50,2,"/");
console.log(resultadoDiv);
*/
//EJEMPLO pedir cuotas al usuario y un monto, retornar valor de cada cuota
/*
let numero = parseInt(prompt("Ingrese el total de su compra"))
let cuotas = parseInt(prompt("Ingrese el numero de cuotas"))

function calculadora(numero, cuotas){
    resultado = numero / cuotas;
    return resultado;
}

let resultadoCaluladora = calculadora(numero, cuotas);
console.log(resultadoCaluladora); 
*/

//---SCOPE---//
//O ambiente de la funcion
/*
El Scope o variable de la funcion es la zona del
programa en la cual se define, el contexto al que
pertenece la misma dentro de un algoritmo, 
restringiendo su uso y alcance.
JavaScript define dos ambitos para las variables.
Global y Local
Las variables globales y locales se identifican como
diferentes entre si, pueden existir una variable global
y una local con el mismo nombre sin ningun tipo de 
problema.
*/

//variables globales
/*
Son las que pueden utilizarce en cualquier parte del
codigo, generalmente se encuentran fuera de las funciones
*/
//variables locales
/*
Son las variables que se crean dentro de una funcion
y solo pueden ser utilizadas dentro de esa funcion
*/

//---FUNCIONES ANONIMAS Y FUNCIONES FLECHA---//

//FUNCIONES ANONIMAS
/**
Son funciones que se definen sin nombre y se utiliza para
ser pasada como parametro o asignada a una variable. En 
caso de ser asignada a una variable, puededn llamar usando
el  identificador de la variable declarada.
*/
//EJEMPLO
/*
const suma = function(a,b){return a + b};
const resta = function(a,b){return a - b};

console.log(suma(18,34));
console.log(resta(18,8));
*/
//FUNCIONES FLECHA
/*
Se las identifica como funciones anonimas simplificadas.
No utiliza la palabra function pero si utiiliza =>(Flecha)
entre los dos parametros y el bloque.
*/
//EJEMPLO
/*
const suma = (a,b) => {return a + b};
//Se puede obiar el return y los corchetes ya que
//implicitamente siempre devuelve ese valor
const resta = (a,b) => a - b;

console.log(suma(18,32));
console.log(resta(18,32));
*/
//EJEMPLO precio de producto mas iva menos descuesto

//Primero creamos las funciones de cada operacion
const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const iva = x => x * 0.21;
//Creamos las variables de precio y descuentos 
let precioProducto = 1000;
let descuesto = 100;
//Llamamos a la funcion
let precioFinal = resta(suma(precioProducto,iva(precioProducto)),descuesto);
//Por ultimo mostramos en pantalla
console.log(precioFinal);