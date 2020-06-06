const validator = require("validator").default;
const add = require("./utils.js")();
const chalk = require("chalk");
const yargs = require("yargs");
const log = console.log;

yargs.command({
  command: 'read',
  describe: 'To read the data',
  builder: {
    number: {
      describe: 'This is number of pages',
      demandOption: true,
      type: 'number'
    }
  },
  handler: function(argv){
    log('Number of pages', argv.number)
  }
})

yargs.parse()
// log(validator.isEmail("sa"));
// log(chalk.redBright.bgYellow("I am background yellow"));
// log(validator.isEmpty(""));
// log(validator.contains("HAI THIS IS VAMSHI", "VAMSHI"));
// log(chalk.inverse("italic"));
