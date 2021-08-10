const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload = multer({dest: 'mysql://root:@localhost:3306/bandas'})
const albumesController = require('../controllers/albumes.controller')


router.get('/', albumesController.getAlbum)

router.get('/:id', albumesController.getAlbumById)

router.post('/', upload.single('nombre'), albumesController.createAlbum)

router.put('/:id', upload.single('nombre'), albumesController.updateAlbum)

router.delete('/:id', albumesController.deleteAlbum)


module.exports = router