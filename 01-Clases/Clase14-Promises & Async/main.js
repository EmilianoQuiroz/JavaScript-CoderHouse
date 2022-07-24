/*
************************************
*          Fetch & async           * 
************************************ 
*/

//--- ASINCRONÍA ---//
/*
MODELOS DE PROGRAMACIÓN SINCRÓNICA Y ASINCRÓNICA

En el mmodelo sincronico nuestro programa funciona de manera lineal, ejecutando una acción y después otra. Sólo podemos realizar una tarea a la vez y cada tarea es bloqueante de la siguiente.

El modelo asincronico podemos realizar múltiples tareas a la vez. Al comenzar una acción, nuestro programa sigue en ejecución; y cuando la acción termina nuestro programa es informado y consigue acceso al resultado correspondiente

ENTONCES…
SI DESEO HACER DOS PETICIONES

Modelo Sincrónico
La segunda petición empezaría solamente cuando termine la primera, y tendríamos el resultado de ambas luego de finalizar la segunda.

Modelo Asincrónico
Ambas peticiones pueden realizarse en paralelo, y sólo debemos sincronizar los resultados cuando terminen.
*/

//--- PROGRAMACIÓN ASINCRÓNICA ---//
/*
👍 Una de las principales ventajas del modelo asincrónico: facilita el manejo de programas que realizan múltiples acciones a la vez.
✋ Uno de sus principales riesgos: puede dificultar la comprensión de aquellos programas que tienden a seguir una única línea de acción
*/

//--- setTimeout ---//
/*
Es una función que permite realizar acciones asincrónicamente.
La función recibe dos parámetros:
Una función de callback y un valor numérico que representa milisegundos

setTimeout(fn, time)

Así, la función que pasamos por primer parámetro se ejecuta luego de que transcurra el tiempo definido en el segundo parámetro. Por ejemplo:

setTimeout(()=> {
    console.log("Proceso asincrónico")
}, 3000)

En modelo sincrónico, esperaríamos ver el próximo ejemplo en el siguiente orden:
“Inicia proceso”
“Mitad de proceso” (tras 2 segundos)
“Fin proceso”

console.log("Inicia proceso")

setTimeout(()=> {
    console.log("Mitad de proceso")
}, 2000)

console.log("Fin proceso")

Sin embargo, la salida se produce de la siguiente forma:

// Inicia proceso
// Fin proceso

// Mitad de proceso  - tras 2 segundos

Esto sucede porque setTimeout funciona de forma asincrónica. Por eso es que los dos console.log se ejecutan antes, y por último vemos el resultado del setTimeout que va en el medio.

EJEMPLO DE APLICACIÓN DE SETTIMEOUT
Podemos estilar un elemento del DOM tras un evento y removerle una clase tras cierto tiempo:

const btn = document.querySelector('#boton')
const popup = document.querySelector('#popup-mensaje')

btn.addEventListener('click', () => {
    popup.classList.add('popup-active')

    setTimeout(() => {
        popup.classList.remove('popup-active')
    }, 2500)
})

Aquí se agrega una clase a un elemento tras clickear un botón, y luego se dispara un setTimeout que remueve esa clase del elemento tras 2500 milisegundos. 
Permite automatizar un evento interactivo.

Para casos sencillos asociados a eventos, lo visto en el ejemplo anterior puede resultar muy conveniente. 
Sin embargo, el problema está cuando tratamos combinar de forma compleja ambos tipos de procesos.
*/

//--- EJEMPLO DE APLICACIÓN DE SETTIMEOUT ---//
/*
De forma sincrónica, esperamos ver en vertical un console.log de cada letra de ambos strings, uno después del otro:
for (let letra of "hola") {
    console.log(letra)
}

for (let letra of "mundo") {
    console.log(letra)
}

Salida:
-
h
o
l
a
m
u
n
d
o
-

¿Qué pasa cuando dentro de los iteradores agregamos un setTimeout a cada console.log? El iterador ejecuta de forma sincrónica los llamados al setTimeout por cada letra, y estos se resuelven en orden con el delay correspondiente de forma asincrónica:
*/

