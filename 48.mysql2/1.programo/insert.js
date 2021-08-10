const sequelize = require('./conexion.js'); // importamos la conexion
const  express =  require("express")
const app  =  express()
const port  = 4000

app.use(express.json())

app.get("/user", async (req, res) => {
    try {
        const{ID_USER , NOM_RESTO} = req.body
        // validaciones

        // elementos a insertar
        let array_insert = [ '1', 'acamica', 'test 1', 'test 1', 'Prueba', 'Foto.jpg', '2021-08-08 00:00:00', '0'];
        const data  = await sequelize.query('INSERT INTO`restaurant`(`ID_USER`, `NOM_RESTO`, `ADRESSE`, `TELEPHONE`, `DESCRIPTIF`, `IMAGE`, `DATE_DERNIERE_MODIF`, `ACTIF`) ' +
            'VALUES( ?, ?, ?, ?, ?, ?, ?, ?)',
            { replacements: array_insert, type: sequelize.QueryTypes.INSERT }
        )
        console.log(data)
        res.status(201).json({msq: "restaurante insertado",  data: data})
    } catch (e) {
        console.log( "ha ocurrido un error" + e)
        res.status(400).json({msq: "ha ocurrido un error nsertado"})
    }
})

app.listen(port, () => {
    console.log( "servidor iniciado")
})
