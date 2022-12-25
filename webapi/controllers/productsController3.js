const express = require('express')
const controller = express.Router()
const productSchema = require('../schemas/productSchema')

controller.route('/').get(async (req, res) => {
    const list = []
    const products = await productSchema.find()
    if (!products) {
        res.status(400).json()
    } else {
        for (let product of products) {
            list.push({
                articleNumber: product._id,
                tag: product.tag,
                name: product.name,
                description: product.description,
                category: product.category,
                price: product.price,
                rating: product.rating,
                imageName: product.imageName,
            })
        }
        res.status(200).json(list)
    }

})


controller.route('/:tag')
    .get(async (req, res) => {
        const list = []
        const products = await productSchema.find({ tag: req.params.tag })
        if (!products) {
            res.status(400).json()
        } else {
            for (let product of products) {
                list.push({
                    articleNumber: product._id,
                    tag: product.tag,
                    name: product.name,
                    description: product.description,
                    category: product.category,
                    price: product.price,
                    rating: product.rating,
                    imageName: product.imageName,
                })
            }
            res.status(200).json(list)
        }

    })


controller.route('/:tag/:take')
    .get(async (req, res) => {
        const list = []
        const products = await productSchema.find({ tag: req.params.tag }).limit(req.params.take)
        if (!products) {
            res.status(400).json()
        } else {
            for (let product of products) {
                list.push({
                    articleNumber: product._id,
                    tag: product.tag,
                    name: product.name,
                    description: product.description,
                    category: product.category,
                    price: product.price,
                    rating: product.rating,
                    imageName: product.imageName,
                })
            }
            res.status(200).json(list)
        }
    })


controller.route('/product/detailed/:articleNumber')
    .get(async (req, res) => {
        const product = await productSchema.findById(req.params.articleNumber)
        if (!product) {
            res.status(400).json()
        }
        else {
            res.status(200).json({
                articleNumber: product._id,
                tag: product.tag,
                name: product.name,
                description: product.description,
                category: product.category,
                price: product.price,
                rating: product.rating,
                imageName: product.imageName,
            })
        }
    })

controller.route('/').post(async (req,res) => {
    const {tag, name, description, category, price, rating, imageName} = req.body
    if (!name || !price || !imageName) {
        res.status(400).json({text: 'name, price and image-name is required'})
    }
    const product_exists = await productSchema.findOne({name})
    if(product_exists) {
        res.status(409).json({text: 'product already exists'})
    } else {
        const product = await productSchema.create({
            tag, name, description, category, price, rating, imageName
        })
        if (product){
            res.status(201).json({text: 'success'})
        } else {
            res.status(400).json({text: 'something went wrong'})
        }
    }
})

controller.route('/:articleNumber').delete(async (req, res) => {
    if (!req.params.articleNumber) {
        res.status(400).json({ text: 'articlenumber missing' })
    } else {
        const product = await productSchema.findById(req.params.articleNumber)
        if (product) {
            await productSchema.remove(product)
            res.status(200).json({ text: 'product was deleted' })
        } else {
            res.status(404).json({ text: 'something went wrong' })
        }
    }

})

controller.route('/:articleNumber').patch(async (req, res) => {
    const product = await productSchema.findById(req.params.articleNumber)
    const updated = req.body
    const option = { new: true}
    if (product) {
        await productSchema.findByIdAndUpdate(product, updated, option)
        res.status(201).json({ text: 'product was updated' })
    } else {
        res.status(404).json({ text: 'something went wrong' })
    }

})


module.exports = controller