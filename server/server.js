const express = require('express')
const cors = require('cors')
const connectDb = require('./app/config/database')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const PORT = process.env.PORT;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(express.static(__dirname + '/public'))
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
connectDb()

//routes
const categoryRouter = require('./app/routes/category.routes')
const brandRouter = require('./app/routes/brand.routes')
const productRouter = require('./app/routes/product.routes')

app.use('/category', categoryRouter)
app.use('/brand', brandRouter)
app.use('/product', productRouter)

app.listen(8080, () => {
  console.log(`server running on 8080 !`)
})
