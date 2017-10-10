'use strict';

const split = require('split');
const fs = require('fs');

fs.createReadStream('somedata.json')
  .pipe(split())
  .on('data', function (line) {debugger
    // Do something with each individual line
    console.log(line)
  });

