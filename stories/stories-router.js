const router = require("express").Router();
const Stories = require("./stories-model");
const restricted = require("../authenticate/auth");

//**** ALL RESTRICTED ROUTES */

// Submit a story
router.post("/submit", (req, res) => {
  let story = req.body;
  story.approved = 0;

  Stories.submit(story)
    .then(stories => {
      res.status(201).json({ message: "story saved!" });
    })
    .catch(err => res.status(500).json(err));
});

// get all stories
router.get("/all", restricted, (req, res) => {
  Stories.find()
    .then(stories => {
      res.status(200).json(stories);
    })
    .catch(err => console.log(err));
});

// get specific story
router.get("/all/:id", restricted, (req, res) => {
  const { id } = req.params;
  Stories.findBy(id)
    .then(stories => {
      res.status(200).json(stories);
    })
    .catch(err => console.log(err));
});

// get only approved stories
router.get("/", (req, res) => {
  Stories.getApprovedStories()
    .then(story => {
      res.status(200).json(story);
    })
    .catch(err => console.log(err));
});

// get only approved specific story
router.get("/:id", (req, res) => {
  const { id } = req.params;
  Stories.getApprovedStory(id)
    .then(story => {
      res.status(200).json(story);
    })
    .catch(err => console.log(err));
});

// update a story
router.put("/:id", restricted, (req, res) => {
  const { id } = req.params;
  const content = req.body;

  Stories.updateStory(id, content)
    .then(stories => {
      res.status(200).json(stories);
    })
    .catch(err => res.status(500).json(err));
});

// delete a story
router.delete("/:id", restricted, (req, res) => {
  const { id } = req.params;
  Stories.deleteStory(id).then(stories => {
    res.status(200).json({ message: "deleted!" });
  });
});

module.exports = router;
