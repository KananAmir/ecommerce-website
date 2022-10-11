const express = require('express')
const { get } = require('express/lib/response')
const { categoryService } = require('../services/categoryService')
const categoryValidation = require('../validation/categoryValidation')

const router = express.Router()

router.route('/').get(categoryService.getAll)

router.route('/:id').get(categoryService.getById)

router.route('/').post(categoryValidation, categoryService.add)

module.exports = router
