const express = require('express');
const router = express.Router();
const contactos = require("../contactos.json").contactos; // importando los datos en contactos.json


const middleValidarPost = (req, res, next) => {
    // que no exista !nombre   y que no  este en el listado status: 409
    const {nombre, apellido, email} =  req.body;
    if(!nombre || !apellido || !email) {
        res.status(400).json("  json mal formado");
    }
    let result  =  contactos.find(element => element.email ===  email);
    if(result) {
        res.status(409).json("  el usuario ya existe");
    }
    next();

};

const middleValidarGet = (req, res, next) => {
    console.log(" middleware  de validar get");
    next();
}

/* GET users listing. */
router.get('/', middleValidarGet , (req, res, next) =>  {
    res.status(200).send({mensaje: 'Listado de contactos', respuesta: contactos});
});

router.get('/:id', (req, res) => {
    const {id}=  req.params;
    let result  = contactos.find( element  => element.id === parseInt(id));
    if(!result) {
        res.status(404).json({"message" :  " el usuario no existe"});
    }
    res.status(200).json(result);
})

// crea un nuevo
router.post('/' ,  middleValidarPost,(req, res)  => {
    contactos.push(req.body);
    res.status(201).json("usuario creado");
});


//  http://localhost:3000?usuario)yaz&pass=123  -->   const  {usuario, pass} = req.query;


// http://localhost:3000/personas/1/yaz    -->    const {id, nombre} =  req.params;  enviar datos en el path

// http://localhost:3000/personas         -->        const {usuario, password} =  req.body;
// datos en el body :   { usuario : yaz  pass: 123}


module.exports = router;
