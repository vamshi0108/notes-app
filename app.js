const validator = require("validator").default;
const util = require("./utils.js");
const chalk = require("chalk");
const yargs = require("yargs");
const log = console.log;

yargs.command({
  command: "add",
  describe: "To read the data",
  builder: {
    title: {
      describe: "Title of the notes",
      demandOption: true,
      type: "String",
    },
    body: {
      describe: "Notes content",
      demandOption: true,
      type: "String",
    },
  },
  handler: function (argv) {
    util.addNotes(argv.title, argv.body);
  },
});

yargs.command({
  command: "delete",
  describe: "To delete the data",
  builder: {
    title: {
      describe: "Title of the notes",
      demandOption: true,
      type: "String",
    },
  },
  handler: function (argv) {
    util.deleteNotes(argv.title);
  },
});

yargs.command({
  command: "view",
  describe: "To View the requested data",
  builder: {
    title: {
      describe: "Title of the notes",
      demandOption: true,
      type: "String",
    },
  },
  handler: function (argv) {
    util.viewNotes(argv.title);
  },
});

yargs.command({
  command: "modify",
  describe: "To modify the requested data",
  builder: {
    title: {
      describe: "Title of the notes",
      demandOption: true,
      type: "String",
    },
    body: {
      describe: "Notes content",
      demandOption: true,
      type: "String",
    },
  },
  handler: function (argv) {
    util.modifyNotes(argv.title, argv.body);
  },
});

yargs.parse();
// log(validator.isEmail("sa"));
// log(chalk.redBright.bgYellow("I am background yellow"));
// log(validator.isEmpty(""));
// log(validator.contains("HAI THIS IS VAMSHI", "VAMSHI"));
// log(chalk.inverse("italic"));
