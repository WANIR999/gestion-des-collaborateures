const mongoose=require("mongoose")

const userSchema= new mongoose.Schema({
   name:{
        type:String,
   },
   email:{
        type:String,
   },
 teamId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'team'
     },
 roleId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'role'
     },
})
module.exports=userSchema