const express = require('express');
const routes = express.Router();
const UserController = require ('../controllers/users');
var user = new UserController();
routes.get('/users/',(req,res)=>{ //localhost:8080/users/

    user.getData((err,data)=>{
        res.send(data);
        res.end();
    });

});
routes.post('/user/',(req,res)=>{ //localhost:8080/users/

    user.setData(req.body);
    res.send("Data saved!");
    res.end();
    // user.getData((err,data)=>{
    //     res.send(data);
    //     res.end();
    // });

});

routes.put('/user/:id',(req,res)=>{ //localhost:8080/users/
    console.log(req.params.id);
    user.updateData(req.params.id,req.body);
    res.send("Data saved!");
    res.end();
    // user.getData((err,data)=>{
    //     res.send(data);
    //     res.end();
    // });

});


module.exports = routes;