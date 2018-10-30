const express = require('express');
const app = express();
const port = 3000;

const fs = require('fs');
process.stdin.setEncoding('utf8');

let imageString = '';

process.stdin.on('readable', () => {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    const chunkString = chunk.toString();
    if (chunkString.endsWith('EOF\n')) {
        console.log('done');
    } else {
        // console.log('incoming: ', chunkString);
        imageString += chunkString;
        console.log('imageString length:', imageString.length);
    }
  }
});

process.stdin.on('end', () => {
    console.log('process.stdin end, will exit server');
    process.exit();
});


app.get('/img', (req, res) => {
    const imageData = new Buffer(imageString, 'base64');
    res.set("Content-Type", "image/png;base64");
    res.send(imageData);
});

app.post('/img', (req, res) => {
    const imageData = new Buffer(imageString, 'base64');
    fs.writeFile('output.png', imageData, err => {
        if (err) { 
            res.error(err);
            throw new Error('error writing to file: ' + err); 
        } else {
            res.send('ok');
        }
    });

});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

console.log('started server OK');
