const db = require("../../data/dbConfig")

function get(){
    return db('tasks')
}

async function insert() {
    
}



module.exports = {
    get,
    insert
}
