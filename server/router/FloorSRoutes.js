const router= require('express').Router()
const {getAllFloors,createFloors,updateFloor,removeFloor,getOneFloor}=require('../controllers/FloorController')

router.get('/getAll',getAllFloors)
router.post('/create',createFloors)
router.get('/getOne/:id',getOneFloor)
router.put('/update/:id',updateFloor)
router.delete('/remove/:id',removeFloor)




module.exports=router