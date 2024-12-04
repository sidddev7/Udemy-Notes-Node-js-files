const { parentPort, workerData, Worker } = require("worker_threads");

const { value } = workerData;
parentPort.on("message", (message) => {
  console.log(`Worker 1 received message ${message}`);
  const workerNew = new Worker("./work2.js", { workerData: { value: 200 } });
  let result = 0;
  for (let i = 0; i < value; i++) {
    result += i;
  }
  workerNew.postMessage("Start Working");
  workerNew.on("message", (value) => {
    console.log("value", value);
  });
  parentPort.postMessage(`message recieved from Worker 1 : ${result}`);
});
