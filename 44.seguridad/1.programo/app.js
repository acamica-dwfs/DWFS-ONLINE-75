const express = require('express');
const app = express();
const port = 3000;
//npm install --save helmet
const helmet = require('helmet');
//npm install body-parser
var bodyParser = require('body-parser');
//npm install --save express-rate-limit
const rateLimit = require("express-rate-limit");

app.use(helmet());

/*Creo un nuevo middleware,para desactivar la cabecera con el método app.disable() 
para que los atacantes no puedan utilizar esta cabecera 
(que está habilitada de forma predeterminada) */

app.disable('x-powered-by');

/*
Este otro middleware que inyectaría el parser de JSON con un límite de tamaño de 100kb
*/
app.use(bodyParser.json({ limit: '100kb' }));

 //el valor de req.hostname se obtiene de la cabecera X-Forwarded-Host y el valor de req.ip se optiene de X-Forwarded-For
app.set('trust proxy', function (ip) {
    //elejimos un rango de ip 
    if (ip === '127.0.0.1' || ip === '123.123.123.123') return true; 
    else return false;
});


const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100 // limita cada IP a 100 solicitudes por ventanas
});

//Aplicamos el middleware para las restricciones
app.use(limiter);

app.listen(port, () => {
    console.log(`Server listeting on port ${port}`)
});

//Limito los requests a 150 por hora  papor algun ataque de fuerza bruta
/*
limiter({
    path: '/api/action',
    method: 'get',
    lookup: ['connection.remoteAddress'],
    total: 150,
    expire: 1000 * 60 * 60
})
*/



app.get('/api/action', function (req, res) {
    res.send(200, 'ok')
})