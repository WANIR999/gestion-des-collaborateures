const router= require('express').Router()
const {getAllUsers,createUsers,updateUser,removeUser,getOneUser}=require('../controllers/UserController')

router.get('/getAll',getAllUsers)
router.post('/create',createUsers)
router.get('/getOne/:id',getOneUser)
router.put('/update/:id',updateUser)
router.delete('/remove/:id',removeUser)




module.exports=router