let express = require('express')
let cookieParser = require('cookie-parser')
let bodyParser = require('body-parser')

let app = express()
let router = express.Router()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

router.all('/', function(req, res) {
  console.log(req)
  res.send({
    url: req.url || {},
    method: req.method || {},
    headers: req.headers || {},
    cookies: req.cookies || {},
    params: req.params || {},
    query: req.query || {}
  })
})

app.use('/', router)

app.listen('9999', () => {
  console.log('print-request server success')
})
