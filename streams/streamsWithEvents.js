const fs = require("fs");

const readableStream = fs.createReadStream("./stream.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
});

const writableStream = fs.createWriteStream("./stream-copy.txt", {
  encoding: "utf-8",
  highWaterMark: 3,
});

readableStream.on("data", (data) => {
  console.log(data);
  writableStream.write(data);
});
