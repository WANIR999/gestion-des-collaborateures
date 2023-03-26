const mongoose=require("mongoose")
const schema= require("../schemas/ModelsSchemas/workSpaceSchema")

const Workspace=mongoose.model("workspace",schema)
module.exports=Workspace