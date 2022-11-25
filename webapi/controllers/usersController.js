const express = require('express')
const controller = express.Router()
let users = require('../data/simulated_database')

//middleware - den kommer in på routerna men innan den kör get körs denna
controller.param('id', (req,res,next,id) => {
    req.user = users.find(user => user.id == id)
    //next för att den ska gå vidare från middleware
    next()
})

// flera användare /users
controller.route('/')
.post((req, res) => {

    let user = {
        id: (users[users.length -1])?.id > 0 ? (users[users.length -1])?.id +1 : 1, //hämta id, om id större än 0 så lägg till en annars sätt 1
        firstName: req.body.firstName,
        lastName:  req.body.lastName,
        email:  req.body.email,
        password: req.body.password
    }

    users.push(user)
    res.status(201).json(user)
})
.get((req,res) => {
    res.status(200).json(users)
})


// 1 användare /users/1
controller.route('/:id')
.get((req,res) => {
    if (req.user != undefined) {
        res.status(200).json(req.user)
    } else {
        res.status(404).json()
    }
})
.put((req,res) => {
    if (req.user != undefined) {
        users.forEach(user => {
            if (user.id == req.user.id) {
                user.firstName = req.body.firstName ? req.body.firstName : user.firstName
                user.lastName = req.body.lastName ? req.body.lastName : user.lastName
                user.email = req.body.email ? req.body.email : user.email
            }
        })
        res.status(200).json(req.user)
    } else {
        res.status(404).json()
    }
})
.delete((req,res) => {
    if (req.user != undefined) {
        users = users.filter(user => user.id !== req.user.id)
        res.status(204).json()
    } else {
        res.status(404).json()
    }
})




module.exports = controller