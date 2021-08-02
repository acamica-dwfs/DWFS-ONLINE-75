const mongoose = require('./conexion.js');
const express = require('express');
const app = express();
app.use(express.static(__dirname + 'conexion.js'));

app.listen(3000, function () {
    console.log('listening on 3000')
})


const platos = mongoose.model('peliculas', {
    plato: String,
    precio: String,
    tipo_de_plato: String,
});

//Listado 
platos.find().then(function (resultado) {

    console.log(resultado);
});