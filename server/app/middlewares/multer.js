const multer = require('multer')

// set storage

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'uploads')
  },
  filename: function (req, file, callback) {
    //image.jpg
    var ext = file.originalname.substr(file.originalname.lastIndexOf('.'))
    callback(null, file.filename + '-' + Date.now() + ext)
  },
})

module.exports = store = multer({ storage: storage })
