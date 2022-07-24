//Primero se busca el elemento que queremos escuchar
const button = document.getElementById('button');

//Luego setear el buscador de eventos
//  button.onclick = () => {
//      console.log('Holaaa')
// }

//Otra forma de hacer esto es con el addEventListener
// button.addEventListener('click', () => {
//     console.log('Holaaaaa')
// })
/*Este tiene dos parametros, el primero es el evento que quiere escuchar y el otro es la funcion que se va a ejecutar cuando se haya llamado a ese elemento del dom*/

//Login

button.onclick = () => {
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;


    console.log(`Hola ${user}, te has logueado correctamente, tu contraseña tiene ${password.length} caracteres.`)
}