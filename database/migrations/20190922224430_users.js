exports.up = function(knex) {
  return knex.schema
    .createTable("users", users => {
      // primary key (id)
      users.increments();

      // username
      users
        .string("username", 255)
        .notNullable()
        .unique();

      users.string("first_name", 255).notNullable();
      users.string("last_name", 255).notNullable();
      users.string("password", 255).notNullable();
      users.string("role", 128);

      // time stamp
      users.timestamps(true, true);
    })
    .createTable("stories", stories => {
      // primary key (id)
      stories.increments();

      stories.string("author", 1000).notNullable();
      stories.string("title", 1000).notNullable();
      stories.boolean("approved");
      stories.text("body", 1000).notNullable();
      stories.text("country", 1000).notNullable();
      stories.text("url_img", 1000);

      //foreign key (id)
      stories
        .integer("approved_by_user_id")
        .unsigned()
        .references("id")
        .inTable("users");

      stories.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("stories").dropTableIfExists("users");
};
