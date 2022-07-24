//--- Ciclos e Iteraciones ---//
/*
Los ciclos, también conocidos como bucles 
o iteraciones son un medio rápido y sencillo 
para hacer algo repetidamente.
Si tenemos que hacer alguna operación más 
de una vez en el programa, de forma consecutiva, 
usaremos las estructuras de bucles de JavaScript:  
for, while o do...while.
*/

//--- TIPOS DE BUCLES ---//
/*
CICLOS POR CONTEO
Repiten un bloque de código un número de veces 
específica. Estructura for. 

CICLOS CONDICIONALES
Repiten un bloque de código mientras la condición 
evaluada es verdadera. Estructuras while y do...while.
*/

//--- FOR ---//
/*
El "desde" es la zona en la que se establecen los 
valores iniciales de las variables que controlan el 
ciclo.
El "hasta" es el único elemento que decide si se 
repite o se detiene el ciclo.
La "actualización" es el nuevo valor que se asigna 
después de cada repetición a las variables que 
controlan la repetición.
*/
//--- ESTRUCTURA FOR ---//
/*
for (let i = 0; i < 10; i++) {
    alert(i);
}
*/
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//     if(i%2 == 0) {
//         console.log('par');
//     }
// }

//--- SENTENCIA BREACK ---//
/*
A veces, cuando escribimos una estructura for, necesitamos 
que bajo cierta condición el ciclo se interrumpa. 
Para eso se utiliza la sentencia break.
Al escribir esa línea dentro de un ciclo for, el mismo 
se interrumpirá como si hubiera finalizado.
*/
// for (let i = 1; i <= 10; i++) {
//     //Si la variable i es igual 5 interrumpo el for. 
//     if(i == 5){
//         break;
//     }
//     alert(i);
// }

//--- SENTENCIA CONTINUE ---//
/*
A veces, cuando escribimos una estructura for, 
necesitamos que bajo cierta condición, el ciclo 
saltee esa repetición y siga con la próxima. Para 
eso se utiliza la sentencia continue.
*/

//--- ESTRUCTURA WHILE ---//
/*
La estructura while permite crear bucles que se ejecutan 
cero o más veces, dependiendo de la condición indicada.
El funcionamiento del bucle while se resume en: mientras 
se cumpla la condición indicada, repite las instrucciones 
incluidas dentro del bucle.
Cuando usamos while, asumimos que en algún momento la 
repetición va a finalizar; si la comparación no se realiza 
adecuadamente podemos generar el llamado “bucle infinito”
*/
//--- EJEMPLO APLICADO WHILE: ESC ---//

// let entrada = prompt("Ingresar un dato");
    
//     //Repetimos con While hasta que el usuario ingresa "ESC"
// while(entrada != "ESC" ){
    
//     alert("El usuario ingresó "+ entrada);
//         //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
    
//         entrada = prompt("Ingresar otro dato");
// }

//--- ESTRUCTURA DO WHILE ---//
/*
La estructura do...while permite crear bucles que se 
ejecutan una o más veces, dependiendo de la condición 
indicada.
A diferencia de while, garantiza que el bloque de código 
se interpreta al menos una vez, porque la condición se 
evalúa al final.
*/
//--- EJEMPLO APLICADO DO...WHILE: N° ---//

// let numero = 0;
// do{
//    //Repetimos con do...while mientras el usuario ingresa un n°
//    numero = prompt("Ingresar Número");
//    console.log(numero);
// //Si el parseo no resulta un número se interrumpe el bucle.   
// }while(parseInt(numero));

//--- SWITCH ---//
/*
La estructura switch  está especialmente diseñada para 
manejar de forma sencilla múltiples condiciones sobre 
la misma variable (técnicamente se podría resolver con 
un if, pero el uso de switch es más ordenado). 
Su definición formal puede parecer confusa, pero 
veamos un ejemplo para entender su simpleza.
*/

//--- EJEMPLO SWITCH ---//

const cuentaDeBanco = prompt('Que banco tenes?');
let deudaAPagar = 1000;

switch(cuentaDeBanco){
    case "Santander Rio":
        deudaAPagar = deudaAPagar - (deudaAPagar * 0.2);
        break;
    case "Galicia":
        deudaAPagar = deudaAPagar - (deudaAPagar * .5);
        break;
    default:
        deudaAPagar = deudaAPagar * 2;
        break;
}
alert(`Total: ${deudaAPagar}`)