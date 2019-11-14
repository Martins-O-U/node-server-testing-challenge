exports.up = function(knex) {
    return knex.schema.createTable("friends", table =>{
        table.increments();
        table.string("name")
          .notNullable()
          .unique();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("friends");
  };