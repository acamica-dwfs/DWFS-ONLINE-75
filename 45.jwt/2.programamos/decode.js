//npm install express
const express = require('express');

//npm install jsonwebtoken
const jwt = require('jsonwebtoken');

const app = express();

const original = [{
    id: 1,
    nombre: "Dani"
}];

app.listen(4000, function () {
    console.log('aplicacion en el puerto 4000!');
});

var firma = "Hola Mundo";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibm9tYnJlIjoiRGFuaSIsImlhdCI6MTU5MzQ0ODg0Mn0.IWoYloklSNBMquJjmGkh8F3VKyTMrzZKgPdlrhRGPIM';

var decoded = jwt.verify(token, firma);
console.log(decoded);

