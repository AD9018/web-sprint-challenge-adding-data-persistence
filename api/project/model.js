const db = require("../../data/dbConfig")


async function getAll(){
    const projects = await db('projects')
    return projects.map(project => {
        return{
            ...project,
            project_completed: project.project_completed ? true : false
        }
    })
}

async function getById(project_id) {
    const project = await db('projects').where({project_id}).first()
    return {...project, project_completed: project.project_completed ? true : false}
}

async function insert(project) {
    const [id] = await db('projects').insert(project)

    return getById(id)
}

module.exports = {
    getAll,
    getById,
    insert
}
