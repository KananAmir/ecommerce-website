const express = require('express')
const { brandController } = require('../controllers/brand.controller')
const brandValidation = require('../validation/brand.validation')

const router = express.Router()

// getAll
router.route('/').get(brandController.getAll)
//add
router.route('/').post(brandValidation, brandController.add)
//getbyId
router.route('/:id').get(brandController.getById)
//delete
router.route('/:id').delete(brandController.delete)
//edit
router.route('/:id').put(brandValidation, brandController.edit)

module.exports = router