//--- CALL STACK ---//
/*
CALL STACK (PILA)
Es una lista donde se apilan las distintas tareas a ejecutar por nuestro programa. Javascript es un lenguaje single threaded, o de un único hilo, lo que significa que tiene un único stack o pila de ejecución. De ahí que la ejecución es implícitamente sincrónica.

¿Cómo es el proceso de Call Stack?
Cuando se está a punto de ejecutar una función, ésta es añadida al stack. Si la función llama a la vez, a otra función, ésta es agregada sobre la anterior:

function multiply (x, y) {    
    return x * y;
}

function printSquare (x) {    
    let s = multiply(x, x);    
    console.log(s);
}

printSquare(5);
*/

//--- EVENT LOOP ---//
/*
Muchas funciones asincrónicas se ejecutan en un stack diferente. El Event Loop es la herramienta que permite la sincronización entre nuestro call stack con estas tareas asincrónicas que funcionan en un thread aparte.
Si el stack está vacío, el Event Loop envía la primera función que esté en la callback queue al call stack y comienza a ejecutarse.

Así, entendemos cómo funciona de tal manera una instrucción como la siguiente

console.log("Inicia proceso")

setTimeout(()=> {
    console.log("Mitad de proceso")
}, 0)

console.log("Fin proceso")

// Inicia proceso
// Fin proceso
// Mitad de proceso 

Por más que hagamos el timeout con 0 milisegundos, éste se envía al stack de web apis primero, luego al callback queue, y finalmente el event loop lo incorpora al callstack para su ejecución, luego de los console.log anteriores
*/

//--- setInterval ---//
/*
Tiene la misma sintaxis que setTimeout, pero la unidad de tiempo es un intervalo para la repetición de la función asociada:

setInterval(() => {
    console.log("Tic")
}, 1000)

Permite ejecutar funciones de manera reiterativa tras los milisegundos indicados hasta que indiquemos su detención o se cierre la aplicación
*/

//--- clearInterval & clearTimeout ---//
/*
En caso de querer remover un Intervalo, utilizamos la función clearInterval (). También podemos detener la ejecución de un setTimeout invocando clearTimeout ().

Cuando llamamos un setInterval() éste retorna una referencia al intervalo generado, el cual podemos almacenar en una variable. Es esta referencia la que debemos pasar a la función clearInterval para que la limpieza tenga efecto:

let counter = 0

const interval = setInterval(() => {
    counter++
    console.log("Counter: ", counter)

    if (counter >= 5) {
        clearInterval(interval)
        console.log("Se removió el intervalo")
    }
}, 1000)

Funciona igual con los timeout. Si guardamos en una variable la referencia al timeout generado, podemos usarla para removerlo luego. En el siguiente caso, el timeout generado nunca llega a ejecutarse:

console.log("Inicio")

const fin = setTimeout(() => {
    console.log("fin")
}, 2000)

clearTimeout(fin)
*/

/*
************************************
*             Promesas             * 
************************************ 
*/
/*
¿QUÉ ES UNA PROMESA EN JS?

Es un objeto de Javascript que representa un evento a futuro. Es una acción asincrónica que se puede completar en algún momento y producir un valor, y notificar cuando esto suceda.
Una promesa cuenta con tres estados posibles: pending, fulfilled y rejected. Las promesas pueden de ser resueltas o rechazadas.

Podemos crear promesas a través de su constructor new Promise. Su sintaxis es algo compleja, ya que recibe una función por parámetro que a su vez recibe por parámetro las funciones de resolve y reject

new Promise( (resolve, reject) => {
    //cuerpo de la promesa
})
*/

