const express = require('express')
const router = express.Router()
const signupTemplate = require('../models/RoutesModel')

router.post('/signup', (request, response) =>{
    createdUser = new signupTemplate({
        username:request.body.username,
        email:request.body.email,
        password:request.body.password,
        country:request.body.country
    })
    createdUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})

router.get('/', (request, response) =>{
    signupTemplate.find()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})


module.exports = router