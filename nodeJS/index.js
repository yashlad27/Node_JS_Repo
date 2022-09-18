// Reading and Writing the contents of file:

const fs = require('fs');

const textIn = fs.readFileSync('/Users/yash/Documents/GitHub/Node_JS_Repo/txt/input.txt', 'utf-8');

console.log(textIn);

const textOut = `this is a Back tick: ${textIn}.\nCreated on ${Date.now()}`;

fs.writeFileSync('/Users/yash/Documents/GitHub/Node_JS_Repo/txt/output.txt',textOut);
console.log('File-Written');