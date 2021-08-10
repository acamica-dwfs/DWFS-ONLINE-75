var express = require('express');
var app = express();
const sequelize = require('./conexion.js');


app.get("/listar", async (req, res) => {
   try {
       const  data = await sequelize.query("SELECT * FROM restaurant limit 3", { type: sequelize.QueryTypes.SELECT })
       res.status(200).json({data : data})
   }catch (e){
       console.log( "ha ocurrido un error" + e)
       res.status(400).json({msq: "ha ocurrido un error nsertado"})
   }
})

app.listen(4000, function () {
    console.log('Sistema armado en el puerto 3000!');
});
