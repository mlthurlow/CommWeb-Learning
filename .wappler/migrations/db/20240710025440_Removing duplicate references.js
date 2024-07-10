
exports.up = function(knex) {
  return knex.schema
    .table('pagecontent_images', async function (table) {
      table.dropForeign('image_pagecontent_id');
      table.dropColumn('image_pagecontent_id');
    })
    .table('pagecontent_comments', async function (table) {
      table.dropForeign('comment_pagecontent_id');
      table.dropColumn('comment_pagecontent_id');
    })
    .table('pagecontent_comment_reaction', async function (table) {
      table.dropForeign('reaction_comment_id');
      table.dropColumn('reaction_comment_id');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('pagecontent_comment_reaction', async function (table) {
      table.integer('reaction_comment_id').unsigned();
      table.foreign('reaction_comment_id').references('comment_id').inTable('pagecontent_comments').onUpdate('CASCADE').onDelete('CASCADE');
    })
    .table('pagecontent_comments', async function (table) {
      table.integer('comment_pagecontent_id').unsigned();
      table.foreign('comment_pagecontent_id').references('pagecontent_id').inTable('pagecontent').onUpdate('CASCADE').onDelete('CASCADE');
    })
    .table('pagecontent_images', async function (table) {
      table.integer('image_pagecontent_id').unsigned();
      table.foreign('image_pagecontent_id').references('pagecontent_id').inTable('pagecontent').onUpdate('CASCADE').onDelete('CASCADE');
    })
};
