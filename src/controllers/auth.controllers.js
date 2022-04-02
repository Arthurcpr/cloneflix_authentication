const user = require('../models/user.model')
const jwt = require('jsonwebtoken')


const auth = async (req, res) => {
    const { userName, password } = req.body
    const found = await user.findOne({userName, password})  // <----- .env duvida

    if (!found) {
        return res.status(401).json({message: 'usuário ou senha inválidos'})
    }
    const token = jwt.sign({id: found.id, profileId: found.profileId}, 'pittinha', {expiresIn: 600})

    return res.json({token})
}

module.exports = {
    auth
}
