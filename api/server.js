const express = require('express');
const helmet = require('helmet')

const ProjectRouter = require("./project/router")
const ResourceRouter = require("./resource/router")
const TaskRouter = require("./task/router")

const server = express()

server.use(helmet())
server.use(express.json())

server.use('/api/projects',ProjectRouter)
server.use('/api/resource',ResourceRouter)
server.use('/api/task',TaskRouter)



server.use((err, req, res, next) =>{
res.status(500).json({message:err.message, stack:err.stack})
})

module.exports = server