const Buffer =require("buffer").Buffer
const buffers = Buffer.from("Siddhraj", "utf-8");

console.log(buffers.toString(), buffers);
buffers.write("Code");
console.log(buffers.toString(), buffers);
