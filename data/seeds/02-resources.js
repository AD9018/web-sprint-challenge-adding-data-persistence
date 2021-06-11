

exports.seed = function(knex) {
  
  return knex('resources').insert([
    {
      resource_id: 1,
      resource_name: 'website1',
      resource_description:"Different Websites but same info!"},
    {
      resource_id: 2,
      resource_name: 'website2',
      resource_description:"Different Websites but same info!"},
    {
      resource_id: 3,
      resource_name: 'website3',
      resource_description:"Different Websites but same info!"}
  ]);

};
