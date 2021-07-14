const express = require('express')
const app = express()
const port = 3001

// iniciando el servidor
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

// req =  request = petcion generada por el cliente (aqui se  transporrtan los datos del body)
// res  = response  =   respuesta al cliente
app.get('/acamica', (req, res) => {
    res.send('Hello World!  acamica 47');
})
