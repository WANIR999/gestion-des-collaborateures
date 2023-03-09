const express=require('express')
const app=express()
const db=require('./config/DbConfig')
const cors=require('cors')
const Floors=require("./router/FloorSRoutes")

app.use(cors()) 
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/public',express.static('public'))

app.use('/Floors',Floors)

app.listen(8080,()=>{console.log('connected to server')});

module.exports= app