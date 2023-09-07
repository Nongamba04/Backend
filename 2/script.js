// Creating a custom backend using NodeJS

// HTTP Module
const http = require('http');

// FS Module
const fs = require('fs');

// Declare hostname and port
const hostname = '127.0.0.1'
const port = 3000;

// Read and sync the content from the given HTML files
const a = fs.readFileSync('Home.html');
const b = fs.readFileSync('index2_1.html');
const c = fs.readFileSync('index2_2.html');


const server = http.createServer((req,res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    url = req.url;
   
    // Redirect the user to the following according to the url mentioned
    // Or else if the url is invalid then give a error message
    if(url == '/'){
        res.end(a);
    }
    else if(url == '/index2_1'){
        res.end(b);
    }
    else if(url == '/index2_2'){
        res.end(c);
    }
    else{
        res.statusCode = 404;
        res.end("<h1>ERROR 404</h1>");
    }
    
});

server.listen(port, hostname, ()=>{
    console.log(`Server running at ${hostname}:${port}`);
});

//  After each server run, press CTRL + C to terminate the server 
// and to restart it once again
