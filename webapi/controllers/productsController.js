const express = require('express')
const controller = express.Router()
let products = require('../data/simulated_database')

//middleware - den kommer in på routerna men innan den kör get körs denna
controller.param('articleNumber', (req,res,next,articleNumber) => {
    req.product = products.find(product => product.articleNumber == articleNumber)
    //next för att den ska gå vidare från middleware
    next()
})

// flera användare /products
controller.route('/')
.post((req, res) => {

    let product = {
        articleNumber: (products[products.length -1])?.articleNumber > 0 ? (products[products.length -1])?.articleNumber + 1 : 1, 
        name: req.body.name,
        category:  req.body.category,
        price:  req.body.price,
        imageName: req.body.imageName
    }

    products.push(product)
    res.status(201).json(product)
})
.get((req,res) => {
    res.status(200).json(products)
})


// 1 användare /products/1
controller.route('/:articleNumber')
.get((req,res) => {
    if (req.product != undefined) {
        res.status(200).json(req.product)
    } else {
        res.status(404).json()
    }
})
.put((req,res) => {
    if (req.product != undefined) {
        products.forEach(product => {
            if (product.articleNumber == req.product.articleNumber) {
                product.name = req.body.name ? req.body.name : product.name
                product.category = req.body.category ? req.body.category : product.category
                product.price = req.body.price ? req.body.price : product.price
                product.imageName = req.body.imageName ? req.body.imageName : product.imageName
            }
        })
        res.status(200).json(req.product)
    } else {
        res.status(404).json()
    }
})
.delete((req,res) => {
    if (req.product != undefined) {
        products = products.filter(product => product.articleNumber !== req.product.articleNumber)
        res.status(204).json()
    } else {
        res.status(404).json()
    }
})




module.exports = controller