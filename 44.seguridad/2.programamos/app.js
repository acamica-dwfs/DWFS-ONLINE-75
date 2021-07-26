const express = require('express');
const app = express();
const port = 3000;
const rateLimit = require("express-rate-limit");

const contactos = [
    { "id": 1, "nombre": "Dani" },
    { "id": 2, "nombre": "Hugo" },
    { "id": 3, "nombre": "Juan" }
];

//En una hora , Maximo 5 Request
const checkLimite = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 5,
    message:
        "Supero el limite de 5 requests por hora, espera una hora para volver a comenzar"
});

app.use(checkLimite); // global


app.get("/contactos", (req, res) => {

    respuesta = {
        error: false,
        codigo: 200,
        mensaje: 'Listado de Telefonos',
        respuesta: contactos
    };
    res.status(200).send(respuesta);
});

app.listen(port, () => {
    console.log(`Server listeting on port ${port}`)
});
