const { Worker } = require("worker_threads");

const worker1 = new Worker("./work1.js", { workerData: { value: 100 } });

// const worker2 = new Worker("./work2.js", { workerData: { value: 20 } });

worker1.on("message", (message) => {
  console.log(`Worker 1 message : ${message}`);
});

// worker2.on("message", (message) => {
//   console.log(`Worker 2 message : ${message}`);
// });

// worker2.postMessage("Start Task 2");
worker1.postMessage("Start Task 1");
