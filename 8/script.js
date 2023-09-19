// More Tutorial on PUG

const express = require("express");
const path = require("path");
const fs = require("fs");

// Create an express app
const app = express();
app.use(express.urlencoded()); // Helps to bring the data from the 'form' to the Express

// Benefit of mentioning port as 80 is that the post will run even when 80 is not mentioned
const port = 80;

// Set the template engine as PUG
app.set('view engine', 'pug');

// Set the views directory
app.set('views', path.join(__dirname, 'views') );

// PUG demo endpoints

// app.get("/demo",(req, res) =>{
//     res.status(201).render('demo', {title: 'Hey' , message: 'Hello World using PUG'});
// });

app.get('/demo',(req, res) =>{
    const con = "Hello , This is my PUG TEmplate"
    const params = {'title': 'Using plain HTML in PUG' , "content": con }
    res.status(201).render('demo.pug', params);
}); // Rendering a PUG file containing Plain HTML

// app.post('/', (req,res)=>{
//     console.log(req.body);
//     const params = {'message': 'Your form is submitted'}
//     res.status(200).render('demo.pug',params)
// })
app.post('/', (req,res)=>{
    name = req.body.name;
    age = req.body.age;
    amount = req.body.amount;

    let output = `The name of the Client is ${name}, age ${age} purchased the membership of ${amount}.`
    fs.writeFileSync('output.txt', output)
    const params = {'message': 'Your form is submitted'}
    res.status(200).render('demo.pug',params)
})

// Starting the server
app.listen(port,() =>{
    console.log(`Server started at http://localhost:${port}`);
});