const http = require("http");

const server = http.createServer((req, res) => {
  //   const unpacked = {
  //     url: req.url,
  //     method: req.method,
  //     headers: req.headers,
  //   };
  //   res.writeHead(200, "Content-Type", "application/json");
  //   res.end(JSON.stringify(unpacked));

  if (req.url === "/") {
    res.writeHead(200, "Content-Type", "text/plain");
    res.write("Welcome to the Unicorns house");
  } else if (req.url === "/chickens") {
    res.writeHead(200, "Content-Type", "text/plain");
    res.write("Our unicorns are fed organic code all the time and are healthy");
  } else {
    res.writeHead(404, "Content-Type", "text/plain");
    res.write("404! These are not the unicorns you are looking for!");
  }
  res.end();
});

server.listen(3001, () => {
  console.log("listening on port 3001");
});
