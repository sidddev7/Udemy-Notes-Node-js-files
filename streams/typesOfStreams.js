const fs = require("fs");
const http = require("http");
const server = http.createServer();
const readableStream = fs.createReadStream("./large-file.txt", {
  encoding: "utf-8",
});

// const writableStream = fs.createWriteStream("./large-file-copy.txt");
// // readableStream.on("data", (chunk) => {
// //   writableStream.write(chunk);
// // });
// readableStream.pipe(writableStream);

server.listen("3000", "localhost");

server.on("request", (req, res) => {
  // this is a normal fs readfile operation, that only resolves once the whole content of the file is read
  //   fs.readFile("./large-file.txt", (err, data) => {
  //     if (err) {
  //       res.end("Something went wrong");
  //       return;
  //     } else {
  //       res.end(data);
  //     }
  //   });

  //   This is streaming that happens from server to the client on browser side
  readableStream.pipe(res);
});
