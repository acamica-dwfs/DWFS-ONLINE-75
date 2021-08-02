const mongose = require("./conexion");
const express = require('express');
const app = express();

const menu  =  mongose.model("plato", {
    plato : String,
    valor : Number,
    tipo_de_plato : String
})

app.get("/crear", (req, res) => {
   let plato = {
       plato : "bandeja paisa",
       valor : 20000,
       tipo_de_plato : "mixto"
   }

   const  result  =  new menu(plato);
   result.save().then( response => {
       console.log(" producto creado");
       res.status(201).json({ status : true ,  resultado  : plato})
   }).catch( e => {
       console.log( "ha ocurrido un error ");
       res.status(400).json({ status : false ,  resultado  : e})
   });
})

app.listen(3000,  () => {
    console.log('listening on 3000')
})

