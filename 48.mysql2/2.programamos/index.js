const express = require('express');
const app = express();
const sequelize = require('./conexion.js');


async function findAllRows() {

    sequelize.query("SELECT * FROM  estudiantes", { type: sequelize.QueryTypes.SELECT })
        .then( estudiantes => {
            console.log(estudiantes);
        }).catch(error =>{
            console.log("a ocurrido un error" + error)
    })
}

findAllRows();


app.listen(3000, function () {
    console.log('Sistema armado en el puerto 3000!');
});
