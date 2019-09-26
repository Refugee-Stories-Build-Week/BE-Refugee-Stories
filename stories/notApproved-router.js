const router = require("express").Router();
const Stories = require("./stories-model");
const restricted = require("../authenticate/auth");

// get only approved stories
router.get("/", restricted, (req, res) => {
  Stories.notApprovedStories()
    .then(story => {
      res.status(200).json(story);
    })
    .catch(err => console.log(err));
});

// get only approved specific story
router.get("/:id", restricted, (req, res) => {
  const { id } = req.params;
  Stories.notApprovedStory(id)
    .then(story => {
      res.status(200).json(story);
    })
    .catch(err => console.log(err));
});

module.exports = router;
