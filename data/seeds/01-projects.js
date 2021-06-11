
exports.seed = function(knex) {
  
      return knex('projects').insert([
        {
          project_id: 1,
          project_name: 'todoList1',
          project_description:"one with a todo list is prepared",
          project_completed:false},
        {
          project_id: 2,
          project_name: 'todoList2',
          project_description:"one with a todo list is prepared",
          project_completed:false},
        {
          project_id: 3,
          project_name: 'todoList3',
          project_description:"one with a todo list is prepared",
          project_completed:false}
      ]);
    
};
