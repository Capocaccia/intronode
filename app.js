#!/usr/bin/env node
var fs = require('fs');

var argv = require('yargs')
  .argv;

var prompt = require('prompt')

var help = require('./app/help');

if (argv.help){
  help();
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
  //print the big file
  var options = {encoding: 'utf8'}
  var bigNum = fs.readFileSync('./app/bigfile', options);
  console.log(bigNum);
  process.stdout.write('Hello ' + name + ' Again!\n');
}

// process.exit(1);
