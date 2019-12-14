
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('friends').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('friends').insert([
        {id: 1, name: 'John Doe'},
        {id: 2, name: 'Jane Smith'}
      ]);
    });
};
