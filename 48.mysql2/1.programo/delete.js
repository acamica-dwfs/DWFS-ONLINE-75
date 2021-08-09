var express = require('express');
var app = express();
const sequelize = require('./conexion.js');

async function findAllRows() {
    sequelize.query('DELETE FROM restaurant WHERE ID_RESTO = ?',
        { replacements: [2] }
    ).then(result =>{
        console.log(result)
    }).catch( e => {
        console.log("error  en la insercion " + e)
    })
}

findAllRows();

app.listen(3000, function () {
    console.log('Sistema armado en el puerto 3000!');
});
