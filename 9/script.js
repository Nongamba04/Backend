const { urlencoded } = require('body-parser');
const express = require('express');
const path = require('path');
const port = 3000;

// Express
const app = express();
app.use('/static',express.static('static'));
app.use(express.urlencoded());

// PUG
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    res.render('home.pug')
})

app.get('/contact',(req,res)=>{
    res.render('contact.pug')
})

app.listen(port,()=>{
    console.log(`The Server has started in ${port}`);
})