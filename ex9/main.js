const needle = require('needle');
const fs = require('fs-extra')


const out = fs.createWriteStream('you-tube.html');
needle.get('https://www.youtube.com/watch?v=gjaQ06AcxRc')
.pipe(out)
.on('finish', function() {
  console.log('Pipe finished!');
});