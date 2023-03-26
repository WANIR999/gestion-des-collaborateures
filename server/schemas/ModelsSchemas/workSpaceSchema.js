const mongoose=require("mongoose")

const workSpacesSchema= new mongoose.Schema({
   name:{
        type:String,
   },
   floorId:{
     type: mongoose.Schema.Types.ObjectId,
     ref:'floor'
  },
   capacity:{
     type:Number,
  },
})
module.exports=workSpacesSchema