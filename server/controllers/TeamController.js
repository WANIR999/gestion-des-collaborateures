const Team= require('../models/teamsModel')
const Workspace=require('../models/workSpacesModel')

const getAllTeams= async (req,res)=>{
    const teams= await Team.find().populate({path:'workspaceId',model:Workspace})
   res.json(teams)
}
const createTeams= async (req,res)=>{
    const {body}=req
    const createdTeam= await Team.create({...body})
   res.json(createdTeam)
}
const getOneTeam= async (req,res)=>{
    const {id}=req.params
    const team= await Team.findById({_id:id}).populate({path:'workspaceId',model:Workspace})
   res.json(team)
}
const updateTeam= async (req,res)=>{
    const {id}=req.params
    const {body}=req
    const team= await Team.findById({_id:id})
    team.name=body.name
    team.workspaceId=body.workspace
    team.capacite=body.capacite
    await team.save()
   res.json(team)
}
const removeTeam= async (req,res)=>{
    const {id}=req.params
    const team= await Team.findByIdAndRemove({_id:id})
   res.json(team)
}

module.exports={getAllTeams,createTeams,updateTeam,removeTeam,getOneTeam}