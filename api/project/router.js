const express = require('express');
const Project = require('./model')
const router = express.Router();

router.get('/',  (req, res,next) => {
Project.getAll()
.then((project) =>{
    res.json(project)
})
.catch(next)
})

router.post('/', (req, res, next) => {
    const project = req.body
    Project.insert(project)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(next)
})

module.exports = router

