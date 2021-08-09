var express = require('express');
var app = express();



async function findAllRows(req, res) {
    const query = 'select c.nombre curso , es.nombre estudiante\n' +
        'from  estudiante_curso ac\n' +
        'left join estudiantes  es  using(id_estudiante)\n' +
        'left join cursos c using(id_curso)\n' +
        'order by  es.nombre DESC \n' +
        'limit 2'

    try {
        const sequelize = require('./conexion.js');
        const result = await  sequelize.query(query,  {type: sequelize.QueryTypes.SELECT})
        console.log(result)
        res.status(200).json({result})
    } catch (e) {
        res.status(500)
        console.log(e)
    }
}




app.get('/estudiantes',  findAllRows)


app.listen(3000, function () {
    console.log('Sistema armado en el puerto 3000!');
});
