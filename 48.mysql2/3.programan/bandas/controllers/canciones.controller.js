const sequelize = require('../conexion')

const createSongs = async (req, res) =>{
    const { nombre, tiempo_duracion, album, banda, fecha_public } = req.body

    let arrayInsertCanciones = [`${nombre}`, `${tiempo_duracion}`, `${album}`, `${banda}`, `${fecha_public}`]

    try {
        const result = await sequelize.query('INSERT INTO canciones (nombre, tiempo_duracion, album, banda, fecha_public) VALUES( ?, ?, ?, ?, ?)',
        {replacements: arrayInsertCanciones , type: sequelize.QueryTypes.INSERT })
        res.status(201).json({result})
    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}

const getSongs = async (req, res) =>{
    try {
        const result = await sequelize.query(`SELECT * FROM canciones`, {type: sequelize.QueryTypes.SELECT})
        console.log(result)
        res.status(200).json({result})
    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}

const getSongsbyId = async (req, res) =>{
    try {
        const result = await sequelize.query(`SELECT * FROM canciones 
        WHERE id_cancion = ${req.params.id}`, 
        {type: sequelize.QueryTypes.SELECT})

        console.log(result)
        res.status(200).json({result})
    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}

const updateSongs = async (req, res) =>{
    const { nombre, tiempo_duracion, album, banda, fecha_public } = req.body

    try {
        const result = await sequelize.query(`UPDATE canciones SET nombre = "${nombre}",  
        tiempo_duracion = "${tiempo_duracion}", album = "${album}",  banda = "${banda}", 
        fecha_public = "${fecha_public}"  
        WHERE id_cancion = ${req.params.id}`,

        { type: sequelize.QueryTypes.INSERT })
        console.log(result)
        res.status(204).json({
            message: 'album actulizado'
    })

    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}

const deleteSongs = async (req, res) =>{
    try {
        const result = await sequelize.query(`DELETE FROM canciones WHERE id_cancion = ${req.params.id}`)
        res.status(204).json({
            message: 'album eliminado',
            result
        })
    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}


exports.createSongs = createSongs
exports.getSongs = getSongs
exports.updateSongs = updateSongs
exports.deleteSongs = deleteSongs
exports.getSongsbyId = getSongsbyId