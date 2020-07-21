const notes = require("./notes.js");
const yargs = require("yargs");

//create an add command

yargs.command({
  command: "add",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Add a new Note",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  },
});

//create remove command

yargs.command({
  command: "remove",
  builder: {
    title: {
      describe: "Remove a note",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.removeNote(argv.title);
  },
});

//create read command
yargs.command({
  command: "read",
  builder: {
    title: {
      describe: "Read a note",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.readNote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "Listing Notes",
  handler: () => {
    notes.listNotes();
  },
});

yargs.parse();
