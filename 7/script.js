// Static files & installing Pug Templates

// Static files are those files which the admin wants to keep publicly in the server
// i.e, any user can access them directly without any login credentials


const express = require("express");
const path = require("path");

// Create an express app
const app = express();

// Benefit of mentioning port as 80 is that the post will run even when 80 is not mentioned
const port = 80;

// For serving static files
// '/static 'represents the folder in which the static files are located
app.use('/static',express.static('static'));

// Set the template engine as PUG
app.set('view engine', 'pug');

// Set the views directory
app.set('views', path.join(__dirname, 'views') );

// PUG demo endpoint
app.get("/demo",(req, res) =>{
    res.status(201).render('demo', {title: 'Hey' , message: 'Hello World using PUG'});
});


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
