const http = require("http");
const os = require("os");
const process = require("process");
const url = require("url");

//! Formate bytes to human-readable formate
function formateBytes(bytes, decimal = 2) {
  if (bytes === 0) return "0 bytes";
  //set base unit
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return (bytes / Math.pow(k, i)).toFixed(decimal) + " " + sizes[i];
}

//? formate second to human readable time
function formatTime(seconds) {
  const days = Math.floor(seconds / (3600 * 24));
  const hours = Math.floor((seconds % (3600 * 24)) / 36000);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remaingSeconds = Math.floor(seconds % 60);
  return `${days}d ${hours}h ${minutes} ${remaingSeconds}`;
}
// console.log(os.cpus()[0]);

//!get cpu info
const getCPU = () => {
  const model = os.cpus()[0].model;
  const cores = os.cpus().length;
  const architecture = os.arch();
  const loadAvg = os.loadavg();

  return {
    model,
    cores,
    architecture,
    loadAvg,
  };
};

// console.log(getCPU());

//!get memory info
const getMemory = () => {
  const total = formateBytes(os.totalmem());
  const free = formateBytes(os.freemem());

  const usage = ((1 - os.freemem() / os.totalmem()) * 100).toFixed(2) + "%";

  return {
    total,
    free,
    usage,
  };
};
// getMemory();

//!get OS info
const getOSINFO = () => {
  const platfrom = os.platform();
  const type = os.type();
  const release = os.release();
  const hostname = os.hostname();
  const uptime = formatTime(os.uptime());

  return { type, platfrom, release, hostname, uptime };
};
// getOSINFO();

//! get user info
const getuser = () => {
  const user = os.userInfo();
  return user;
};
// getuser();

//!get network info
const getNetwork = () => {
  const network = os.networkInterfaces();
  return network;
};
// getNetwork();

//!get process
const getProcess = () => {
  const pid = process.pid;
  const title = process.title;
  const nodeversion = process.version;
  const uptime = formatTime(process.uptime());
  console.log({ pid, title, nodeversion });
  cwd: process.cwd();
  return {
    pid,
    title,
    nodeversion,
    uptime,
    memoryUsage: {
      rss: formateBytes(process.memoryUsage().rss),
      heapTotal: formateBytes(process.memoryUsage().heapTotal),
      heapUsed: formateBytes(process.memoryUsage().heapUsed),
      external: formateBytes(process.memoryUsage().external),
    },
    env: {
      NODE_ENV: process.env.NODE_ENV || "NOT set",
    },
  };
};
// getProcess();

//! HTTP server
const server = http.createServer((req, res) => {
  const parsedurl = url.parse(req.url, true);
  res.setHeader("Content-Type", "application/json");
  if (parsedurl.pathname === "/") {
    res.statusCode = 200;
    res.end(
      JSON.stringify({
        name: "sysView-system Info Api",
        descriptions: "Access system start via simple json Routes",
        routes: ["/cpu", "/memory", "/user", "/process", "/network", "/os"],
      }),
    );
  } else if (parsedurl.pathname === "/cpu") {
    res.end(JSON.stringify(getCPU(), null, 2));
  } else if (parsedurl.pathname === "/memory") {
    res.end(JSON.stringify(getMemory(), null, 2));
  } else if (parsedurl.pathname === "/user") {
    res.end(JSON.stringify(getuser(), null, 2));
  } else if (parsedurl.pathname === "/process") {
    res.end(JSON.stringify(getProcess(), null, 2));
  } else if (parsedurl.pathname === "/network") {
    res.end(JSON.stringify(getNetwork(), null, 2));
  } else if (parsedurl.pathname === "/os") {
    res.end(JSON.stringify(getOSINFO(), null, 2));
  } else {
    res.statusCode = 404;
    res.end(
      JSON.stringify({
        error: "Routes not found",
      }),
    );
  }
});
//! start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`sysView is running at http://localhost:${PORT}`);
});
