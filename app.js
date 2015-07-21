#!/usr/bin/env node
var fs = require('fs');

var argv = require('yargs').argv;

var prompt = require('prompt')

var help = require('./app/help');

var zipFile = require('./app/zipfile');

if (argv.help){
  help();
}

if (argv.file){
  zipFile(argv.file);
}

if (argv.csv){
  csvToJson(argv.csv);
}

prompt.override = argv;
prompt.message = '';
prompt.delimiter = '';
prompt.start();

prompt.get('name', function (err, result) {
  printHelloMessage(result.name);
});

function printHelloMessage(name){
  console.log('hello ' + name);
  process.stdout.write('Hello ' + name + ' Again!\n');
  // var bigNum = fs.createReadStream('./app/bigfile');
  // bigNum.pipe(process.stdout)
}

// process.exit(1);
