const router= require('express').Router()
const {getAllRoles,createRoles,updateRole,removeRole,getOneRole}=require('../controllers/RoleController')

router.get('/getAll',getAllRoles)
router.post('/create',createRoles)
router.get('/getOne/:id',getOneRole)
router.put('/update/:id',updateRole)
router.delete('/remove/:id',removeRole)




module.exports=router