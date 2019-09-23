const db = require("../database/dbConfig");

module.exports = {
  checkDatabase,
  add,
  findBy,
  find,
  deleteUser,
  updateUser
};

// users

function checkDatabase() {
  return "API User Running";
}

async function add(users) {
  const [id] = await db("users").insert(users);
}

function find() {
  return db("users").select("*");
}

function findBy(filter) {
  return db("users").where(filter);
}

function deleteUser(id) {
  return db("users")
    .where({ id: id })
    .delete();
}

function updateUser(id, content) {
  return db("users")
    .where({ id: id })
    .update(content);
}
