const Floor= require('../models/FloorsModel')

const getAllFloors= async (req,res)=>{
    const floors= await Floor.find()
   res.json(floors)
}
const createFloors= async (req,res)=>{
    const {body}=req
    const createdfloor= await Floor.create({...body})
   res.json(createdfloor)
}
const getOneFloor= async (req,res)=>{
    const {id}=req.params
    const floor= await Floor.findById({_id:id})
   res.json(floor)
}
const updateFloor= async (req,res)=>{
    const {id}=req.params
    const {body}=req
    const floor= await Floor.findById({_id:id})
    floor.name=body.name
    floor.number=body.number
    floor.capacite=body.capacite
    await floor.save()
   res.json(floor)
}
const removeFloor= async (req,res)=>{
    const {id}=req.params
    const floor= await Floor.findByIdAndRemove({_id:id})
   res.json(floor)
}

module.exports={getAllFloors,createFloors,updateFloor,removeFloor,getOneFloor}