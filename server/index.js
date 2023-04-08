const express=require('express')
const app=express()
const db=require('./config/DbConfig')
const cors=require('cors')
const Floors=require("./router/FloorSRoutes")
const WorkSpaces=require("./router/WorkSpaceRoutes")
const Teams=require("./router/teamsRoutes")
const Roles=require("./router/RoleRoutes")
const Users=require("./router/UserRoutes")

app.use(cors()) 
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/public',express.static('public'))

app.use('/Floors',Floors)
app.use('/WorkSpaces',WorkSpaces)
app.use('/Teams',Teams)
app.use('/Roles',Roles)
app.use('/Users',Users)

app.listen(8080,()=>{console.log('connected to server')});

module.exports= app