const express = require('express')
const controller = express.Router()
let products = require('../data/simulated_database')


controller.param('articleNumber', (req, res, next, articleNumber) => {
    req.product = products.find(x => x.articleNumber == articleNumber)
    next()
})

controller.param('tag', (req, res, next, tag) => {
    req.products = products.filter(x => x.tag == tag)
    next()
})

// endast artikelnummer

controller.route('/product/:articleNumber')
.get((req,res) => {
    if (req.product != undefined) {
        res.status(200).json(req.product)
    } else {
        res.status(404).json()
    }
})

// de med samma tag

controller.route('/:tag')
.get((req,res) => {
    if (req.products != undefined) {
        res.status(200).json(req.products)
    } else {
        res.status(404).json()
    }
})

// de med samma tag samt antal

controller.route('/:tag/:take')
.get((req,res) => {
    let list = []

    for (let i=0; i < req.params.take; i++) {
        list.push(req.products[i])
    }

    res.status(200).json(list)
})


controller.route('/').get((req,res) => {
    res.status(200).json(products)
})




module.exports = controller