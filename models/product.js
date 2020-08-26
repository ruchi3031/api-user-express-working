const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var productSchema = new Schema({
    productName:{type: String, required: true},
    productQuantity:{type:Number, required:true},
    productPrice:{type:String, required:true},
    productDescription:{type:String, required:true},
    productCategory:{type:String, required:true}
}, { 
    collection:"products"
});

var productModel = mongoose.model('products',productSchema);

module.exports = productModel;