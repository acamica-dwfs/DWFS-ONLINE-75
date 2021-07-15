const express = require('express');
const router = express.Router();
const telefonos = require("../telefonos.json").telefonos; // importando los datos en telefono.json


/* GET users listing. */
router.get('/', (req, res, next) =>  {
    res.status(200).send({mensaje: 'Listado de Telefonos', respuesta: telefonos});
});

// crea un nuevo telefono
router.post('/',  (req, res)  =>{
  if (!req.body.marca || !req.body.modelo) {
    res.status(400).send({mensaje: 'El campo nombre y habitantes son requeridos'});
  } else {
    telefonos.push(req.body);
    res.status(201).send({ mensaje: 'celular creado', respuesta: celular})
  }
});

router.put("/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let  buscador  =  telefonos.filter( elementos =>  elementos.id === id);
  buscador[0].modelo  =  buscador[0].modelo +" acamica";
  res.status(200).send( {respuesta : "ok", id : buscador});
})


module.exports = router;
