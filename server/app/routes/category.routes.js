const express = require('express')
const { categoryController } = require('../controllers/category.controller')
const categoryValidation = require('../validation/category.validation')

const router = express.Router()

// getAll
router.route('/').get(categoryController.getAll)
//add
router.route('/').post(categoryValidation, categoryController.add)
//getbyId
router.route('/:id').get(categoryController.getById)
//delete
router.route('/:id').delete(categoryController.delete)
//edit
router.route('/:id').put(categoryValidation, categoryController.edit)

module.exports = router
