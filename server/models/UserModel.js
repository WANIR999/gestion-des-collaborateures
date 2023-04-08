const mongoose=require("mongoose")
const schema= require("../schemas/ModelsSchemas/userSchema")

const User=mongoose.model("user",schema)
module.exports=User