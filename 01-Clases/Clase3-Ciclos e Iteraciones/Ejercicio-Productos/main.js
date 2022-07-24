const productos = [
    'producto 1',
    'producto 2',
    'producto 3',
    'producto 4',
    'producto 5',
]
for(let i = 0; i <3; i++) {
document.write(`
        <div class="col-2 mb-5">
        <div class="card h-100">
            <!-- Product image-->
            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">Fancy Product
                    ${productos[i]}
                    </h5>
                    <!-- Product price-->
                    $16.000 - $18.500
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
            </div>
        </div>
    </div>
`)
}
//510000