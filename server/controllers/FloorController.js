const Floor= require('../models/FloorsModel')

const getAllFloors= async (req,res)=>{
    const floors= await Floor.find()
   res.json(floors)
}

module.exports={getAllFloors}