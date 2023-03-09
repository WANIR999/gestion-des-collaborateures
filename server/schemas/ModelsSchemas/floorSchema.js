const mongoose=require("mongoose")

const floorSchema= new mongoose.Schema({
   name:{
        type:Number,
   },
   capacite:{
        type:Number,
   },
   number:{
        type:Number,
   },
})
module.exports=floorSchema