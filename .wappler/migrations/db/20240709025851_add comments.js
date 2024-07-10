
exports.up = function(knex) {
  return knex.schema
    .createTable('pagecontent_comments', async function (table) {
      table.increments('comment_id');
      table.integer('pagecontent_id').unsigned();
      table.foreign('pagecontent_id').references('pagecontent_id').inTable('pagecontent').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('comment_pagecontent_id').unsigned();
      table.foreign('comment_pagecontent_id').references('pagecontent_id').inTable('pagecontent').onUpdate('CASCADE').onDelete('CASCADE');
      table.text('comment');
      table.datetime('comment_date');
      table.integer('comment_user_id');
      table.boolean('authorized');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('pagecontent_comments')
};
