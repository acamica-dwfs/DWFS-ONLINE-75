const sequelize = require('../conexion')


const createBandas = async (req, res) =>{
    const { nombre, Nº_integrantes, fecha_start, fecha_end, pais, URLimg } = req.body

    let arrayInsertBandas = [`${nombre}`, `${Nº_integrantes}`, `${fecha_start}`, `${fecha_end}`, `${pais}`, `${URLimg}`]

    try {
        const banda = await sequelize.query('INSERT INTO bandas(nombre, Nº_integrantes, fecha_start, fecha_end, pais, URLimg) VALUES( ?, ?, ?, ?, ?, ?)',
        {replacements: arrayInsertBandas , type: sequelize.QueryTypes.INSERT })
        res.status(201).json({banda})
    } catch (error) {
        console.log(`error en la inserción ${error}`)
        res.status(500).json({error})
    }
}

const getBandas = async (req, res) =>{

    try {
        const result = await sequelize.query(`SELECT * FROM bandas`, {type: sequelize.QueryTypes.SELECT})
        console.log(result)
        res.status(200).json({result})
    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}

const getBandasById = async (req, res) =>{

    try {
        const result = await sequelize.query(`SELECT * FROM bandas 
        WHERE id_banda = ${req.params.id}`, 
        {type: sequelize.QueryTypes.SELECT})

        console.log(result)
        res.status(200).json({result})
    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}

const updateBandas = async (req, res) =>{
    const { nombre, Nº_integrantes, fecha_start, fecha_end, pais, URLimg } = req.body

    try {
        const result = await sequelize.query(`UPDATE bandas 
        SET nombre = "${nombre}",  Nº_integrantes = "${Nº_integrantes}", 
        fecha_start = "${fecha_start}",  fecha_end = "${fecha_end}", 
        pais = "${pais}, URLimg = "${URLimg}" WHERE id_banda = ${req.params.id}`,

        { type: sequelize.QueryTypes.INSERT })

        console.log(result)
        res.status(204).json({
            message: 'album actulizado'
    })

    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}

const deleteBandas = async (req, res) =>{
    
    try {
        const result = await sequelize.query(`DELETE FROM bandas WHERE id_banda = ${req.params.id}`)
        res.status(204).json({
            message: 'banda eliminada',
            result
        })
    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}


exports.createBandas = createBandas
exports.getBandas = getBandas
exports.updateBandas = updateBandas
exports.deleteBandas = deleteBandas
exports.getBandasById = getBandasById