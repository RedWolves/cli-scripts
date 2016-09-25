#!/usr/bin/env node

var path = require("path");
var package = require(path.join(__dirname, 'package.json'));
var program = require("commander");
require('shelljs/global');
var log = require("./lib/log");
var open = require("open");
var fs = require("fs");

program
  .version(package.version)
  .usage('')
  .option("-v, --verbose", "Enable verbose logging", function(val) { return true; })
  .option("-a, --all", "Quit all open apps", function(val) { return true; })
  .option("-s, --sleep", "Put the computer to sleep.", function(val) { return true; })
  .option("-e, --end", "It's the end of the workday. Quit all work related apps.", function(val) {return true;})
  .parse(process.argv);

var logging = program.verbose ? true : false;
log.out("Reading config file", "gray", logging);
var config = JSON.parse(fs.readFileSync(path.join(__dirname, 'config.json')).toString());
if (logging) { console.log(config);}

if (program.all) {
  log.out("Quitting all open apps.", "cyan", true);
  for (var index = 0; index <= config.apps.length-1;index++) {
    exec('osascript -e \'quit app "' + config.apps[index].app + '"\'', {silent: true});
  }
  exec("open -a QuitEverything");
  exec("clear");
} else {
  if (!program.end) {
    log.out("Good morning. Let's get productive!!", "cyan", true);
    log.out("Opening apps.", "gray", true);
    for (var index = 0; index <= config.apps.length-1;index++) {
      log.out("Opening " + config.apps[index].name + ".", "gray", true);
      exec('open -a "' + config.apps[index].app + '"');
    }

    log.out("Opening sites in browser.", "gray", true);
    for (var index = 0; index <= config.sites.length-1;index++) {
      log.out("Opening " + config.sites[index].name + ".", "gray", true);
      open(config.sites[index].url);
    }
  } else {
    //end of the day, quit our apps.
    log.out("Quitting apps.", "gray", true);
    for (var index = 0; index <= config.apps.length-1;index++) {
      log.out("Quiting " + config.apps[index].name + ".", "gray", true);
      exec('osascript -e \'quit app "' + config.apps[index].app + '"\'', {silent: true});
    }
    log.out("Have a great evening!!", "cyan", true);
  }
}

if (program.sleep) {
  log.out("Going to sleep now. Zzzzz.", "yellow", true);
  exec("pmset sleepnow");
}