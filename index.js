require("dotenv").config();

const server = require("./server");

const port = 3000;

server.listen(process.env.PORT || port, () => {
  console.log("Server running at port: " + port);
});
