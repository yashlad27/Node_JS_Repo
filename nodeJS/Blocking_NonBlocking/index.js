// Non-blocking, asynchronous way:
const fs = require('fs');

// asynchronous way: node.js starts reading the file in background and will not block the code and immediately move to next line if code

fs.readFile( "/Users/yash/Documents/GitHub/Node_JS_Repo/txt/start.txt", 'utf-8', (err, data1) =>{
    
    fs.readFile(`/Users/yash/Documents/GitHub/Node_JS_Repo/txt/${data1}.txt`, 'utf-8', (err, data2) =>{
            console.log(data2); 

        fs.readFile("/Users/yash/Documents/GitHub/Node_JS_Repo/txt/append.txt", 'utf-8', (err, data3) => {
            console.log(data3);

            fs.writeFile('/Users/yash/Documents/GitHub/Node_JS_Repo/txt/final.txt',`${data2}\n${data3}` ,'utf-8', err=> {
                    console.log("Your file has been written!");
            });
        });
    });
});
// fs.readFile("/Users/yash/Documents/GitHub/Node_JS_Repo/txt/start.txt", 'utf-8', (err, data) => {
//     console.log(data);
// })

console.log('Will Read file!!')