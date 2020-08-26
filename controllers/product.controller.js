const productModel = require('../models/product');

class ProductController{
      setData(data){
        var product = new productModel({
            productName:data.name,
            productQuantity:data.quantity,
            productPrice:data.price,
            productDescription:data.description,
            productCategory: data.category
        });  
        
        product.save((err,doc)=>{
            if(err!=undefined)
            {
                console.log('Error in Save! Description: '+err);
            }
            else{
                console.log('Data Saved! '+doc);
            }
        })
    }
    async getData(callback){
        
        await productModel.find({},(err,data)=>{
            callback(err,data);
        });

    }
    async updateData(id, data){
        var product = {
            productName:data.name,
            productQuantity:data.quantity,
            productPrice:data.price,
            productDescription:data.description,
            productCategory: data.category
        };        
        return await productModel.findOneAndUpdate({_id:id},product);
    }

    async deleteData(id){
        let product = new productModel();
        productModel.findById(id,(err,doc)=>{
            if(err!=undefined)
            {
                return;
            }
            product = doc;
        });
        await productModel.deleteOne({_id:id},(err)=>{
            if(err!=undefined)
            {
                console.log('An Error:'+err);
            }
            else{
                console.log('Deleted : '+user);
            }
        })

    }
}

module.exports = ProductController;