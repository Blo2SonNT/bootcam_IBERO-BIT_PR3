const mongoose = require('mongoose');
require('dotenv').config({ path: 'config.env' });

const conectarDB = async() => {
    try {
        await mongoose.connect(process.env.CONEXION_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Base de datos conectada")
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = conectarDB