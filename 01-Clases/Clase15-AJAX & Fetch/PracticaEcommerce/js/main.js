const carrito = []
let productos;
//LLamada a la API
const API_URL = 'https://api.mercadolibre.com/';
//Endpoints
const endpointProducto = 'sites/MLA/search';


//Traer productos de la base de datos
const traerProductosDB = () => {
    fetch(API_URL+endpointProducto+'?nickname=AXA.SHOP')
    .then((response) => response.json())
    .then((data) => {
        productos = data.results;
        console.log(productos);
        generarCardsEnHTML(productos);
    })
}
//Generacion de las cards
const generarCardsEnHTML = (arrayDeProductos) => {
    let cards = ``;
    arrayDeProductos.forEach((producto) => {
        cards += `    <div class="col mb-5">
        <div class="card h-100">
            <!-- Product image-->
            <img class="card-img-top" src="${producto.thumbnail}" alt="..." />
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">$ ${producto.price}</h5>
                    <!-- Product price-->
                    ${producto.title}
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"><a onclick="agregarAlCarrito" class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
            </div>
        </div>
    </div>`
    });

    document.getElementById('card-container').innerHTML = cards;
}

//Llamado a la funcion de genrerar cards
traerProductosDB();
