const express = require('express')
const { orderController } = require('../controllers/order.controller')
const router = express.Router()

//Get All
router.route('/').get(orderController.getAll)
//GetById
router.route('/:id').get(orderController.getById)
//Add
router.route('/').post(orderController.add)
//Edit
router.route('/:id').put(orderController.edit)
//Delete
router.route('/:id').delete(orderController.delete)
module.exports = router
