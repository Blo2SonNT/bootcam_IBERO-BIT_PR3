const Producto = require("../models/Producto");

exports.obtenerProductos = async(req, res) => {
    console.log('te estoy dando los productos de la base de datos')
    try {
        const productos = await Producto.find()
        res.json(productos)
    } catch (error) {
        onsole.log(error)
        res.status(500).send('Existe un problema.... comuniquese con el administrador')
    }
}


exports.crearProducto = async(req, res) => {
    console.log('creando el producto')
    try {
        let producto;
        producto = new Producto(req.body)
        await producto.save()
        res.send(producto)
    } catch (error) {
        console.log(error)
        res.status(500).send('Existe un problema.... comuniquese con el administrador')
    }
}


exports.actualizarProducto = async(req, res) => {
    console.log('actualizando su pinche producto')

    const { nombre, precio, categoria, proveedor } = req.body

    let producto = await Producto.findById(req.params.id)

    if (!producto) {
        res.status(404).json({ msg: 'No existe el producto especificado' })
    }

    producto.nombre = nombre
    producto.precio = precio
    producto.categoria = categoria
    producto.proveedor = proveedor

    producto = await Producto.findOneAndUpdate({ _id: req.params.id }, producto, { new: true })
    res.json(producto)
}


exports.borrarProducto = async(req, res) => {
    console.log('si claro... yo le borro el producto')
    try {
        let producto = await Producto.findById(req.params.id)

        if (!producto) {
            res.status(404).json({ msg: 'No existe el producto especificado' })
        }

        await Producto.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: "el producto se elimino correctamente" })
    } catch (error) {
        console.log(error)
        res.status(500).send('Existe un problema.... comuniquese con el administrador')
    }
}


exports.obtenerProductoEspecifico = async(req, res) => {
    console.log('aqui esta el producto que no le quiero vender');
    try {
        let producto_especifico = await Producto.findById(req.params.id)
        if (!producto_especifico) {
            res.status(404).json({ msg: "El producto solicitado no existe" })
        }
        res.json(producto_especifico)

    } catch (error) {
        console.log(error)
        res.status(500).send('Existe un problema.... comuniquese con el administrador')
    }
}