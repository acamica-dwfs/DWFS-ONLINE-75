const express = require("express");
const jwt = require('jsonwebtoken');
require('dotenv').config()
const app = express();
const port = 4000
require('dotenv').config()
const llave = process.env.LANG

app.use(express.json());

// autorizacion
const validarToken =  (req, res, next) => {
    const jwtToken = req.headers["authorization"];
    if(!jwtToken) {
        return res.status(401).json({msg: "usuario no valido"})
    }
    const jwtClient = jwtToken.split(" ")[1];
     // autorizacion mitoken
    jwt.verify(jwtClient,llave , (error, decoded) => {
        if(error) {
            return res.status(401).json({msg: "token invalido"})
        }
        console.log(decoded)
        if(!decoded.estudiante){
            return res.status(401).json({msg: "estudiante no valido"})
        }
        req.body.user = decoded.usuario
        next()
    })
}

app.post("/api/v1/acamica/profile",validarToken,  (req, res) => {
    const {user} =  req.body
    return res.status(200).json({msg: "hola  " + user});
});

app.post("/api/v1/acamica/registro",validarToken,  (req, res) => {
    return res.status(200).json({msg: "hol, registroa"});
});

// autenticacion
app.post("/api/v1/acamica/login", (req, res) => {
    try {
        const {user, pass} = req.body;
        if (user !== process.env.USER_ACAMICA || pass !== process.env.PASS_ACAMICA) {
            return res.status(401).json({message: "Invalid user or password"});
        }
        const usuario = {
            usuario: user,
            estudiante: true
        }
        const jwtToken = jwt.sign(usuario, llave, {expiresIn: '1h'});
         res.status(200).json({token: jwtToken});
    } catch (e){
        return res.status(400).json({msg: "ha ocurrido un error"});
    }
});


app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});