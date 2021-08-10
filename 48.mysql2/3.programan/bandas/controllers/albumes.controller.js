const sequelize = require('../conexion')

const createAlbum = async (req, res) =>{

    const { nombre_album, banda, fecha_publicacion} = req.body

    let arrayInsertAlbum = [`${nombre_album}`, `${banda}`, `${fecha_publicacion}`]

    try {
        const result = await sequelize.query('INSERT INTO albumes(nombre_album, banda, fecha_publicacion) VALUES( ?, ?, ?)',
        {replacements: arrayInsertAlbum , type: sequelize.QueryTypes.INSERT })
        console.log(result);
        res.status(201).json({result})

    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }

}

const getAlbum = async (req, res) =>{
    try {
        const result = await sequelize.query('SELECT * FROM albumes', {type: sequelize.QueryTypes.SELECT})
        console.log(result)
        res.status(200).json({result})
    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}

const getAlbumById = async (req, res) =>{
    try {
        const result = await sequelize.query(`SELECT * FROM albumes 
        WHERE id_album = ${req.params.id}`, 
        {type: sequelize.QueryTypes.SELECT})

        console.log(result)
        res.status(200).json({result})
    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
    
}

const updateAlbum = async (req, res) =>{
    const { nombre_album, banda, fecha_publicacion } = req.body

    try {
        const result = await sequelize.query(`UPDATE albumes 
        SET nombre_album = "${nombre_album}",  
        banda = "${banda}", fecha_publicacion = "${fecha_publicacion}"  
        WHERE id_album = ${req.params.id}`,
        { type: sequelize.QueryTypes.INSERT })

        console.log(result)
        res.status(204).json({
            message: 'album actulizado'
    })

    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}

const deleteAlbum = async (req, res) =>{
    try {
        const result = await sequelize.query(`DELETE FROM albumes WHERE id_album = ${req.params.id}`)
        res.status(204).json({
            message: 'album eliminado',
            result
        })
    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}


exports.createAlbum = createAlbum
exports.getAlbum = getAlbum
exports.updateAlbum = updateAlbum
exports.deleteAlbum = deleteAlbum
exports.getAlbumById = getAlbumById