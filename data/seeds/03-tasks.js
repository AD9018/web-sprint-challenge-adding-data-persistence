
exports.seed = function(knex) {
  
  return knex('tasks').insert([
    {
      task_id: 1,
      task_description: 'The road is long but fruitful 1',
      task_notes:"Read Carefully!",
      task_completed:0,
      project_id:1
    },
    {
      task_id: 2,
      task_description: 'The road is long but fruitful 2',
      task_notes:"Read Carefully!",
      task_completed:0,
      project_id:2
    },
    {
      task_id: 3,
      task_description: 'The road is long but fruitful 3',
      task_notes:"Read Carefully!",
      task_completed:1,
      project_id:3
    }
  ]);

};