//--- Resolve & Reject ---//
/*
En principio, una promesa se retorna con estado pending, entendiendo que el valor a generar aún no fue resuelto:

const eventoFuturo = () => {
    return new Promise( (resolve, reject) => {
        //cuerpo de la promesa
    } )
}

console.log( eventoFuturo() ) // Promise { <pending> }

Esta función retorna una promesa que no se resuelve. Por lo tanto, veremos que el valor que genera es un objeto Promise con estado pendiente.

El valor de retorno de la promesa se define a través del llamado a las funciones de resolve o reject:
Si el cuerpo de la promesa llama a resolve(), la promesa cambiará su estado a fulfilled, con el valor enviado a resolve().
Si la promesa llama a reject(), cambiará su estado a rejected con el valor enviado al reject().
*/

//--- EJEMPLO ---//
/*
Aquí podemos ver cómo cambia de estado la promesa con distintos valores. Según el llamado de la función la promesa se verá resuelta o rechazada. Sin embargo, lo que vemos por consola es el objeto Promise que retorna la función, y con lo que nos interesa trabajar en realidad es con el valor de resolución de la promesa. 

const eventoFuturo = (res) => {
    return new Promise( (resolve, reject) => {
        if (res === true) {
            resolve('Promesa resuelta')
        } else {
            reject('Promesa rechazada')
        }
    })
}

console.log( eventoFuturo(true) ) // Promise { 'Promesa resuelta' }
console.log( eventoFuturo(false) ) // Promise { <rejected> 'Promesa rechazada' }

Miremos el mismo caso agregando un delay con setTimeout:

const eventoFuturo = (res) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            res ? resolve('Promesa resuelta') : reject('Promesa rechazada')
        }, 2000)
    })
}

console.log( eventoFuturo(true) ) // Promise { <pending> }
console.log( eventoFuturo(false) ) // Promise { <pending> }

En este caso, el console.log es sincrónico y vemos que la promesa está en pending en ambos llamados (su resolución se generará dentro de 2s). Las promesas tienen un mecanismo para trabajar esta asincronía y poder ejecutar funciones cuando cambie su estado.
*/

//--- THEN & CATCH ---//
/*
Al llamado de una función que retorne una promesa, podemos concatenar el método .then() o .catch(), los cuales reciben una función por parámetro con la cual se captura el valor de la promesa:
.then() : Si la promesa es resuelta , su valor de retorno se captura dentro del .then(), recibiendo por parámetro de su función ese valor.
.catch() : si la promesa es rechazada , su valor se captura dentro de un .catch() siguiendo la misma lógica.

Lo que queramos ejecutar cuando la promesa se resuelva o rechace, debemos definirlo dentro de un .then() o .catch(), según el caso 🙌:

eventoFuturo(true)
    .then( (response) => {
        console.log(response) // Promesa resuelta
    })

eventoFuturo(false)
    .catch( (error) => {
        console.log(error) // Promesa rechazada
    })

Se aprecian los console.log tras 2 segundos de delay y lo que vemos es, precisamente, el valor que retornan el resolve o reject de la promesa.

Como una promesa puede tener varios estados posibles, se puede concatenar varios .then() o .catch() en un mismo llamado, y caeremos en el caso que corresponda según cómo se haya resuelto la promesa.

eventoFuturo(true)
    .then( (response) => {
        console.log(response) // Promesa resuelta
    })
    .catch( (error) => {
        console.log(error)
    })

eventoFuturo(false)
    .then( (response) => {
        console.log(response)
    })
    .catch( (error) => {
        console.log(error) // Promesa rechazada
    })

*/

//--- FINALLY ---//
/*
finally() es un método que recibe una función la cual se ejecutará siempre al finalizar la secuencia, sin importar si se haya resuelto o no la promesa:

eventoFuturo(true)
    .then( (response) => {
        console.log(response)
    })
    .catch( (error) => {
        console.log(error)
    })
    .finally( () => {
        console.log("Fin del proceso")
    })
// Promesa resuelta
// Fin del proceso

*/