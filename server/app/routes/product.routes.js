const express = require('express')
const { productController } = require('../controllers/product.controller')
const store = require('../middlewares/multer')
const productValidation = require('../validation/product.validation')
const router = express.Router()

//get All
router.route('/').get(productController.getAll)
// GetById
router.route('/:id').get(productController.getById)
//Add
router.post(
  '/',
  store.array('images', 5),
  productValidation,
  productController.add,
)
//edit
router.put(
  '/:id',
  store.array('images', 5),
  productValidation,
  productController.edit,
)
//delete
router.route('/:id').delete(productController.delete)
module.exports = router
