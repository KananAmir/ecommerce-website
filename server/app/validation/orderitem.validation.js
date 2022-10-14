const { body, validationResult } = require('express-validator')

const orderItemValidation = [
  body('productId').notEmpty().withMessage('product id is required'),
  body('count').notEmpty().withMessage('count field is required !'),
  body('totalPrice').notEmpty().withMessage('totalPrice field is required !'),
  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.status(422).json({ message: errors.array()[0].msg })
    }
    next()
  },
]

module.exports = orderItemValidation
