var fs = require('fs');

module.exports = function(){
  printHelp();
  process.exit(1);
};

function printHelp(){
  var options = {encoding: 'utf8'}
  var message = fs.readFileSync('./app/helpmessage.txt', options);
  console.log(message);
}
