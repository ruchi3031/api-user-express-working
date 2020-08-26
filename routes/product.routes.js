const express = require('express');
const routes = express.Router();
const ProductController = require ('../controllers/product.controller');
var product = new ProductController();
routes.get('/products/',(req,res)=>{ 

    product.getData((err,data)=>{
        res.send(data);
        res.end();
    });

});
routes.post('/product/',(req,res)=>{ 

    product.setData(req.body);
    res.send("Data saved!");
    res.end();
});

routes.put('/product/:id',(req,res)=>{ 
    console.log(req.params.id);
    product.updateData(req.params.id,req.body);
    res.send("Data saved!");
    res.end();
});

routes.delete('/product/:id',(req,res)=> {
    console.log(req.params.id);
    product.deleteData(req.params.id,req.body);
    res.send("Data Deleted!");
    res.end();
});
module.exports = routes;