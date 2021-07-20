const express = require("express");
const app  = express();
const port = 3000;

app.use(express.json()); //middleware global para soportar envio de json desde el cliente
/**
 *  validar el usuario
 */
const  middlewareEspefico  =  (req, res, next) => {
    let {usuario, password} =  req.body;
    if(usuario !== 'yaz' || password !== '12345' ){
        return  res.status(401).send({ status :  false ,  msg : "login  incorrecto"})
    }
    next();
}

const middlewareGlobal = (req, res, next) => {
    console.log(" hola, como estan  ?");
    next();
}

app.post("/login",middlewareEspefico, (req, res) => {
    res.status(200).send({"ok" :  true ,  msg : "login  correcto"})
})


app.use(middlewareGlobal); //  global



app.get('/' , (req, res) => {
    res.send(" hola acamica");
})

app.listen(port , () => {
    console.log("iniciando servidor en el puerto : " + port);
})

