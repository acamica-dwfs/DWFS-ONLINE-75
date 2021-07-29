const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.listen(1000, function () {
    console.log('aplicacion en el puerto 1000!');
});

const firma = "Hola Mundo";

const token = jwt.sign({
    id:1,
    nombre: "Dani",
    tipo: "admin"
}, firma ,{
    expiresIn: 20
});

console.log(token)
