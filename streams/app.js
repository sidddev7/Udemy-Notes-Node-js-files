const buffers = new Buffer.from("Siddhraj", "utf-8");

console.log(buffers.toString(), buffers);
buffers.write("Code");
console.log(buffers.toString(), buffers);
