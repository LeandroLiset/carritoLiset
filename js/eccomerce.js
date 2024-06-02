let itemsCarrito = localStorage.getItem("productos-carrito-liset");
itemsCarrito = JSON.parse(itemsCarrito);

const cVacio = document.querySelector("#c-vacio");
const cItems = document.querySelector("#c-items");
const cDividido = document.querySelector("#c-dividido");
const cComprado = document.querySelector("#c-comprado");
let botonEliminar = document.querySelectorAll(".carrito-eliminar");
const vaciarDelCarrito = document.querySelector("#carrito-vaciar")
const totalCarrito = document.querySelector("#total")
let comprarAhora = document.querySelector("#carrito-comprar");

function cargarItemsCarrito() {
    if (itemsCarrito && itemsCarrito.length > 0) {

        cVacio.classList.add("disabled");
        cItems.classList.remove("disabled");
        cDividido.classList.remove("disabled");
        cComprado.classList.add("disabled");

        cItems.innerHTML = "";

        itemsCarrito.forEach(item => {
            const div = document.createElement("div");
            div.classList.add("carrito-item");
            div.innerHTML = `
            <img class="carrito-imagen" src="${item.imagen}" alt="${item.titulo}">
         <div class="carrito-item-nombre">
             <small>Título</small>
             <h3>${item.titulo}</h3>
         </div>
         <div class="carrito-item-cantidad">
             <small>Cantidad</small>
             <p>${item.cantidad}</p>
         </div>
         <div class="carrito-item-ml">
             <small>Contenido x unidad</small>
             <p>${item.ml}</p>
         </div>
         <div class="carrito-item-precio">
             <small>Precio</small>
             <p>$${item.precio}</p>
         </div>
         <div class="carrito-item-subtotal">
             <small>Subtotal</small>
             <p>$${item.precio * item.cantidad}</p>
         </div>
         <button class="carrito-eliminar" id=${item.id}><i class="bi bi-trash3-fill"></i></button>
            `;
            cItems.append(div);

        })


    } else {

        cVacio.classList.remove("disabled");
        cItems.classList.add("disabled");
        cDividido.classList.add("disabled");
        cComprado.classList.add("disabled");

    }
    actualizarBotonEliminar();
    actualizarTotalCarrito();
}

cargarItemsCarrito();

function actualizarBotonEliminar() {
    botonEliminar = document.querySelectorAll(".carrito-eliminar");

    botonEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

function eliminarDelCarrito(e) {
    Toastify({
        text: "This is a toast",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () { } // Callback after click
    }).showToast();
    const idBoton = e.currentTarget.id;
    const index = itemsCarrito.findIndex(item => item.id === idBoton);
    itemsCarrito.splice(index, 1);
    cargarItemsCarrito();

    localStorage.setItem("productos-carrito-liset", JSON.stringify(itemsCarrito));
}

vaciarDelCarrito.addEventListener("click", vaciarCarrito);
function vaciarCarrito() {
    Swal.fire({
        title: "Estas seguro ?",
        icon: "question",
        html: "Se van a borrar tus productos.",
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: "si",
        cancelButtonText: "Cancelar",
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Tu carrito ha sido eliminado", "", "success");
            itemsCarrito.length = 0;
            localStorage.setItem("productos-carrito-liset", JSON.stringify(itemsCarrito));
            cargarItemsCarrito();

        }
    });

}

function actualizarTotalCarrito() {
    const totalCarrito = itemsCarrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0)
    total.innerText = `$${totalCarrito}`
}

comprarAhora.addEventListener("click", comprarCarrito);
function comprarCarrito() {
    itemsCarrito.length = 0;
    localStorage.setItem("productos-carrito-liset", JSON.stringify(itemsCarrito));

    cVacio.classList.add("disabled");
    cItems.classList.add("disabled");
    cDividido.classList.add("disabled");
    cComprado.classList.remove("disabled");
}