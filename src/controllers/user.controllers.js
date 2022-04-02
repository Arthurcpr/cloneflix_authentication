const { user } = require('../models/index.js')

const register = async (req, res) => {
    const body = req.body

    const created = await user.create({
        userName: body.userName,
        password: body.password,
        createdAt: new Date().toLocaleDateString(),
        profileId: 1
    })

    return res.json(created) 
}

const getById = async (req, res) => {
    const id = req.userId
    const found = await user.findOne({id})
    return res.json(found)
}

module.exports = {
    register,
    getById
}