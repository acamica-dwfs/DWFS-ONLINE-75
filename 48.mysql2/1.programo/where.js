var express = require('express');
var app = express();
const sequelize = require('./conexion');


async function findAllRows() {
      sequelize.query('SELECT * FROM restaurant WHERE NOM_RESTO = ?',
        { replacements: ['Cocotte'], type: sequelize.QueryTypes.SELECT }
    ).then(function (projects) {
        console.log(" datos encontrados:")
        console.log(projects)
        return projects;
    }).catch( e => {
        console.log("error  en la insercion " + e)
    })
}

app.get( "/productos",    (req, res) => {
      sequelize.query('SELECT * FROM restaurant WHERE NOM_RESTO = ?',
          { replacements: ['test 1'], type: sequelize.QueryTypes.SELECT }
      ).then(function (projects) {
          console.log(" datos encontrados:")
          console.log(projects)
           res.status(200).json({ body: result})
      }).catch( e => {
          console.log("error  en la insercion " + e)
           res.status(400).json({  status: false})
      })
})

findAllRows()

app.listen(3000, function () {
    console.log('Sistema armado en el puerto 3000!');
});
