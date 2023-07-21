// const fs = require("fs");

// // Asynchronously write file
// // fs.writeFile("notes.txt", "My name is Siddhraj", (res) => {
// //   console.log("res", res);
// // });
// // Synchronously Write file
// // fs.writeFileSync("notesSync.txt", "My name is Siddhraj");

// // Append some data to the file
// fs.appendFileSync("notes.txt", " This is the appended message");

// -------------------------------------End of video ---------------------------- //

// ------------------------------------- Loading custom files using module system //

// const utils = require("./utils.js");
// const notes = require("./notes.js");
// const { logger, sum } = utils;
// const { getNotes } = notes;
// const name = "Gohil";
// logger();

// console.log(sum(10, 20));
// console.log(getNotes());

// ------------------------------ Using Npm modules

//  -------------------------------- Using Chalk
// const chalk = require("chalk");
// const blue = (text) => chalk.blue(text);
// const green = (text) => chalk.bold.bgWhite.green(text);
// const inverse = (text) => chalk.green.bold.inverse(text);
// console.log(blue("Hello world!"), green("Hello"), inverse("Hello"));

// ##getting input from user from the command line using node app.js ```input```##
// const operation = process.argv[2];

const yargs = require("yargs");
const fs = require("fs");
const { default: chalk } = require("chalk");
// change the versio of yargs
// yargs.version("1.5.6");
// console.log(yargs.argv);
yargs.command({
  command: "add",
  describe: "Add a new Notebook",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler: (args) => {
    fs.appendFile(
      "./1.json",
      `${JSON.stringify({ title: args.title, body: args.body })}`,
      () => {
        console.log("Write note successful");
      }
    );
  },
}).argv;

yargs.command({
  command: "remove",
  describe: "Remove the note",
  handler: (args) => {
    console.log("Removing", args);
  },
}).argv;

yargs.command({
  command: "list",
  describe: "List the notes",
  handler: (args) => {
    console.log("List", args);
    fs.readFile("1.json1", (err, data) => {
      if (err) {
        console.log(chalk.red("Error", err));
      } else {
        console.log(JSON.parse(data));
      }
    });
  },
}).argv;
