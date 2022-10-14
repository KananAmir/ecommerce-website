const express = require('express')
const { orderController } = require('../controllers/order.controller')
const orderValidation = require('../validation/order.validation')
const router = express.Router()

//get All
router.route('/').get(orderController.getAll)
// GetbyId
router.route('/:id').get(orderController.getById)
//add
router.route('/').post(orderValidation, orderController.add)
//edit
router.route('/:id').put(orderValidation, orderController.edit)
//delete
router.route('/:id').delete(orderController.delete)
module.exports = router
