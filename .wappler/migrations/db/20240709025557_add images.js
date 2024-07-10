
exports.up = function(knex) {
  return knex.schema
    .createTable('pagecontent_images', async function (table) {
      table.increments('image_id');
      table.integer('pagecontent_id').unsigned();
      table.foreign('pagecontent_id').references('pagecontent_id').inTable('pagecontent').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('image_pagecontent_id').unsigned();
      table.foreign('image_pagecontent_id').references('pagecontent_id').inTable('pagecontent').onUpdate('CASCADE').onDelete('CASCADE');
      table.string('imagelink');
      table.integer('creator_id');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('pagecontent_images')
};
