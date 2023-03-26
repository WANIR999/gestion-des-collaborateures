const router= require('express').Router()
const {getAllWorkspaces,createWorkspaces,updateWorkspace,removeWorkspace,getOneWorkspace}=require('../controllers/WorkspaceController')

router.get('/getAll',getAllWorkspaces)
router.post('/create',createWorkspaces)
router.get('/getOne/:id',getOneWorkspace)
router.put('/update/:id',updateWorkspace)
router.delete('/remove/:id',removeWorkspace)




module.exports=router