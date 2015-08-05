#!/usr/bin/env node
// jcat.js
// reads in a json file and outputs an element per line
var path = require('path');

var opts = require('nomnom').parse();

var fileToRead = opts[0];
// simply require the file
var loadedFile;
try {
  // use require so that we can work with either pure JSON or fancy js
  loadedFile = require(path.resolve(__dirname, fileToRead));
} catch (err) {
  // well we could not load the file correctly, so send out an error and exit
  console.error(err);
  process.exit(1);
}

// now that we have the loaded file, print out the string version on each line
if (!Array.isArray(loadedFile)) {
  // well, we don't have an array, so just wrap it for now
  loadedFile = [loadedFile];
}

loadedFile.forEach(function(record) {
  console.log(JSON.stringify(record));
});
process.exit(0);
