const express = require('express')
const userControllers = require('../controllers/user.controllers')
const jwtMidleware = require('../middleware/jwt.middleware')


const router = express.Router()


router.get(`/user`, [jwtMidleware.verify], userControllers.getById)


module.exports = router
