exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("stories")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("stories").insert([
        {
          id: 1,
          author: "its all about the bass",
          title: "no treble!",
          approved: true,
          body:
            "this is a body for the stories, adfasdfasd asdfasdfsdaf asdfasdfsad asdfasdfas asdfasdf asdfasdfasd asdfasdfas asdfasdfas asdfsadfas asdfasdfas asdfsadfdsadf asdfsdafsad asdfsda",
          country: "lorem city",
          url_img: "https://picsum.photos/id/1027/2848/4272"
        }
      ]);
    });
};
