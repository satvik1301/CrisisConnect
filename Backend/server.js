const http = require("http")

const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
    //url for sending the data from the json file items.json
      if (req.url === "/api") {
        res.writeHead(200, {"Content-Type": "text/json"});
        res.end("API Called");
      } else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end("Data not found");
      }
  });

server.listen(5000, () => {
  console.log(`Server running at http://${hostname}:5000/`);
});