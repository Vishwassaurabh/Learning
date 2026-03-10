const http = require("http");
//create a server
const server = http.createServer((req, res) => {
  //set the content to plain
 res.setHeader("Content-Type", "application/json");
  if (req.url === "/" && req.method === "GET") {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: "Welcome to API!" }));
  } else if (req.url === "/users" && req.method === "GET") {
    const users = [{ id: 1, name: "smith", id: 2, name: "janet" }];
    res.statusCode = 200;
    res.end(JSON.stringify(users));
  } else if (req.url === "/products" && req.method === "GET") {
    res.statusCode = 200;
    const products = [
      {
        id: 1,
        name: "laptop",
        price: "1500",
        id: 102,
        name: "computer",
        price: "20000",
      },
    ];
    res.end(JSON.stringify(products));
  }
});

//Define port
const PORT = 5000;
//start the server
server.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
  console.log("Press Ctrl+C to stop the server");
});
