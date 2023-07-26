const fs = require("fs");

fs.readFile("../streams/stream.txt", (err, data) => {
  console.log("Console of read file", data.toString());
  setImmediate(() => {
    console.log("Called immediate");
  });
  console.log(process.memoryUsage().heapTotal);
});
setTimeout(() => {
  console.log("Settimeout 0");
}, 0);
// setTimeout(() => {
//   console.log("Settimeout 1000");
// }, 1000);
// Promise.resolve().then((res) => {
//   console.log("Promise resolved");
// });
// process.nextTick(() => {
//   console.log("Next tick callback");
// });
