const mongoose=require("mongoose")
const schema= require("../schemas/ModelsSchemas/teamsSchema")

const Team=mongoose.model("team",schema)
module.exports=Team