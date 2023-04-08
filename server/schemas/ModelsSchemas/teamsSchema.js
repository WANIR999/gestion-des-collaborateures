const mongoose=require("mongoose")

const teamSchema= new mongoose.Schema({
   name:{
        type:String,
   },
   capacite:{
        type:Number,
   },
 workspaceId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'workspace'
     },
})
module.exports=teamSchema