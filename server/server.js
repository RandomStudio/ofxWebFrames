const express = require('express');
const app = express();
const port = 3000;

const fs = require('fs');

process.stdin.setEncoding('utf8');

let imageData = null;

process.stdin.on('readable', () => {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    console.log('chunk incoming:', chunk.toString());
    // imageData += chunk;
    let data = new Buffer(chunk, 'base64');
    if (imageData === null) {
        imageData = data;
    } else {
        imageData = Buffer.concat([imageData, data]);
    }
    // fs.appendFile('output.png', data, err => {
    //     if (err) { throw new Error('error appending to file: ' + err); }
    // });
    console.log('imageData legnth:', imageData.length);
  }
});

process.stdin.on('end', () => {
  process.exit();
});


app.get('/img', (req, res) => {
    // const data = new Buffer(imageData, 'base64');
    res.set("Content-Type", "image/png");
    res.end(imageData, 'binary'); 
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`))

console.log('started server OK');
