const mongoose = require('mongoose')
require('dotenv').config({ path: 'config.env' })

const conectarDB = async() => {
    try {
        await mongoose.connect(process.env.CONEX_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Conexion exitosa")
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = conectarDB