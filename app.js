//es5
const mongoose = require('./db');

const userModel = require('./models/users');
const express = require('express');

//es6
//import express from 'express';
const port = 8080;
const app = express();
const userroutes = require('./routes/user');
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(cors());
app.use(bodyParser.json());
app.use(userroutes);

app.listen(port,(err)=>{
    if(err!=undefined)
    {
        console.log('not working because: '+err);
    }
    console.log('working fine!');
});

//let userObj = new UserController();

//userObj.setData({name:'Bhadresh',password:'123',gender:'Male'});
//userObj.setData({name:'Ruchi',password:'123',gender:'Female'});
// userObj.getData((err,data)=>{
//     console.log(data);
// });

//userObj.updateData('5f0f20ad8db95a1a58bbf9da',{name:'bhadresh',password:'123',gender:'Male'});

// userObj.getData((err,data)=>{
//     console.log(data);
// });

//userObj.deleteData('5f0f2138dab0fb0f20bcf70e');
// userObj.getData((err,data)=>{
//     console.log(data);
// });