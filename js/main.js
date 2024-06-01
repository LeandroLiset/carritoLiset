const items = [

    {
        id: "amstel",
        titulo: "Amstel Lager",
        imagen: "./resources/Cervezas/amstellager.webp",
        precio: 10,
        ml: "500 ml",
        categoria: {
            nombre: "Cervezas",
            id: "cervezas"
        },
    },

    {
        id: "budweiser",
        titulo: "Budweiser",
        imagen: "./resources/Cervezas/budweiser.webp",
        precio: 10,
        ml: "500 ml",
        categoria: {
            nombre: "Cervezas",
            id: "cervezas"
        },
    },

    {
        id: "imperial",
        titulo: "Imperial Lager",
        imagen: "./resources/Cervezas/imperiallager.webp",
        precio: 10,
        ml: "500 ml",
        categoria: {
            nombre: "Cervezas",
            id: "cervezas"
        },
    },

    {
        id: "quilmes",
        titulo: "Quilmes",
        imagen: "./resources/Cervezas/quilmes.webp",
        precio: 10,
        ml: "500 ml",
        categoria: {
            nombre: "Cervezas",
            id: "cervezas"
        },
    },

    {
        id: "schneider",
        titulo: "Schenider",
        imagen: "./resources/Cervezas/schneider.webp",
        precio: 10,
        ml: "500 ml",
        categoria: {
            nombre: "Cervezas",
            id: "cervezas"
        },
    },

    {
        id: "stella",
        titulo: "Stella Artois",
        imagen: "./resources/Cervezas/stellaartois.webp",
        precio: 10,
        ml: "500 ml",
        categoria: {
            nombre: "Cervezas",
            id: "cervezas"
        },
    },

    {
        id: "warsteiner",
        titulo: "Warsteiner",
        imagen: "./resources/Cervezas/warsteiner.webp",
        precio: 10,
        ml: "500 ml",
        categoria: {
            nombre: "Cervezas",
            id: "cervezas"
        },
    },

    {
        id: "beefeater",
        titulo: "Beefeater",
        imagen: "./resources/Gin/beefeater.webp",
        precio: 10,
        ml: "750 ml",
        categoria: {
            nombre: "Gins",
            id: "gins"
        },
    },

    {
        id: "bombay",
        titulo: "Bombay",
        imagen: "./resources/Gin/bombay.webp",
        precio: 10,
        ml: "750 ml",
        categoria: {
            nombre: "Gins",
            id: "gins"
        },
    },

    {
        id: "botanist",
        titulo: "The Botanist",
        imagen: "./resources/Gin/botanist.webp",
        precio: 10,
        ml: "750 ml",
        categoria: {
            nombre: "Gins",
            id: "gins"
        },
    },

    {
        id: "bulldog",
        titulo: "Bulldog",
        imagen: "./resources/Gin/bulldog.webp",
        precio: 10,
        ml: "750 ml",
        categoria: {
            nombre: "Gins",
            id: "gins"
        },
    },

    {
        id: "tanqueray",
        titulo: "Tanqueray",
        imagen: "./resources/Gin/tanqueray.webp",
        precio: 10,
        ml: "750 ml",
        categoria: {
            nombre: "Gins",
            id: "gins"
        },
    },

    {
        id: "dvcatena",
        titulo: "D.V. Catena",
        imagen: "./resources/vinos/dvcatena.webp",
        precio: 10,
        ml: "750 ml",
        categoria: {
            nombre: "Vinos",
            id: "vinos"
        },
    },

    {
        id: "malamado",
        titulo: "Malamado",
        imagen: "./resources/vinos/malamado.webp",
        precio: 10,
        ml: "750 ml",
        categoria: {
            nombre: "Vinos",
            id: "vinos"
        },
    },

    {
        id: "rutini",
        titulo: "Rutini",
        imagen: "./resources/vinos/rutini.webp",
        precio: 10,
        ml: "750 ml",
        categoria: {
            nombre: "Vinos",
            id: "vinos"
        },
    },

    {
        id: "trumpeter",
        titulo: "Trumpeter",
        imagen: "./resources/Vinos/trumpeter.webp",
        precio: 10,
        ml: "750 ml",
        categoria: {
            nombre: "Vinos",
            id: "vinos"
        },
    },

    {
        id: "zuccardi",
        titulo: "Zuccardi",
        imagen: "./resources/Vinos/zuccardi.webp",
        precio: 10,
        ml: "750 ml",
        categoria: {
            nombre: "Vinos",
            id: "vinos"
        },
    },

    {
        id: "ballantines",
        titulo: "Ballantines",
        imagen: "./resources/Whiskies/ballantines.webp",
        precio: 10,
        ml: "750 ml",
        categoria: {
            nombre: "Whiskies",
            id: "whiskies"
        },
    },

    {
        id: "black-label",
        titulo: "Black Label",
        imagen: "./resources/Whiskies/blacklabel.webp",
        precio: 10,
        ml: "750 ml",
        categoria: {
            nombre: "Whiskies",
            id: "whiskies"
        },
    },

    {
        id: "glenffidich",
        titulo: "Glenffidich",
        imagen: "./resources/Whiskies/glenffidich.webp",
        precio: 10,
        ml: "750 ml",
        categoria: {
            nombre: "Whiskies",
            id: "whiskies"
        },
    },

    {
        id: "glenlivet",
        titulo: "Glenlivet",
        imagen: "./resources/Whiskies/glenlivet.webp",
        precio: 10,
        ml: "750 ml",
        categoria: {
            nombre: "Whiskies",
            id: "whiskies"
        },
    },

    {
        id: "jack-daniels",
        titulo: "Jack Daniels",
        imagen: "./resources/Whiskies/jackhoney.webp",
        precio: 10,
        ml: "750 ml",
        categoria: {
            nombre: "Whiskies",
            id: "whiskies"
        },
    },

]

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

cargarItems(items);

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


