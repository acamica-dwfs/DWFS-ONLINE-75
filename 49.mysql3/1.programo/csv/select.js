var express = require('express');
var app = express();
const sequelize = require('./conexion.js');


async function findAllRows() {
   /* const query = 'SELECT  es.nombre , es.edad , c.nombre \n' +
        'FROM  estudiante_curso ec\n' +
        'left join estudiantes es   using(id_estudiante) \n' +
        'left join  cursos c  using(id_curso)\n' +
        'order by c.nombre  desc \n' +
        'limit 3';*/

    const  query  = 'select c.nombre curso , es.nombre estudiante\n' +
        'from  estudiante_curso ac\n' +
        'left join estudiantes  es  using(id_estudiante)\n' +
        'left join cursos c using(id_curso)\n' +
        'order by  es.nombre DESC \n' +
        'limit 2';

    sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
        .then(function (productos) {
            console.log(productos);
        }).catch( e => {
            console.log("error  en la insercion " + e)
        })
}

findAllRows();


app.listen(3000, function () {
    console.log('Sistema armado en el puerto 3000!');
});
