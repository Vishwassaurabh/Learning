const http = require("http");

//speed test (ping simulation)
//mesaures how long it take to connect to a website

///-----ROAD MAP-----
//! ping website
function pingwebsite(url) {

  //REmove http:// or https:// if present
  const hostname = url.replace(/^https?:\/\//, "");

  console.log(`Testing connection to ${hostname}`);

  const startTime = Date.now();

  //handle the request from the user
  const req = http.get(`http://${hostname}`, (res) => {
    const endTime = Date.now();
    const responseTime = endTime - startTime;

    console.log(`connected to ${hostname}`);
    console.log(`Response status :${res.statusCode}`);
    console.log(`Response Time :${responseTime}ms`);

    //clean up the request
    res.resume();
  });

  req.on("error", (err) => {
    const endTime = Date.now();
    const responseTime = endTime - startTime;

    console.log(`failed to connect to ${hostname}:${err.message}`);
    console.log(`time elapsed before failure ${responseTime}ms:${err.message}`);

    //set a timeout
    req.setTimeout(3000, () => {
      req.abort();

      const responsetime = endTime - startTime;

      console.log(`connection  to ${hostname}time out`);
      console.log(`time elapsed before failure ${responseTime}ms`);
    });
  });
}

//example usage
if (process.argv.length < 3) {
  console.log("Usage:node speedtest.js website1 website2...");
  console.log("Example:node speedtest.js google.com github.com...");
} else {
  const websites = process.argv.slice(2);
  websites.forEach((site) => {
    pingwebsite(site);
  });
}
