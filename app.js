//es5
const mongoose = require('./db');

const userModel = require('./models/users');
const productModel = require('./models/product');
const express = require('express');

//es6
//import express from 'express';
const port = 8080;
const app = express();
const userroutes = require('./routes/user');
const productroutes = require('./routes/product.routes');
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(cors());
app.use(bodyParser.json());
app.use(userroutes);
app.use(productroutes);

app.listen(port,(err)=>{
    if(err!=undefined)
    {
        console.log('not working because: '+err);
    }
    console.log('working fine!');
});
