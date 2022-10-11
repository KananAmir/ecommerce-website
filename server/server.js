const express = require('express')
const connectDb = require('./app/config/database')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

connectDb()

const categoryRouter = require('./app/routes/category.routes')
const brandRouter = require('./app/routes/brand.routes')

app.use('/category', categoryRouter)
app.use('/brand', brandRouter)
app.listen(8080, () => {
  console.log('server running on 8080 !')
})
