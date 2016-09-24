#!/usr/bin/env node

var path = require('path');
var program = require('commander');
var open = require('open');
var package = require(path.join(__dirname, 'package.json'));
var request = require('request');
var Crawler = require('crawler');
var log = require('./lib/log');



program
  .version(package.version)
  .usage('[options] <search term>')
  .option('-c, --country [value]', 'The two-letter country code for the store you want to search. The default is US.')
  .option('-m, --media [value]', 'The media type you want to search for. For example: movie. The default is all.')
  .option('-v, --verbose', "Enable verbose logging.", function(val) { return true; })
  .parse(process.argv);

var iTunesSearchAPI = "https://itunes.apple.com/search?";
var queryString = "limit=1&";
var logging = program.verbose ? true : false
var searchTerm = "term=" + encodeURIComponent(program.args);
log.out("Searching for: " + program.args, "gray", true);
var media = "";
var country = "&country=US";

if (program.media) {
  media = "&media=" + program.media;
} 

if (program.country) {
  country = "&country=" + program.country;
}

queryString = queryString + searchTerm + media + country;

log.out("Searching iTunes: " + iTunesSearchAPI + queryString, "gray", logging);

request(iTunesSearchAPI + queryString, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    log.out("iTunes Search API results returned.", "gray", logging);
    var result = JSON.parse(body);
    if (logging) { console.log(result); }
    if (result.resultCount == 0) {
      log.out("No results found for: '" + program.args +"'", "red", true);
      process.exit();
    }
    var c = new Crawler({
        maxConnections : 1,
        callback : function (error, result, $) {
            var highDpiImageUrl = $('#left-stack .lockup .artwork img').attr("src-swap-high-dpi");
            log.out("High DPI Image Url: " + highDpiImageUrl, "gray", logging);
            log.out("Opening '" + program.args + "' in browser.", "gray", true);
            open(highDpiImageUrl);
            process.exit();
        }
    });
    c.queue(result.results[0].trackViewUrl);
    
  } else {
    if (response.statusCode == 400) {
      log.out("HTTP Status 400, you've most likely provided an invalid option.", "red", true);
    } else {
      log.out("HTTP Status: " + response.statusCode);
    }
    if (error) {
      log.out("An error occured, " + error, "red", true);
    }
  }
});



