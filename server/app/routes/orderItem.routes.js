const express = require('express')
const { orderItemController } = require('../controllers/order.item.controller')
const brandValidation = require('../validation/brand.validation')

const router = express.Router()

// getAll
router.route('/').get(orderItemController.getAll)
//add
router.route('/').post(orderItemController.add)
//getbyId
router.route('/:id').get(orderItemController.getById)
//delete
router.route('/:id').delete(orderItemController.delete)
//edit
router.route('/:id').put(orderItemController.edit)

module.exports = router
