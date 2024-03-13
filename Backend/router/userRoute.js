const userController = require('../controller/userController')
const express = require('express')
const router = express()

router.post('/register', userController.Register)

router.post('/login', userController.Login)

module.exports = router