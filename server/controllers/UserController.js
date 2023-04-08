const User= require('../models/UserModel')
const Team=require('../models/teamsModel')

const getAllUsers= async (req,res)=>{
    const Users= await User.find()
    .populate({path:'teamId',model:Team})
   res.json(Users)
}
const createUsers= async (req,res)=>{
    const {body}=req
    const test= await User.find({email:body.email})
    if(test.length>0) throw Error('veuillez utilisez un autre email')
    const createdUser= await User.create({...body})
   res.json(createdUser)
}
const getOneUser= async (req,res)=>{
    const {id}=req.params
    const user= await User.findById({_id:id})
    .populate({path:'teamId',model:Team})
   res.json(user)
}
const updateUser= async (req,res)=>{
    const {id}=req.params
    const {body}=req
    const user= await User.findById({_id:id})
    user.name=body.name
    user.email=body.email
    user.teamId=body.teamId
    user.roleId=body.roleId
    await user.save()
   res.json(user)
}
const removeUser= async (req,res)=>{
    const {id}=req.params
    const user= await User.findByIdAndRemove({_id:id})
   res.json(user)
}

module.exports={getAllUsers,createUsers,updateUser,removeUser,getOneUser}