const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload = multer({dest: 'mysql://root:@localhost:3306/bandas'})
const cancionesController = require('../controllers/canciones.controller')


router.get('/', cancionesController.getSongs)

router.get('/:id', cancionesController.getSongsbyId)

router.post('/', upload.single('nombre'), cancionesController.createSongs)

router.put('/:id', upload.single('nombre'),  cancionesController.updateSongs)

router.delete('/:id', cancionesController.deleteSongs)



module.exports = router