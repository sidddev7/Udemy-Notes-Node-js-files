const fs = require("fs");
const zlib = require("zlib");
const gzip = zlib.createGzip();

const readableStream = fs.createReadStream("../streams/stream.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
});

const writableStream = fs.createWriteStream("./pipe.txt", "utf-8");
const gzipWriteStream = fs.createWriteStream("./pipe.gz");
readableStream.pipe(writableStream);
console.log(readableStream);
readableStream.pipe(gzip).pipe(gzipWriteStream);