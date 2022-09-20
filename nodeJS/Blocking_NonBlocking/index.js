// Non-blocking, asynchronous way:
const fs = require('fs');

fs.readFile("/Users/yash/Documents/GitHub/Node_JS_Repo/txt/start.txt", 'utf-8', (err, data) => {
    console.log(data);
})

