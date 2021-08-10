const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload = multer({dest: 'mysql://root:@localhost:3306/bandas'})
const bandasController = require('../controllers/bandas.controller')


router.get('/', bandasController.getBandas)

router.get('/:id', bandasController.getBandasById)

router.post('/', upload.single('URLimg'), bandasController.createBandas)

router.put('/:id', bandasController.updateBandas)

router.delete('/:id', bandasController.deleteBandas)


module.exports = router