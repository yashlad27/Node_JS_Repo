const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    //console.log(req.url);

    const pathName = req.url;

    if(pathName === '/' || pathName === '/overview') {
        res.end('This is the Overview!');
    }else if (pathName === '/product'){
        res.end('This is the Product!');
    } else if (pathName === '/api'){
        fs.readFile('/Users/yash/Documents/GitHub/Node_JS_Repo/dev-data/data.json', 'utf-8', (err, data) => {
            const product_data = JSON.parse(data);
            console.log(product_data);
        })
    
        res.end('API');
    }
    else {
        res.writeHead(404, {
            'Content-time':'text/html',
            'my-own-header':'hello World'
        });
        res.end('<h1>Page not found!</h1>');
    }
    res.end("Hello from node Farm!");
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to Port Requests on 8000');
})