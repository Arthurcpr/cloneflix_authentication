const express = require('express')
const userControllers = require('../controllers/user.controllers')


const router = express.Router()

router.post(`/register`, userControllers.register)


module.exports = router
    


/*
1 - JWT nas outras API'S, sem autenticação, só verificação. V

5 - Pesquisar sobre .Env no windows 
*/