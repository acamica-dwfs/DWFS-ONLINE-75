const mongoose = require('./conexion.js');
const express = require('express');

const app = express();

app.listen(3000, function () {
    console.log('listening on 3000')
})

const platos = mongoose.model('peliculas', {
    plato: String,
    precio: String,
    tipo_de_plato: String,
});


let nuevaPelicula = {
    plato: 'frutillas', 
    precio: "123$", 
    tipo_de_plato: "postre"}
const rsPelicula = new platos(nuevaPelicula);
rsPelicula.save();    
