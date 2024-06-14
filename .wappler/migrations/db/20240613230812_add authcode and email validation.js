
exports.up = function(knex) {
  return knex.schema
    .table('user', async function (table) {
      table.string('auth_code');
      table.datetime('validated');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('user', async function (table) {
      table.dropColumn('auth_code');
      table.dropColumn('validated');
    })
};
