const express = require('express');
const app = express();
const port = 3000;

const fs = require('fs');
const readline = require('readline');

process.stdin.setEncoding('utf8');

let imageString = '';

const rl = readline.createInterface({
    input: process.stdin,
    output: null
  });
  
 rl.on('line', line => {
    if (line === 'EOF') {
        console.log('done');
    } else {
        // console.log('incoming: ', line);
        imageString += line;
        // console.log('imageString length:', imageString.length);
    }
     
 })

// process.stdin.on('readable', () => {
//   var chunk = process.stdin.read();
//   if (chunk !== null) {
//       const chunkString = chunk.toString();
//     if (chunkString === 'EOF') {
//         console.log('done');
//     } else {
//         console.log('incoming: ', chunkString);
//         imageString += chunkString;
//         console.log('imageString length:', imageString.length);
//     }
//   }
// });

process.stdin.on('end', () => {
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
