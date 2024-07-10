
exports.up = function(knex) {
  return knex.schema
    .createTable('pagecontent_comment_reaction', async function (table) {
      table.integer('comment_id').unsigned();
      table.foreign('comment_id').references('comment_id').inTable('pagecontent_comments').onUpdate('CASCADE').onDelete('CASCADE');
      table.string('reaction', 1);
      table.integer('reaction_comment_id').unsigned();
      table.foreign('reaction_comment_id').references('comment_id').inTable('pagecontent_comments').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('reaction_user_id');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('pagecontent_comment_reaction')
};
