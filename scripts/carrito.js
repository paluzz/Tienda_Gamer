function agregarProducto(event) {
    var producto = {
        id: event.target.getAttribute('data-id'),
        nombre: event.target.getAttribute('data-nombre'),
        precio: event.target.getAttribute('data-precio')
    };

    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();
}


function eliminarProducto(idProducto) {
    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito = carrito.filter(function (producto) {
        return producto.id !== idProducto;
    });
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarCarrito();
}

function actualizarCarrito() {
    var carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    var listaCarrito = document.getElementById("lista-carrito");
    listaCarrito.innerHTML = "";
    for (var i = 0; i < carrito.length; i++) {
        var producto = carrito[i];
        var li = document.createElement("li");
        li.textContent = producto.nombre + " - $ " + producto.precio;
        listaCarrito.appendChild(li);
    }
}