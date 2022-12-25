const mongoose = require('mongoose')
require('dotenv').config()

const initMongodb = async () => {
    const con = await mongoose.connect(process.env.MONGODB_URI)
    console.log(`MongoDb is runnnig at ${con.connection.host}`)
}

module.exports = initMongodb