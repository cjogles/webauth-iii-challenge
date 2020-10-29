
exports.seed = function(knex) {
  return knex('users').insert([
    {id: 1, username: 'jack', password: "pass", department: "sales"},
    {id: 2, username: 'ben', password: "pass", department: "accounting"},
    {id: 3, username: 'sadie', password: "pass", department: "accounting"}
  ]);
};
