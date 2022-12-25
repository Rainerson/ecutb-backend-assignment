require('dotenv').config()
const port = process.env.API_PORT 
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')


//middleware
app.use(cors())
app.use(express.urlencoded({extended : true})) 
app.use(bodyParser.json())

const initMongodb = require('./mongodb_server')
initMongodb()

const productsController = require('./controllers/productsController3')
app.use('/api/products', productsController)

app.listen(port, () => console.log('webapi is running on '+port))
