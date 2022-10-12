const express = require('express')
const { productController } = require('../controllers/product.controller')

const router = express.Router()

//get All
router.route('/').get(productController.getAll)
// Get BY ID
router.route('/:id').get(productController.getById)
//add
router.route('/').post(productController.add)

module.exports = router
