const db = require('../data/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
};

function find() {
  return db('users').select('id','username','password','department');
}

async function add(user) {
  const [id] = await db('users').insert(user);
  return findById(id);
}

function findBy(filter) {
  return db('users').where(filter);
}

function findById(id) {
  return db('users')
    .where({id})
    .first()
}

async function update(user, id) {
  await db('users')
    .where( {id} )
    .update(user, 'id')
  return findById(id);
}