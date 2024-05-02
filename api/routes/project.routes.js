const {Router} = require('express')
const ctr = require('../controllers/project.controller')
const router = Router()

// Admin
// /api/projects/
router.post('/admin/create', ctr.create)
router.get('/admin/:id', ctr.getById)
router.put('/admin/:id', ctr.update)
router.delete('/admin/:id', ctr.remove)


// Base
// /api/projects
router.get('/', ctr.getAll)

module.exports = router
