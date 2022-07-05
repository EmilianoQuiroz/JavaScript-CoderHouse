const carrito = [];
const arrayDeProductos = [{id:1, titulo:"Curso JavaScript", precio: 20000},
                          {id:1, titulo:"Curso JavaScript", precio: 20000},
                          {id:2, titulo:"Curso JavaScript", precio: 20000},
                          {id:3, titulo:"Curso JavaScript", precio: 20000},
                          {id:4, titulo:"Curso JavaScript", precio: 20000},
                          {id:5, titulo:"Curso JavaScript", precio: 20000},
                          {id:6, titulo:"Curso JavaScript", precio: 20000},
                          {id:7, titulo:"Curso JavaScript", precio: 20000},
                          {id:8, titulo:"Curso JavaScript", precio: 20000},
                          {id:9, titulo:"Curso JavaScript", precio: 20000}];
                          /*Emulacion de un comportamiento dinamico que se adapta 
                          a la n cantidad de elementos que recibamos de una base de 
                          datos, servidor, etc.*/

let acumulador = ``;
arrayDeProductos.forEach((producto) => {
    acumulador += `
    <div class="col mb-5">
        <div class="card h-100">
            <!-- Product image-->
            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">${producto.titulo}</h5>
                    <!-- Product price-->
                    $${producto.precio}
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"><a onclick="agregarAlCarrito(${producto.id})" class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
            </div>
        </div>
    </div>`
});

document.getElementById('card-container').innerHTML = acumulador

function agregarAlCarrito(id) {
    //Primero buscamos el producto en la base de datos de prueba
    const resultado = arrayDeProductos.find((producto) => producto.id === id);
    //console.log(resultado);
    //Agregamos el producto al carrito
    carrito.push(resultado);
    //Calculamos el total de los productos en el carrito
    const totalCarrito = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    //Mostramos en el html la actualizacion de los valores cambiados
    document.getElementById('carrito-elementos').innerHTML = carrito.length + " -$" + totalCarrito;
    //console.log(carrito);
}


