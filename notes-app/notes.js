const { default: chalk } = require("chalk");
const fs = require("fs")

const getNotes = () => {
  return "Your notes...";
};

const loadNotes = () => {
  try {
    const buffer = fs.readFileSync("notes.json")
    return JSON.parse(buffer.toString())

  } catch (err) {
    // console.log(err)
    return []
  }
}
const removeNote = (note) => {
  const notes = loadNotes()
  const filteredNotes = notes.filter(item => item.title !== note)
  saveNotes(filteredNotes)
}
const addNotes = (title, body) => {
  const notes = loadNotes()
  const obj = notes.find(item => item.title === title)
  if (obj) {
    return console.log(chalk.red("No duplicates are allowed"))
  }
  notes.push({
    title, body
  })
  saveNotes(notes)
}
const saveNotes = function (notes) {
  fs.writeFile("./notes.json", JSON.stringify(notes), (err) => {
    if (err) {
      console.log(chalk.red(err))
    } else {
      console.log(chalk.green("Notes updated Successfully"))
    }
  })

}
module.exports = { getNotes, addNotes, removeNote };
