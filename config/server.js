const port = process.env.PORT

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
// const allowCors = require('./cors')
const cors = require('cors');
const queryParser = require('express-query-int')

server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())
// server.use(allowCors)
server.use(queryParser())
server.use(cors());

server.listen(port, function() {
  console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server
