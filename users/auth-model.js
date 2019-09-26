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
  const [id] = await db("users").insert(users, "id");
}

function find() {
  return db("users").select("*");
}

function findBy(data) {
  return db("users")
    .where(data)
    .first();
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
