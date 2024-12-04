const cluster = require("cluster");
const http = require("http");
const path = require("path");

const numofCPU = require("os").cpus().length;

console.log(process.cwd());
console.log(__dirname, path.join(__dirname, "data", "userData.json"), numofCPU);

if (cluster.isMaster) {
  for (let i = 0; i < numofCPU; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end("Hello from worker process");
    })
    .listen(8080);
}
