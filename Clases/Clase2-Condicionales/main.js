/*
*********************
*Cointrol de flujos *
*********************

el control de flujos sirve para marcar puntos en nuestra 
aplicacion donde, a partir de alguna evaluacion, nuestro 
programa pueda tomar varios caminos posibles de accion 
Para generar estos controles empezamos a trabajar con 
valores booleanos, estos pueden tomas dos valores, true
o false, verdadero o falso.

*****************
* Estructura if *
*****************
*******SINTAXIS BASICA*******

if (condición) {
  código a ejecutar si la condición es verdadera
} else {
  ejecuta este otro código si la condición es falsa
}
*/

//-----Ejemplo-----//
/*
let numero1 = parseInt(prompt("Ingrese el primer valor: "))
let numero2 = parseInt(prompt("Ingrese el segundo valor: "))
//Primero ingreso dos datos numericos mediante un prompt parseado
let suma = numero1 + numero2
//Luego guaardo la suma de esos dos valores en una variable

if(suma == 23){ //Si la suma es igual a 23...
    alert("La suma de tus valores es 23")//Ejecuto este alert
}else{
    alert("La suma de tus valores no es 23")
    //De lo contrario se ejecutara este alert
}

***************
*True or false*
***************
let numero = 4
let comparacion = (numero == 5)
alert(comparacion)

El resultado de este alert es false,
ya que, 4 no es igual a 5

******************
*Operadores en js*
******************
== Es igual
=== Es estrictamente igual
!= Es distinto
!== Es estrictamente distinto
<,<=, >, >= Menor, menor igual, mayor, mayor igual 
*/

/*
*********************
*Operadores logicos *
*********************
&& — AND;  le permite encadenar dos o más expresiones
para que todas ellas se tengan que evaluar individualmente
true para que expresión entera retorne true.

|| — OR; le permite encadenar dos o más expresiones para 
que una o más de ellas se tengan que evaluar individualmente
true para que expresión entera retorne true.
*/

/*
**********OPERADORES DE ASIGNACION**********
Nombre                          Operador abreviado	            Significado
Asignación         	            x = y	                        x = y
Asignación de adición	        x += y	                        x = x + y
Asignación de resta	            x -= y                      	x = x - y
Asignación de multiplicación	x *= y	                        x = x * y
Asignación de división      	x /= y                      	x = x / y
Asignación de residuo	        x %= y	                        x = x % y
Asignación de exponenciación	x **= y	                        x = x ** y
Asignación de desplazamiento	x <<= y	                        x = x << y
a la izquierda
Asignación de desplazamiento 	x >>= y	                        x = x >> y
a la derecha
Asignación de desplazamiento 	x >>>= y	                    x = x >>> y
a la derecha sin signo
Asignación AND bit a bit	    x &= y	                        x = x & y
Asignación XOR bit a bit	    x ^= y	                        x = x ^ y
Asignación OR bit a bit	        x |= y	                        x = x | y
Asignación AND lógico	        x &&= y	                        x && (x = y)
Asignación OR lógico	        x ||= y	                        x || (x = y)
Asignación de anulación lógica	x ??= y	                        x ?? (x = y)
*/

//*************Ejercicios*************//
/*Escriba un programa en donde el usuario ingrese 3 notas,
calcule el promedio y si es mayor o igual a 4 le indique
que está aprobado con un alert.
*//*
let nota1 = parseInt(prompt("ingrese la nota de su examen"))
let nota2 = parseInt(prompt("ingrese la nota de su examen"))
let nota3 = parseInt(prompt("ingrese la nota de su examen"))

let suma = (nota1 + nota2 + nota3)
let promedio = (suma / 3);

//console.log(suma);
//console.log(promedio);

if (promedio >= 4) { 
    alert("Aprobaste")
} else{
    alert("Desaprobaste")
}
*/









