// Creating an express app

// Import the module "Express"
const express = require("express");

// Create an express app
const app = express();

// Benefit of mentioning port as 80 is that the post will run even when 80 is not mentioned
const port = 80;

// First parameter mention if the user is on the page represented by "/" then this get function will be set
// The later is a callback fuction(takes two arguments which is req and res) which will run when the first parameter is set.
app.get("/",(req, res) =>{
    res.send("First Express app");
});

// First parameter mention if the user is on the page represented by "/About" then this get function will be set
// The later is a callback fuction(takes two arguments which is req and res) which will run when the first parameter is set.

app.get("/About",(req, res) =>{
    // res.send("First Express app / About ");
    // Status code can also be mentioned(201 - Created, 404 - Not found)
    res.status(201).send("<h3>This is about</h3>");
});

// the next functions are similar to the previous two get functions
app.get("/Hello",(req, res) =>{
    res.send("First Express app / Hello");
});

app.get("/morning",(req, res) =>{
    res.send("First Express app / morning");
});

// Post request in Express
app.post("/post", (req,res)=>{
    res.send("This is a post request");
});

app.listen(port,() =>{
    console.log(`Server started at http://localhost:${port}`);
});

// After starting the server, open postman and write "localhost:80" in the request bar
// You can also try running the localhost in your web browser
