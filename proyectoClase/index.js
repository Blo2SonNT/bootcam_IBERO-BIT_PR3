const express = require('express')
const conectarDB = require('./config/db')
const app = express()

conectarDB()

// app.get('/', (req, res) => {
//     res.send('Hola mundo')
// })

app.use(express.json())

app.use('/api', require('./routes/routes'))


app.listen(4000, () => {
    console.log("Proyecto ejecutandose en http://localhost:4000")
})