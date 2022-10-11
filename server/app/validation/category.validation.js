const { body, validationResult } = require('express-validator')

const categoryValidation = [
  body('name').notEmpty().withMessage('Category name is required'),

  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.status(422).json({ message: errors.array()[0].msg })
    }
    next()
  },
]

module.exports = categoryValidation
