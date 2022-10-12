const express = require('express')
const { productController } = require('../controllers/product.controller')
const store = require('../middlewares/multer')
const router = express.Router()

//get All
router.route('/').get(productController.getAll)
// GetById
router.route('/:id').get(productController.getById)
//Add
//add with images => Form action uploadmultiple form method post required !
router.route('/', store.array('images', 4)).post(productController.add)
// router.route.post('/', store.array('images', 4), productController.add)
//edit
router.route('/:id', store.array('images', 4)).put(productController.edit)
//delete
router.route('/:id').delete(productController.delete)
module.exports = router
