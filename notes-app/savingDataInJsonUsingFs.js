const fs = require("fs");

const book = {
  title: "Sneh Desai",
  description: "The best Book",
};

const dataStringified = JSON.stringify(book);

// fs.writeFileSync("1.json", dataStringified);

const dataBuffer = fs.readFileSync("./1.json"); //returns a buffer object
const dataJson = dataBuffer.toString(); //converts the buffer to string
const data = JSON.parse(dataJson);
const temp = {
  ...data,
  name: "Siddhrajsinh Gohil",
  age: 23,
  livesIn: "Surat",
  position: "Developer",
};
fs.writeFile("./1.json", JSON.stringify(temp), () => {
  console.log("Updated the file successfully");
  const newBuffer = fs.readFileSync("./1.json");
  console.log(JSON.parse(newBuffer.toString()));
});

fs.copyFile("./1.json", "1-copy.json");
