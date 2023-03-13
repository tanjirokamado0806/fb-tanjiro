const chalk = require('chalk');

function load(data, start) {
  console.log(chalk.bold.blue(start + " " || '[ FB-TANJIRO ] ') + chalk.bold.hex(global.fb.mainColor || "#B0FEFF")(data))
}

function err(data, start) {
  console.log(chalk.bold.red(start + " " || '[ FB-TANJIRO ] ') + chalk.bold.hex(global.fb.mainColor || "#21B6A8")(data))
}

module.exports = {
  load,
  err
}