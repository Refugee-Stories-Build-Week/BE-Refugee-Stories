const db = require("../database/dbConfig");

module.exports = {
  submit,
  find,
  findBy,
  getApprovedStories,
  getApprovedStory,
  updateStory,
  deleteStory
};

// stories
function submit(story) {
  return db("stories").insert(story, "id");
}

function find() {
  return db("stories").select("*");
}

function findBy(id) {
  return db("stories")
    .where({ id: id })
    .first();
}

function getApprovedStories() {
  return db("stories")
    .select("*")
    .where({ approved: 1 });
}

function getApprovedStory(id) {
  return db("stories")
    .where({ id: id, approved: 1 })
    .first();
}

function updateStory(id, content) {
  return db("stories")
    .where({ id: id })
    .update(content);
}

function deleteStory(id) {
  return db("stories")
    .where({ id: id })
    .delete();
}
