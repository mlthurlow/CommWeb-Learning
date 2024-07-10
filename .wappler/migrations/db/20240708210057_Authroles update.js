
exports.up = function(knex) {
  return knex.schema
    .createTable('authroles', async function (table) {
      table.increments('authrole_id');
      table.string('role');
      table.string('rolename');
    })
    .then(async () => {
      await knex('seo').where('seo_id', 6).update({"description":"Home"}),
      await knex('seo').where('seo_id', 7).update({"description":"Login"}),
      await knex('seo').where('seo_id', 8).update({"description":"Register"}),
      await knex('seo').where('seo_id', 1).del(),
      await knex('seo').where('seo_id', 2).del(),
      await knex('seo').where('seo_id', 3).del(),
      await knex('seo').where('seo_id', 4).del(),
      await knex('seo').where('seo_id', 5).del()
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('authroles')
};
