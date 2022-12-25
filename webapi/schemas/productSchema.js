const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    tag: {type: String},
    name: {type: String, required: true},
    description: {type: String},
    category: {type: String},
    price: {type: Number, required: true},
    rating: {type: Number},
    imageName: {type: String, required: true}

})

module.exports = mongoose.model("products", productSchema)