
// Serving HTML files using nodeJS

// HTTP module
const http = require('http');
// FS module
const fs = require('fs');

// Read and sync the file content from the mention html file
const fileContent = fs.readFileSync('index1.html');

// Create a server
// Callback takes req and res parameters
const server = http.createServer((req,res) =>{

    // It is the status code 200 that means it is all ok
    res.writeHead(200,{'Content-type':'text/html'})
    // An object containing the response headers
    res.end(fileContent);
})

// Port : 80, LocalHost : 127.0.0.1
// Tells the server to listen to this port and host
// Prints the following string if it executes successfully
// 80 is the default HTTP port
server.listen(80, '127.0.0.1', () =>{
    console.log("Listening to the server");
})

// Run the code in terminal using NodeJS which will start a server
// Enter the host address into your web browser and it will start to run