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
readableStream.pipe(gzip).pipe(gzipWriteStream);

fs.open("./test.txt",(err,data)=>{
  console.log(data)
})
// fs.writeFileSync("./test.txt",`\n Hello Sid`)
fs.readFileSync("./test2.txt",(err,data)=>{
  console.log(data,err)
})