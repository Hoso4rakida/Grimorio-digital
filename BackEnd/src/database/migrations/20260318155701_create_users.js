exports.up = function(knex) {
  return knex.schema.createTable("users", table => {
    table.increments("id").primary();
    table.text("name").notNullable();
    table.text("email").notNullable();
    table.text("password").notNullable();

    table.text("token");
    table.text("token_date");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("users");
};