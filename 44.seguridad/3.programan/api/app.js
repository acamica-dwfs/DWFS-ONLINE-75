const express =  require("express")
const helmet = require("helmet");
const cors = require('cors')
const app  = express()
const port  = 3000
const jwt =  require("jsonwebtoken")
require('dotenv').config()
const llave = process.env.LANG

app.use(cors())

app.use(express.json())

app.post('/login', (req, res) => {
    try {
        const {user, pass} = req.body;
        console.log(user, pass)
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
  // validacion
})

app.post('/registro', (req, res) => {
    // validacion
    res.status(200).json({msg: "usuario creado"})
})


app.listen(port, ()=> {
    console.log("iniciando aplicacion en el puerto"+ port)
})