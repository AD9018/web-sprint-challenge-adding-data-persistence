const express = require('express');
const Resources = require('./model')
const router = express.Router();

router.get('/',  (req, res,next) => {
    Resources.getAll()
    .then((resource) =>{
        res.json(resource)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
    const resource = req.body
    Resources.insert(resource)
    .then(resource => {
        res.status(201).json(resource)
    })
    .catch(next)
})








module.exports = router
