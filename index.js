var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
console.log(message);

var playingWithColours = chalk.magenta("magenta") + chalk.bgBlue("highlight blue") + chalk.bold("i am bold") + chalk.underline("standing on a line") + chalk.green("GREENGREENGREEN")
console.log(playingWithColours)