const mongoose = require('mongoose');

const connectionString = "mongodb://localhost:27017/mydemo";

mongoose.connect(connectionString, 
    {
        useNewUrlParser:true,
        useUnifiedTopology: true
    },
    (err)=>{
    if(err != undefined)
    {
        console.log("Error in connection: "+err);
    }
    else{
        console.log("Connection done!");
    }
})

module.exports = mongoose