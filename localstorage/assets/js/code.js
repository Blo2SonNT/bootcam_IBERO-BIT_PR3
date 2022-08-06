var contador_productos = 1

function total_productos_badge() {
    var total_productos = ''
    if (localStorage.getItem("contador") != null) {
        total_productos = localStorage.getItem("contador")
        document.querySelector("#numero_articulos").innerHTML = `
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            ${total_productos}
            <span class="visually-hidden">unread messages</span>
        </span>`
    }
}

function agregar_producto_carrito(nombre, precio) {
    if (localStorage.getItem("contador") == null) {
        localStorage.setItem("contador", 1)
    } else {
        contador_productos = localStorage.getItem("contador")
        contador_productos = parseInt(contador_productos)
        contador_productos = contador_productos + 1
        localStorage.setItem("contador", contador_productos)
    }
    localStorage.setItem(`producto${contador_productos}`, nombre)
    localStorage.setItem(`precio${contador_productos}`, precio)
    document.querySelector("#numero_articulos").innerHTML = `
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            ${contador_productos}
            <span class="visually-hidden">unread messages</span>
        </span>
    `
}

setTimeout(() => {
    total_productos_badge()
}, 2000);

function total_compra(){
    var contador = localStorage.getItem("contador")
    var total_compra = 0
    var precio_producto = ''
    for (let cantidad_productos = 1; cantidad_productos <= contador; cantidad_productos++) {
        precio_producto = localStorage.getItem(`precio${cantidad_productos}`)
        total_compra = parseInt(precio_producto) + total_compra
    }
    alert(`El valor total a pagar es: ${total_compra}`)
}