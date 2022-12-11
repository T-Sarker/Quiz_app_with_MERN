const express = require('express')
const UserCOntroller = require('../controller/UserController')
const router = express.Router()


router.post('/register', UserCOntroller.create)
router.post('/login', UserCOntroller.login)




module.exports = router