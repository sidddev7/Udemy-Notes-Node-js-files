const { default: chalk } = require("chalk");
const fs = require("fs");

const book = {
  title: "Sneh Desai",
  description: "The best Book",
};

const dataStringified = JSON.stringify(book);

fs.writeFileSync("1.json", dataStringified);

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
fs.copyFile("./1.json", "1-copy.json", (err) => {  // here the content of copyfile will be old data
  if (err) {
    console.log(chalk.red(err))
  }
  console.log("Success")
});
fs.writeFile("./1.json", JSON.stringify(temp), () => {
  console.log("Updated the file successfully");
  const newBuffer = fs.readFileSync("./1.json");
  console.log(JSON.parse(newBuffer.toString()));
});

// ### if you use copy file here, it will be empty, becuase the write file will trucate the original content first, and then the copyfile will see an empty file, 
// fs.copyFile("./1.json", "1-copy.json", (err) => { //File will be empty here
//   if (err) {
//     console.log(chalk.red(err))
//   }
//   console.log("Success")
// });
