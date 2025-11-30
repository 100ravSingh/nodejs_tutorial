const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Welcome Sourav to Node Basics!");
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});
