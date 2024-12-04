const fs = require("fs");
const { Buffer } = require("buffer");
fs.readFile("./test.txt", (err, data) => {
  console.log("First", data.toString());
});

const res = fs.readFileSync("./test.txt");
console.log("Second", res.toString());

const readStream = fs.createReadStream("./test.txt");
const writeStream = fs.createWriteStream("./testcopy.txt");

readStream.pipe(writeStream);

const buffer = Buffer.from("Siddhrajsinh", "utf-8");
buffer.write("Hello");
console.log(buffer.toString());
