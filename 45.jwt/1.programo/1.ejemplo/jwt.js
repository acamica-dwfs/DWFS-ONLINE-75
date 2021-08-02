const jwt = require('jsonwebtoken');
const express =  require("express")
const app =  express()
require('dotenv').config()
const KEY = process.env.LLAVE;
app.use(express.json());

const validarAdmin = (req, res, next) => {
    // VERIFICAR  Y DECODIFICARTOKENS
    const jwtToken = req.headers["authorization"]; //BEARER_TOKEN AHFDJASHDFKHAKFHAS
    if(!jwtToken) {
        return res.status(401).json({msg: "usuario no valido"})
    }
    const jwtClient = jwtToken.split(" ")[1];

    jwt.verify(jwtClient,KEY, (err, decoded)  => {
        if(err) {
            return res.status(401).json({msg: "token invalido"})
        }
        if(decoded  && decoded.type !== "admin"){
            return res.status(401).json({msg: "es usuario es invalido para ejecutar estacacion"})
        }
        next();
    });
}

// GENERAMOS TOKEN
app.post("/login", (req, res) => {
    const {user , pass } = req.body
    if( user === "yaz"  && pass === "1234"){
        const json =  {  user : user, type : "admin"}
        const token = jwt.sign(json, KEY, { expiresIn: '1h' });
        res.status(200).json({ token : token})
    } else {
    res.status(404).json({ msg: "login invalido"})
   }
})

app.get("/ordenes", validarAdmin,  (req, res) =>{
    res.status(200).json({ msg: "todas las ordenes"})
})

app.listen(3000);
