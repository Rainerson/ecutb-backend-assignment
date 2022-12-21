const port = process.env.PORT || 5000
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

//middleware
app.use(cors())
app.use(express.urlencoded({extended : true})) // för att ta emot mer avancerade grejer
app.use(bodyParser.json())

const productsController = require('./controllers/productsController2')
app.use('/api/products', productsController)

app.listen(port, () => console.log('webapi is running on 5000'))
