const express = require("express")
const app = express()
const PORT = 3000
let telefonos = []

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/telefono', (req, res) => {
    res.status(200).json({msg: "primera peticion get con json", data: telefonos})
})

app.post("/telefono", (req, res) => {
      let {nombre , modelo} = req.body
      if(!nombre || !modelo){
          return res.status(400).json({msg: " datos faltantes"})
      }
      nombre =  nombre  +  " prueba"
      const elemento = {nombre : nombre ,  modelo: modelo}
      telefonos.push(elemento)
      res.status(201).json({ msg: "telefono creado" , data :  nombre })
})


app.listen(PORT, () => {
    console.log("aplicacion funcionando en el localhost:" + PORT)
})
