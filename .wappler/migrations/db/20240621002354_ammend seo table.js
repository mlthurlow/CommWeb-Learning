
exports.up = function(knex) {
  return knex.schema
    .table('seo', async function (table) {
      table.string('og_url');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('seo', async function (table) {
      table.dropColumn('og_url');
    })
};
