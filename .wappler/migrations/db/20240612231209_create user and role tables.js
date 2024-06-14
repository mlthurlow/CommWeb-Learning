
exports.up = function(knex) {
  return knex.schema
    .createTable('user', async function (table) {
      table.increments('user_id');
      table.string('first_name');
      table.string('last_name');
      table.string('email');
      table.string('password');
      table.datetime('date_signup').defaultTo(knex.fn.now());
    })
    .createTable('role', async function (table) {
      table.increments('role_id');
      table.string('role_user_id');
      table.string('role', 1);
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('role')
    .dropTable('user')
};
