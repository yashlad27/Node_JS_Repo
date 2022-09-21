const http = require('http');

// SERVER :
// Step-01 : Create the server.
// Step-02: Listen to incoming requests.

const server = http.createServer((req, res) =>{
    // .end simplest way of sending back response to the user 
    console.log(req); // req obj shown in terminal
    res.end('Hello From Server!');
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on Port 8000');
}) // listen to incoming req