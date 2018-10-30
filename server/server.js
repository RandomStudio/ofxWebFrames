const express = require('express');
const app = express();
const port = 5000;
var server = require('http').Server(app);
var io = require('socket.io')(server);

const fs = require('fs');
process.stdin.setEncoding('utf8');

let imageData = null;

let imageString = null;

process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk !== null) {
        const chunkString = chunk.toString();
        if (chunkString.endsWith('EOF\n')) {
            console.log('done');
            imageData = new Buffer(imageString, 'base64');
            imageString = null;
        } else {
            // console.log('incoming: ', chunkString);
            if (imageString === null) {
                // console.log('first chunk');
                imageString = chunkString;
            } else {
                // console.log('append chunk');
                imageString += chunkString;
            }
            // console.log('imageString length:', imageString.length);
        }
    }
});

process.stdin.on('end', () => {
    console.log('process.stdin end, will exit server');
    process.exit();
});


app.get('/img', (req, res) => {
    res.set("Content-Type", "image/png;base64");
    res.send(imageData);
});

io.on('connection', (socket) => {
    console.log('new client connected:', socket.id);
    socket.emit('welcome', { hello: 'world' });
  });

// app.post('/img', (req, res) => {
//     const imageData = new Buffer(imageString, 'base64');
//     fs.writeFile('output.png', imageData, err => {
//         if (err) { 
//             res.error(err);
//             throw new Error('error writing to file: ' + err); 
//         } else {
//             res.send('ok');
//         }
//     });

// });


server.listen(port, () => console.log(`Example app listening on port ${port}!`))

console.log('started server OK');
