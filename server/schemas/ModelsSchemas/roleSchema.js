const mongoose=require("mongoose")

const roleSchema= new mongoose.Schema({
   label:{
        type:String,
   },
})
module.exports=roleSchema