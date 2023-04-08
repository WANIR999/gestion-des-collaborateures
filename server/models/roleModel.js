const mongoose=require("mongoose")
const schema= require("../schemas/ModelsSchemas/roleSchema")

const Role=mongoose.model("role",schema)
module.exports=Role