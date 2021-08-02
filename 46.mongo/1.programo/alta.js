const mongoose = require('./conexion.js');
const express = require('express');
const app = express();

app.listen(3000, function () {
    console.log('listening on 3000')
})

const pelicula = mongoose.model('peliculas', {
    titulo: String,
    director: String,
    genero: String,
    ano: Date
} );


let nuevaPelicula = {
    titulo: 'Hause',
    director: "Steven Spielberg",
    genero:"Terror",ano:"1979"
}
const rsPelicula = new pelicula(nuevaPelicula);
rsPelicula.save().then(() => {
    console.log("   se ha insertado correctamente")
}).catch(e => {
    console.log( "ha ocurrido un error")
});
