const mongoose=require("mongoose")

const floorSchema= new mongoose.Schema({
   name:{
        type:String,
   },
   capacite:{
        type:Number,
   },
   number:{
        type:Number,
   },
})
module.exports=floorSchema