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
