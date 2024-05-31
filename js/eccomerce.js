const itemsCarrito = JSON.parse(localStorage.getItem("productos-carrito-liset"));

const cVacio = document.querySelector("#c-vacio");
const cItems = document.querySelector("#c-items");
const cDividido = document.querySelector("#c-dividido");
const cComprado = document.querySelector("#c-comprado");

if (itemsCarrito) {

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

}

