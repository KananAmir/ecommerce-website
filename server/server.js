const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
app.use(cors)
app.use(bodyParser.json())

app.listen(8080, () => {
  console.log('server running on 8080')
})
