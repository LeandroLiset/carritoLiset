let items = [];

async function fetchItems() {
    try {
        const response = await fetch("./js/items.json");
        if (!response.ok) {
            throw new Error('La respuesta de la red no fue correcta: ' + response.statusText);
        }
        const data = await response.json();
        items = data;
        cargarItems(items);
    } catch (error) {
        console.error('Ha habido un problema con tu operación de fetch:', error);
    }
}

fetchItems();

const contenedorItems = document.querySelector("#contenedor-item");
const botonesNav = document.querySelectorAll(".boton-nav");
const tituloPrincipal = document.querySelector("#titulo");
let agregarBotones = document.querySelectorAll(".agregar-item");
const numeroCarrito = document.querySelector("#numero-carrito");

function cargarItems(itemsSeleccionados) {
    contenedorItems.innerHTML = "";

    itemsSeleccionados.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("item");
        div.innerHTML = `
        <img class="imagen-item" src="${item.imagen}" alt="${item.titulo}">
        <div class="detalles-item">
            <h3 class="titulo-item">${item.titulo}</h3>
            <h5 class="contenido-ml">${item.ml}</h5>
            <p class="precio-item">$${item.precio}</p>
            <button class="agregar-item" id="${item.id}">Agregar</button>
        </div>
        `
        contenedorItems.append(div);
    })

    actualizarAgregarBotones();
}



// EVENTOS

botonesNav.forEach(boton => {
    boton.addEventListener("click", (e) => {
        
        botonesNav.forEach(boton => boton.classList.remove("active"))
        e.currentTarget.classList.add("active");

        if(e.currentTarget.id != "todos"){
            const itemCategoria = items.find(item => item.categoria.id === e.currentTarget.id);
            titulo.innerText = itemCategoria.categoria.nombre;
            const itemsSeleccionados = items.filter(item => item.categoria.id === e.currentTarget.id);
            cargarItems(itemsSeleccionados);
        } else{
            titulo.innerText = "Todos los productos";
            cargarItems(items);
        }
        
    })
});



function actualizarAgregarBotones(){
    agregarBotones = document.querySelectorAll(".agregar-item");

    agregarBotones.forEach(boton => {
        boton.addEventListener("click", agregarCarrito);
    })
}



let itemsCarrito = [];

let itemsCarritoLocalStorage = localStorage.getItem("productos-carrito-liset");

if (itemsCarritoLocalStorage) {
    itemsCarrito = JSON.parse(itemsCarritoLocalStorage);
    actualizarNumeroCarrito();
} else {
    itemsCarrito = [];
}


function agregarCarrito(e) {
    Toastify({
        text: "Agregado al carrito.",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        style: {
          background: "linear-gradient(to right, #418fe9, #679edd)",
        },
        onClick: function(){} 
      }).showToast();
    const idBoton = e.currentTarget.id;
    const itemAgregado = items.find(item => item.id === idBoton);
    
    if(itemsCarrito.some(item => item.id === idBoton)) {
        const index = itemsCarrito.findIndex(item => item.id === idBoton);
        itemsCarrito[index].cantidad++;
    } else {
        itemAgregado.cantidad = 1;
        itemsCarrito.push(itemAgregado);
    }
    
    actualizarNumeroCarrito();

    localStorage.setItem("productos-carrito-liset", JSON.stringify(itemsCarrito));

}

function actualizarNumeroCarrito() {
    let nuevoNumeroCarrito = itemsCarrito.reduce((acc, item) => acc + item.cantidad, 0);
    numeroCarrito.innerText = nuevoNumeroCarrito;  
      
}
