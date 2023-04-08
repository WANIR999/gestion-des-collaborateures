const Role= require('../models/roleModel')

const getAllRoles= async (req,res)=>{
    const Roles= await Role.find()
   res.json(Roles)
}
const createRoles= async (req,res)=>{
    const {body}=req
    const createdRole= await Role.create({...body})
   res.json(createdRole)
}
const getOneRole= async (req,res)=>{
    const {id}=req.params
    const role= await Role.findById({_id:id})
   res.json(role)
}
const updateRole= async (req,res)=>{
    const {id}=req.params
    const {body}=req
    const role= await Role.findById({_id:id})
    role.label=body.label
    await role.save()
   res.json(role)
}
const removeRole= async (req,res)=>{
    const {id}=req.params
    const role= await Role.findByIdAndRemove({_id:id})
   res.json(role)
}

module.exports={getAllRoles,createRoles,updateRole,removeRole,getOneRole}