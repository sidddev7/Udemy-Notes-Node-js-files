const fs = require("fs");

setTimeout(() => console.log("Set timeout"));

setImmediate(() => console.log("Set Immediate"));
const readableStream = fs.createReadStream("../streams/stream.txt", {
  encoding: "utf-8",
});
fs.readFile("../streams/stream.txt", (err, data) => {
    console.log(data.toString());
});
readableStream.on("data", (data) => {
    console.log("Stream", data.toString());
});
readableStream.on("close", () => {
  console.log("stream closed");
});

process.nextTick(() => console.log("Next tick"));
