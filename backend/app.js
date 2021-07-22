
const bodyParser = require('body-parser');
const express = require('express');
// const cors = require('cors');


const Post = require('./models/post');

const app = express();

const mongoose = require('./models/db');

const url = 'http://localhost:4200';

const routes = require('../routes/routes');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS, DELETE,PUT');
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Accept");
    next();
     
}); 



// app.listen(3000);    app.use(cors({origin:'http://localhost:4200'})); app.use(cors({origin: url}));

app.use('/',routes);
app.use('/post', routes);



app.post("/api/posts", (req,res,next) => {
const post = new Post({
title:req.body.title,
content:req.body.content,
email:req.body.email,

});

app.save();

res.status(201).json({
    message: "Post added"
    });
});



module.exports = app;