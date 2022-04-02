const express = require('express')
const sequelize = require('sequelize')

const db = new sequelize('projeto_cloneflix', 'root', 'root', {
    host: '127.0.0.1',
    dialect: 'mysql',
    define: {
        freezeTableName: true,
        timestamps: false
    }
})

/*
db.authenticate().then(() => {
    console.log('Conexão realiazada com sucesso');
}).catch(error => {
    console.log(error);
})
*/

module.exports = db

global.db = db
