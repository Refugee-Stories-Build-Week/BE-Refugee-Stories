const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const authRoutes = require("./users/auth-router");
const storiesRoute = require("./stories/stories-router");
const notApproved = require("./stories/notApproved-router");

const server = express();
server.use(helmet());
server.use(cors());
server.use(express.json());

// Routes
server.use("/users", authRoutes);
server.use("/stories", storiesRoute);
server.use("/notApproved", notApproved);

server.get("/", (req, res) => {
  res.status(200).json({ message: "backend is up and running!" });
});

module.exports = server;
