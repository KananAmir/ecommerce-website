const { body, validationResult } = require('express-validator')

const productValidation = [
  body('name').notEmpty().withMessage('Product name is required'),
  body('desc').notEmpty().withMessage('Product Desc field is required !'),
  body('price').notEmpty().withMessage('Product Price is required !'),
  body('stock').notEmpty().withMessage('Stock field is required !'),
  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.status(422).json({ message: errors.array()[0].msg })
    }
    next()
  },
]

module.exports = productValidation
