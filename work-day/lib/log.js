var chalk = require('chalk');

module.exports = {
  "out": (msg, color, log) => {
    if (log) {
      console.log(chalk[color](msg));
    }
  }
};