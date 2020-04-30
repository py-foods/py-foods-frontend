/*
const express = require('express')
const serverStatic = require('serve-static')
const path = require('path')
const app = express()
app.use('/', serverStatic(path.join(__dirname, '/dist')))
const port = process.env.port || 5000
app.listen(port)
console.log('listerning on port: ' + port)
*/
const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()

app.use('/', serveStatic(path.join(__dirname, '/dist')))

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) { res.sendFile(path.join(__dirname, '/dist/index.html')) })

const port = process.env.PORT || 8080
app.listen(port)
console.log('app is listening on port:' + port)
