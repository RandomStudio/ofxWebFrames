
console.log('started server OK');

process.stdin.setEncoding('utf8');

process.stdin.on('readable', function() {
  var chunk = process.stdin.read();
  if (chunk !== null) {
      console.log('chunk incoming:', chunk.toString());
  }
});

process.stdin.on('end', function() {
  process.exit();
});

