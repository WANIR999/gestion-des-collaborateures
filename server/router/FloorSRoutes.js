const router= require('express').Router()
const {getAllFloors}=require('../controllers/FloorController')

router.get('/allFloors',getAllFloors)




module.exports=router