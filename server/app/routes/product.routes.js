const express = require('express')
const { productController } = require('../controllers/product.controller')
const store = require('../middlewares/multer')
const router = express.Router()

//get All
router.route('/').get(productController.getAll)
// Get BY ID
router.route('/:id').get(productController.getById)
//add with images => Form action uploadmultiple form method post required !
router.route('/', store.array('images', 4)).post(productController.add)
// router.route.post('/', store.array('images', 4), productController.add)

module.exports = router
