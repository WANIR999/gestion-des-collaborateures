const router= require('express').Router()
const {getAllTeams,createTeams,updateTeam,removeTeam,getOneTeam}=require('../controllers/TeamController')

router.get('/getAll',getAllTeams)
router.post('/create',createTeams)
router.get('/getOne/:id',getOneTeam)
router.put('/update/:id',updateTeam)
router.delete('/remove/:id',removeTeam)




module.exports=router