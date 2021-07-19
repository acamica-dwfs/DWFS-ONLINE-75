const express = require("express");
const app  = express();
const port = 3000;

/**
 *  validar el usuario
 */
const middlewareGlobal =  (req, res, next) => {
    let {usuario, password} =  req.query;
    if(usuario !== 'yaz' || password !== '12345' ){
        res.status(400).send({ status :  false ,  msg : "login  incorrecto"})
    } else {
        next();
    }
}

const middlewareEspefico = (req, res, next) => {
    console.log(" hola, como estan  ?");
    next();
}


app.use(middlewareGlobal); //  global

app.get("/login", (req, res) => {
    res.status(200).send({"ok" :  true})
})

app.get('/', middlewareEspefico , (req, res) => {
    res.send(" hola acamica");
})

app.listen(port , () => {
    console.log("iniciando servidor en el puerto : " + port);
})

