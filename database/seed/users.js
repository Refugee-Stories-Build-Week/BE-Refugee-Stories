exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          username: "newguy",
          password: "1234asdf",
          first_name: "Austen",
          last_name: "Allred",
          role: "admin"
        },
        {
          id: 2,
          username: "justuser",
          password: "1234asdf",
          first_name: "Luis",
          last_name: "Hernandez",
          role: "admin"
        }
      ]);
    });
};
