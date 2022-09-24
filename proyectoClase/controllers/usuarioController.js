const Usuario = require("../models/Usuario");

exports.crearUsuario = async(req, res) => {
    try {
        let dataUsuario;

        dataUsuario = new Usuario(req.body);
        await dataUsuario.save();
        res.send(dataUsuario);

    } catch (error) {
        res.status(500).send('Hay un error, comuniquese con el administrador...')
    }
}