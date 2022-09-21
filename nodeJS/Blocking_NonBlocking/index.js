// Non-blocking, asynchronous way:
const fs = require('fs');

// asynchronous way: node.js starts reading the file in background and will not block the code and immediately move to next line if code
fs.readFile("/Users/yash/Documents/GitHub/Node_JS_Repo/txt/start.txt", 'utf-8', (err, data) => {
    console.log(data);
})

console.log('Will Read file!!')