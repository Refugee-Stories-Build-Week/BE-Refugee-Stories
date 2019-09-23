const router = require("express").Router();
const Users = require("./auth-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets");
const restricted = require("../authenticate/auth");

router.post("/register", (req, res) => {
  let user = req.body;

  user.password = bcrypt.hashSync(user.password, 10);

  Users.add(user)
    .then(saved => {
      res.status(201).json({ message: "saved!", saved });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/login", (req, res) => {
  // implement login
  let { username, password } = req.body;
  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);

        res.status(200).json({
          message: `Welcome ${user.username}!, have a token`,
          token
        });
      } else {
        res.status(401).json({
          message: "invalid credentials"
        });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

//****** protected user routes - need token to access ******//

// delete a user
router.delete("/deleteUser/:id", restricted, (req, res) => {
  const { id } = req.params;
  Users.deleteUser(id)
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => res.status(500).json(err));
});

// update a user
router.put("/updateUser/:id", restricted, (req, res) => {
  const { id } = req.params;
  const content = req.body;

  Users.updateUser(id, content)
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => res.status(500).json(err));
});

// restricted routes
router.get("/", restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json({ users, loggedInUser: req.user.username });
    })
    .catch(err => res.send(err));
});

function generateToken(user) {
  const payload = {
    username: user.username
  };

  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;
