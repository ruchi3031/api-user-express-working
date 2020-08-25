const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    userName:{type: String, required: true},
    userPassword:{type:String, required:true},
    gender:{type:String, required:true}
}, { 
    collection:"users"
});

var userModel = mongoose.model('users',userSchema);

module.exports = userModel;

