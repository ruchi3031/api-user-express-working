const userModel = require('../models/users');

class UserController{
    setData(data){
        var user = new userModel({
            userName:data.name,
            userPassword:data.password,
            gender:data.gender
        });        
        user.save((err,doc)=>{
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
        
        await userModel.find({},(err,data)=>{
            callback(err,data);
        });

    }
    async updateData(id, data){
        var user = {
            userName:data.name,
            userPassword:data.password,
            gender:data.gender
        };        
        return await userModel.findOneAndUpdate({_id:id},user);
        
    }
    async deleteData(id){
        let user = new userModel();
        userModel.findById(id,(err,doc)=>{
            if(err!=undefined)
            {
                return;
            }
            user = doc;
        });
        await userModel.deleteOne({_id:id},(err)=>{
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

module.exports = UserController;