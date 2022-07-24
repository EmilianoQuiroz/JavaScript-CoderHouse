//---Variables---//

//Var = Variables que pueden cambiar su valor, no es recomendad para proyectos grandes y esta en desuso
//Let = variables que pueden cambiar su valor solo en el ambito del scoup
//const = Son constantes y no cambian su valor

//---Declaracion de la variable---//
/*
Es cuando se crea la variable 

let nombreDeVariable = su valor;
*/
//---Forma de declarar variables---//

//CammelCase = primer palabre en minuscula y el resto en mayuscula

//Declaracion e inicializacion de Variables 
 
let name = "Santiago";
let surName = "Quiroz";
let country = "Argentina" ;

//Concatenacion de variables

console.log(`Su nombre y apellido es ${name} ${surName} y su pais de residencia es ${country} `)

//Operaciones basicas con variables
 /*
let num1 = 5;
let num2 = 10;
let num3 = 2;
let suma;
let resta;
let mult;
let div;

//Suma
suma =parseInt( num1 + num2 + num3);
//Resta
resta = num2 - num3;
//Multiplicacion
mult = num2 * num3;
//Divicion
div = num2 / num3;

console.log(`Suma = ${suma} Resta = ${resta} Multiplicacion = ${mult} Divicion = ${div}`)
*/
//Ingreso de datos
// prompt("Ingrese un dato");
/*
Con prompt nos aparece una ventana emergente dentro del
navegador que nos pide digitar un dato, el cual puede ser 
guardado en una variable para su posterior uso

EJEMPLO
let dato = prompt("Ingrse un dato: ")
El dato ingresado sera guardado en la variable "dato" para 
su posterior uso dentro del programa

*El prompt convierte todo lo ingresado en un dato de tipo de 
    string
*/

//Moatrar un dato en pantalla
//aletr("Dato que se mostrara en pantalla");

//console.log("Dato que se mostrara en la consola")
/*
Con console log podemos ver un dato en la consola 
ya sea la consola del navegador o la del editor 
de codigo que estemos usando. 
*/
//EJERCICIO
/*
Crea un script en JS que le solicite al usuario
ingresar un minimo de 1(un) dato. Luego, con JS
realizar operaciones matematicas o de concatenacion
sobre las entradas teniendo en cuenta el tipo de dato.
Al finalizar mostrar el resultado por un alert o console.log
*/
let dato1 = parseInt(prompt("Ingrese el primer numero: "));//Con el parseInt todo numero ingresado sera convertido a numero entero
let dato2 = parseInt(prompt("Ingrese el segundo numero: "));
let dato3 = parseInt(prompt("Ingrese el tercer numero: "));
/*
-----Convertir datos-----
EL prompt comvierte todos los datos en string
con lo cual si queremos convertir ese dato para, por ejemplo,
sumarlo a otro numero tenemos que parsearlos mediante un
parseInt() como se hizo en el ejerciocio anterior
*/
let suma = dato1 + dato2 + dato3;
let resta = dato1 - dato2;
let mult = dato1 * dato2;
let div = dato1 / dato2;

alert(`La suma de todos los datos es ${suma}`);
alert(`La resta de los dos primeros numeros es ${resta}`);
alert(`La multiplicacion de los dos primeros datos es ${mult}`);
alert(`La divicion de los dos primeros datos es ${div}`)


