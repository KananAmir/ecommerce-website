const express = require('express')
const { get } = require('express/lib/response')
const { categoryService } = require('../controllers/category.controller')
const categoryValidation = require('../validation/category.validation')

const router = express.Router()

// getAll
router.route('/').get(categoryService.getAll)
//add
router.route('/').post(categoryValidation, categoryService.add)
//getbyId
router.route('/:id').get(categoryService.getById)
//delete
router.route('/:id').delete(categoryService.delete)
//edit
router.route('/:id').put(categoryService.edit)

module.exports = router
