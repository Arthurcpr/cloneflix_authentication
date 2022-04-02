const express = require('express')
const authControllers = require('../controllers/auth.controllers')

const router = express.Router()

router.post(`/auth`, authControllers.auth)


module.exports = router
    

