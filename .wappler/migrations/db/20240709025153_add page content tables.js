
exports.up = function(knex) {
  return knex.schema
    .createTable('pagecontent', async function (table) {
      table.increments('pagecontent_id');
      table.string('title', 255);
      table.text('description');
      table.boolean('online');
      table.datetime('date_created');
      table.datetime('date_edited');
      table.datetime('event_start');
      table.decimal('lat');
      table.decimal('long');
      table.boolean('geo');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('pagecontent')
};
