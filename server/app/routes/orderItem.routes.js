const express = require('express')
const { orderItemController } = require('../controllers/order.item.controller')
const orderItemValidation = require('../validation/orderitem.validation')
const router = express.Router()

// getAll
router.route('/').get(orderItemController.getAll)
//add
router.route('/').post(orderItemValidation, orderItemController.add)
//getbyId
router.route('/:id').get(orderItemController.getById)
//delete
router.route('/:id').delete(orderItemController.delete)
//edit
router.route('/:id').put(orderItemValidation, orderItemController.edit)

module.exports = router
