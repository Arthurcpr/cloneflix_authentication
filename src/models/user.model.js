const sequelize = require('sequelize')

const user = db.define('user', {
    id: {
        type: sequelize.INTEGER(50),
        autoIncrement: true,
        primaryKey: true,
    },
    userName: {
        type: sequelize.STRING(50),
        allowNull: false
    },
    password: {
        type: sequelize.STRING(50),
        allowNull: false
    }, 
    createdAt: {
        type: sequelize.DATE,
        allowNull: false
    },
    deletedAt: {
        type: sequelize.DATE,
        allowNull: true
    }
},{
    timestamp: false
})

module.exports = user