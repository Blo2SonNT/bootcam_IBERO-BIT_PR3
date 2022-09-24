const Pelicula = require("../models/Peliculas");

exports.crearPelicula = async(req, res) => {
    try {
        let dataPeliucla;

        dataPeliucla = new Pelicula(req.body);
        await dataPeliucla.save();
        res.send(dataPeliucla);

    } catch (error) {
        res.status(500).send('Hay un error, comuniquese con el administrador...')
    }
}