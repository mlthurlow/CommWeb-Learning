
exports.up = function(knex) {
  return knex.schema
    .table('pagecontent', async function (table) {
      table.string('pagetype', 1);
      table.datetime('event_end');
      table.integer('creator_id');
      table.integer('last_editor_id');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('pagecontent', async function (table) {
      table.dropColumn('pagetype');
      table.dropColumn('event_end');
      table.dropColumn('creator_id');
      table.dropColumn('last_editor_id');
    })
};
