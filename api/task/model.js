const db = require("../../data/dbConfig");

async function getAll() {
  const tasks = await db("tasks");
  return tasks.map((task) => {
    return {
      ...task,
      task_completed: task.task_completed ? true : false,
    };
  });
}

async function getById(task_id) {
  const task = await db("tasks").where({ task_id }).first()
  return {...task, task_completed: task.task_completed ? true : false}
  
}

async function insert(task) {
    const [id] = await db("tasks").insert(task);

    return getById(id)
}

module.exports = {
  getAll,
  getById,
  insert,
};

