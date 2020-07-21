const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNote();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log("New note added");
  } else {
    console.log("Note title already exists");
  }
};

const saveNotes = (notes) => {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJson);
};

const loadNote = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson); //Array of objects
  } catch (e) {
    return [];
  }
};

const listNotes = () => {
  const notes = loadNote();

  notes.forEach((e) => {
    console.log(`${e.title}`);
  });

  //    const notesToShow = notes.filter(n => {
  //        return n.title === title
  //    })
};

const readNote = (title) => {
  const note = loadNote();

  const notes = note.find((e) => e.title === title);

  if (notes) {
    console.log(chalk.green(notes.title), notes.body);
  } else {
    console.log(chalk.red.inverse("No Note Found"));
  }
};

const removeNote = (title) => {
  //  const remBuffer = fs.readFileSync('notes.json')
  //  const remJson = remBuffer.toString()
  //  const rem = JSON.parse(remJson)
  //  rem.title = ""
  const rem = loadNote();

  const notesToKeep = rem.filter((note) => {
    return note.title !== title;
  });

  if (rem.length > notesToKeep.length) {
    console.log(chalk.greenBright("Note is removed"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.redBright("No Note Found"));
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
