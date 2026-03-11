const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");
const { timeStamp } = require("console");
const { cpuUsage } = require("process");

//Define port
const PORT = 3000;

//file paths
const usersDatapath = path.join(__dirname, "data", "users.json");
const postsDatapath = path.join(__dirname, "data", "posts.json");

//helper function to read json file
function readJSONFile(filepath) {
  try {
    return JSON.parse(fs.readFileSync(filepath, "utf-8"));
  } catch (error) {
    console.log(`error reading file ${filepath}:${error.message}`);
    return null;
  }
}

//create HTTP server
const server = http.createServer((req, res) => {
  //set response headers
  res.setHeader("Content-Type", "application/json");
  //parse the url
  const parsedurl = url.parse(req.url, true);
  const path = parsedurl.pathname;
  const trimmedpath = path.replace(/^\/+|\/+$/g, "");
  //query params
  const queryParams = parsedurl.query;
  //log the request
  console.log(`request recived:${req.method} ${path}`);

  switch (trimmedpath) {

    case "users":
      //return user data
      const userData = readJSONFile(usersDatapath);
      if (userData) {
        //check if we need to filter by id
        if (queryParams.id) {
          const userId = parseInt(queryParams.id);
          const user = userData.users.find((user) => user.id === userId);
          if (user) {
            res.statusCode = 200;
            res.end(JSON.stringify(user));
          } else {
            res.statusCode = 404;
            res.end(JSON.stringify({ error: "user not found" }));
          }
        } else {
          res.statusCode = 200;
          res.end(JSON.stringify(userData));
        }
      } else {
        res.statusCode = 500;
        res.end(JSON.stringify({ error: "Could not read user data" }));
      }
      break;

    case "posts":
      const postData = readJSONFile(postsDatapath);

      if (postData) {
        if (queryParams.id) {
          const postId = parseInt(queryParams.id);
          const post = postData.posts.find((post) => post.id === postId);

          if (post) {
            res.statusCode = 200;
            res.end(JSON.stringify(post));
          } else {
            res.statusCode = 404;
            res.end(JSON.stringify({ error: "post not found" }));
          }
        } else {
          res.statusCode = 200;
          res.end(JSON.stringify(postData));
        }
      } else {
        res.statusCode = 500;
        res.end(JSON.stringify({ error: "could not read posts data" }));
      }
      break;

    case "status":
      //return server status
      const uptime = process.uptime();
      const status = {
        status: "online",
        timeStamp: new Date().toISOString(),
        uptime,
        memory: process.memoryUsage(),
        cpuUsage: process.cpuUsage(),
        node_version: process.version,
        routes: ["/users", "/posts", "/status"],
      };
      res.statusCode = 200;
      res.end(JSON.stringify(status));
      break;

    default:
      //retuen available endpoint
      const endpoints = {
        endpoints: [
          {
            path: "/users",
            descriptions:
              "Return list of users or a specific user with ?id=<user_id>",
            method: "GET",
          },
          {
            path: "/posts",
            descriptions:
              "Return list of posts or a specific",
            method: "GET",
          },
          {
            path: "/status",
            descriptions:
              "Return current server status and metrics",
            method: "GET",
          },
        ],
      };
      res.statusCode=200;
      res.end(JSON.stringify(endpoints))
  }
});

//start the server
server.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
  console.log(`avalable routes:`);
  console.log(`http://localhost:${PORT}/users`);
  console.log(`http://localhost:${PORT}/posts`);
  console.log(`http://localhost:${PORT}/status`);
});
