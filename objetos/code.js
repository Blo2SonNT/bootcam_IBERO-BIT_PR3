let database_catalogo = {
    "productos": [{
            id: "1",
            nombre: "coca cola",
            precio: 3200,
            img: "https://m.media-amazon.com/images/I/5156FefjlqL._SX466_.jpg",
            recetas: ["azucar", "sal", "coca"]
        },
        {
            id: "2",
            nombre: "pan relleno",
            precio: 5000,
            img: "https://images-gmi-pmc.edge-generalmills.com/7473bc85-283c-4129-b77f-827eb2bd0c1d.jpg",
            recetas: ["futas", "levadura", "amor"]
        },
        {
            id: "3",
            nombre: "chocorramo",
            precio: 1800,
            img: "https://m.media-amazon.com/images/I/31Zecn03TUS.jpg",
            recetas: ["harina", "levadura", "chocolate"]
        },
        {
            id: "4",
            nombre: "Gomitas",
            precio: 1200,
            img: "https://www.super.com.co/media/TRULULU%20FRESITAS%2012B%20X%2090G%20V2.jpg",
            recetas: ["cartilago de animales", "glucosa"]
        },
        {
            id: "5",
            nombre: "Jarabe para la tos",
            precio: 40500,
            img: "https://copservir.vtexassets.com/arquivos/ids/765023-800-auto?v=637950273636400000&width=800&height=auto&aspect=true"
        },
        {
            id: "6",
            nombre: "Espinaca",
            precio: 7000,
            img: "https://elpoderdelconsumidor.org/wp-content/uploads/2021/08/espinacas.jpg"
        }
    ]
}
var lista_recetas = ''
database_catalogo.productos.forEach((producto_tienda) => {
    if (producto_tienda.recetas) {
        producto_tienda.recetas.forEach(receta_producto => {
            lista_recetas += `
                    <li class="list-group-item">${receta_producto}</li>
                    `
        });
    }
    document.querySelector("#catalogo").innerHTML += `
        <div class="col">
            <div class="card">
                <div class="imagen-carta d-flex justify-content-center align-items-center">
                    <img src="${producto_tienda.img}" class="card-img-top w-100">
                </div>
                <div class="card-body d-flex justify-content-center align-items-center flex-column">
                    <h2 class="card-title">${producto_tienda.nombre}</h2>
                    <h3 class="card-text">${producto_tienda.precio}</h3>
                    <ul class="list-group">${lista_recetas}</ul>
                    <button class="btn btn-warning fw-bold" onclick="agregarProducto('${producto_tienda.nombre}', ${producto_tienda.precio}, '${producto_tienda.img}')">Agregar al carrito</button>
                </div>
            </div>
        </div>
    `
    lista_recetas = ''
});


//function agregarProducto(id_producto) {
//     if(localStorage.getItem("carrito") == null){
//         localStorage.setItem("carrito", id_producto)

//     }else{
//         var data_carrito = localStorage.getItem("carrito")
//     }
// }


function agregarProducto(nombre, precio, img) {
    if (localStorage.getItem("carrito") == null) {
        let data_primer_producto = [{ nombre_producto: nombre, precio_producto: precio, imagen_producto: img }]
        localStorage.setItem("carrito", JSON.stringify(data_primer_producto))
    } else {
        var data_carrito = localStorage.getItem("carrito")
        data_carrito = JSON.parse(data_carrito)
        let data_producto_nuevo = { nombre_producto: nombre, precio_producto: precio, imagen_producto: img }
        data_carrito.push(data_producto_nuevo)
        localStorage.setItem("carrito", JSON.stringify(data_carrito))
    }
}

function resumen_carrito() {
    let productos_del_carrito = localStorage.getItem("carrito")
    productos_del_carrito = JSON.parse(productos_del_carrito)
    document.querySelector("#resumen_carro").innerHTML = ''
    productos_del_carrito.forEach((element) => {
        console.log(element)
        document.querySelector("#resumen_carro").innerHTML += `
        <tr>
            <td>
                <img src="${element.imagen_producto}" class="w-50">
            </td>
            <th>${element.nombre_producto}</th>
            <td>${element.precio_producto}</td>
        </tr>
        `
    });
}