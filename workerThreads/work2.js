const { parentPort, workerData } = require("worker_threads");

const { value } = workerData;

parentPort.on("message", (message) => {
  console.log(`Worker 2 received message ${message}`);

  let result = 0;
  for (let i = 0; i < value; i++) {
    result += i;
  }
  parentPort.postMessage(`message from Worker 2 : ${result}`);
});
