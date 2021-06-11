const db = require("../../data/dbConfig")


 function getAll(){
   return db('resources')
    
}

async function getById(resource_id){
    const resource = await db('resources').where({resource_id}).first()
    return {...resource}

}

async function insert(resource) {
    const [id] = await db('resources').insert(resource)

    return getById(id)


}

module.exports = {
    getAll,
    getById,
    insert
}
