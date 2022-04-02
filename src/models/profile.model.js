const sequelize = require('sequelize')

const profile = db.define('profile', {
    id: {
        type: sequelize.INTEGER(50),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    description: {
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
}, {
    timestamps: false
})

module.exports = profile