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

      stories.string("author", 255).notNullable();
      stories.string("title", 255).notNullable();
      stories.boolean("approved");
      stories.string("body").notNullable();
      stories.text("country", 255).notNullable();
      stories.text("url_img", 255);

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
  return knex.schema.dropTableIfExists("users").dropTableIfExists("stories");
};
