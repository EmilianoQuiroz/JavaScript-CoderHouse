/*
******************
*     EVENTOS    *
******************
*/
/*
Objetivos de la clase:
-Comprender qué son los eventos y para qué sirven.
-Aprender cuáles son las tres opciones para definir eventos.
-Entender cómo escuchar un evento sobre el DOM. 
-Conocer los eventos más comunes.
-Identificar qué es la información del evento.
*/

//--- ¿QUÉ ES UN EVENTO? ---//
/*
Los eventos son la manera que tenemos en Javascript de controlar las acciones de los usuarios, y definir un comportamiento de la página o aplicación cuando se produzcan.
Con Javascript es posible definir qué sucede cuando se produce un evento, por ejemplo, cuando se realiza un clic en cierto elemento o se inserta un texto en un determinado campo.
*/

//--- ¿CÓMO FUNCIONA? ---//
/*
JavaScript permite asignar una función a cada uno de los eventos. Reciben el nombre de event handlers o manejadores de eventos.
Así, ante cada evento, JavaScript asigna y ejecuta la función asociada al mismo.
Hay que entender que los eventos suceden constantemente en el navegador.
JavaScript lo que nos permite hacer es escuchar eventos sobre elementos seleccionados. Cuando escuchamos el evento que esperamos, se ejecuta la función que definimos en respuesta. 
A esta escucha se la denomina "addEventListener".
*/

//--- ¿CÓMO DEFINIR EVENTOS EN JS? ---//
//--- OPCIÓN 1 ---//
/*
El método addEventListener() permite definir qué evento escuchar sobre cualquier elemento seleccionado.
El primer parámetro corresponde al nombre del evento y el segundo a la función de respuesta.

<!DOCTYPE html>
<html>
  <head>
    <title>Mi primer App</title>
  </head>
  <body>
    <h2>Coder House</h2>
    <button id="btnPrincipal">CLICK</button>
    <script>
      let boton = document.getElementById("btnPrincipal")
      boton.addEventListener("click", respuestaClick)
      function respuestaClick(){
        console.log("Respuesta evento");
      }
    </script>
  </body>
</html>
*/

//--- OPCIÓN 2 ---//
/*
Emplear una propiedad del nodo para definir la respuesta al evento. Las propiedades se identifican con el nombre del evento y el prefijo on.
También es posible emplear funciones anónimas para definir los manejadores de eventos.

<!DOCTYPE html>
<html>
  <head>
    <title>Mi primer App</title>
  </head>
  <body>
    <h2>Coder House</h2>
    <button id="btnPrincipal">CLICK</button>
    <script>
      let boton = document.getElementById("btnPrincipal")
      boton.onclick = () =>{console.log("Respuesta 2")}
    </script>
  </body>
</html>
*/

//--- OPCIÓN 3: SINTAXIS ---//
/*
Determinar el evento especificando el manejador de evento en el atributo de una etiqueta HTML. La denominación del atributo es idéntica al de la propiedad de la opción 2 (prefijo on).

<input type="button" value="CLICK2" onclick="alert('Respuesta 3');" />

La función puede declararse entre la comillas o bien tomarse una referencia existen en el script.
*/
//001835

//--- EVENTOS MÁS COMUNES ---//
/*
EVENTOS DEL MOUSE
Se producen por la interacción del usuario con el mouse.
Entre ellos se destacarán los que se encuentran a continuación.

-mousedown/mouseup: 
Se oprime/suelta el botón del ratón sobre un elemento.
-mouseover/mouseout:  
El puntero del mouse se mueve sobre/sale del elemento.
-mousemove: 
El movimiento del mouse sobre el elemento activa el evento.
-click: 
Se activa después de mousedown o mouseup sobre un elemento válido.

//CODIGO HTML DE REFERENCIA
<button id="btnMain">CLICK</button>
//CODIGO JS
let boton = document.getElementById("btnMain")
boton.onclick = () => {console.log("Click")}
boton.onmousemove = () => {console.log("Move")}
*/

/*
EVENTOS DE TECLADO
Se producen por la interacción del usuario con el teclado. 
Entre ellos se destacarán los que se encuentran a continuación.

keydown: Cuando se presiona.
keyup: Cuando se suelta una tecla.

//CODIGO HTML DE REFERENCIA
<input id = "nombre" type="text">
<input id = "edad"   type="number">
//CODIGO JS
let input1 = document.getElementById("nombre")
let input2 = document.getElementById("edad")
input1.onkeyup = () => {console.log("keyUp")}
input2.onkeydown = () => {console.log("keyDown")}
*/

/*
EVENTO CHANGE
El evento change se activa cuando se detecta un cambio en el valor del elemento. 
Por ejemplo, mientras se escribe en un input de tipo texto no hay evento change, pero cuando se pasa a otra sección de la aplicación entonces sí ocurre.

//CODIGO HTML DE REFERENCIA
<input id = "nombre" type="text">
<input id = "edad"   type="number">
//CODIGO JS
let input1  = document.getElementById("nombre");
let input2  = document.getElementById("edad");
input1.onchange = () => {console.log("valor1")};
input2.onchange = () => {console.log("valor2")};
*/

/*
EVENTO INPUT
Si queremos ejecutar una función cada vez que se tipea sobre el campo, conviene trabajar directamente con el evento input.

//CODIGO HTML DE REFERENCIA
<input id = "nombre" type="text">

//CODIGO JS
let input1  = document.getElementById("nombre")
input1.addEventListener(‘input’, () => {
     console.log(input1.value)
})
*/

/*
EVENTO SUBMIT
El evento submit se activa cuando el formulario es enviado. Normalmente se utiliza para validar el formulario antes de ser enviado al servidor o bien para abortar el envío y procesarlo con JavaScript.

//CODIGO HTML DE REFERENCIA
 <form id="formulario">
      <input type="text">
      <input type="number">
      <input type="submit" value="Enviar">
 </form>
//CODIGO JS
let miFormulario      = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    console.log("Formulario Enviado");    
}

*/