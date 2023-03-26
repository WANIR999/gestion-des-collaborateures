const Workspace= require('../models/workSpacesModel')
const Floor=require('../models/FloorsModel')

const getAllWorkspaces= async (req,res)=>{
    const Workspaces= await Workspace.find().populate({path:'floorId',model:Floor})
   res.json(Workspaces)
}
const createWorkspaces= async (req,res)=>{
    const {body}=req
    const createdWorkspace= await Workspace.create({...body})
   res.json(createdWorkspace)
}
const getOneWorkspace= async (req,res)=>{
    const {id}=req.params
    const workspace= await Workspace.findById({_id:id}).populate({path:'floorId',model:Floor})
   res.json(workspace)
}
const updateWorkspace= async (req,res)=>{
    const {id}=req.params
    const {body}=req
    const workspace= await Workspace.findById({_id:id})
    workspace.name=body.name
    workspace.floorId=body.floor
    workspace.capacity=body.capacity
    await workspace.save()
   res.json(workspace)
}
const removeWorkspace= async (req,res)=>{
    const {id}=req.params
    const workspace= await Workspace.findByIdAndRemove({_id:id})
   res.json(workspace)
}

module.exports={getAllWorkspaces,createWorkspaces,updateWorkspace,removeWorkspace,getOneWorkspace}