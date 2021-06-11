const express = require('express');
const Task = require('./model')
const router = express.Router();

router.get('/',  (req, res,next) => {
    Task.getAll()
    .then((task) =>{
        res.json(task)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
const task = req.body
Task.insert(task)
.then(task => {
    res.status(201).json(task)
})
.catch(next)
})

module.exports = router
