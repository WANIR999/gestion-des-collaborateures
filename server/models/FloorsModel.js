const mongoose=require("mongoose")
const schema= require("../schemas/ModelsSchemas/floorSchema")

const Floor=mongoose.model("floor",schema)
module.exports=Floor