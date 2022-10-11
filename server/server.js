const express = require('express')
const connectDb = require('./app/config/database')
const { categoryService } = require('./app/controllers/category.controller')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

connectDb()

const categoryRouter = require('./app/routes/category.routes')

app.use('/category', categoryRouter)

app.listen(8080, () => {
  console.log('server running on 8080 !')
})
