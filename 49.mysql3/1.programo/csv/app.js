const csv = require('csv-parser')
const fs = require('fs')
const sequelize = require('./conexion.js');
const results = [];

fs.createReadStream('data.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        console.log("valores desde  csv:")
        //console.log(results);
        results.forEach(elemento =>  {
            let array_insert = [elemento.NAME , elemento.AGE , elemento.EMAIL];
            sequelize.query('INSERT INTO`estudiantes`(`nombre`, `edad`, `email`) VALUES( ?, ?, ?)',
                { replacements: array_insert, type: sequelize.QueryTypes.SELECT }
            ).then(function (estudiantes) {
                console.log(estudiantes)
            }).catch( e => {
                console.log("error  en la insercion " + e)
            })
           /* console.log("NOMBRE: " +elemento.NAME ," EDAD :"+ elemento.AGE ,
                "EMAIL"+ elemento.EMAIL)*/
        })
    });
