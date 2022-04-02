const profile = require('./profile.model')
const user = require('./user.model')


profile.hasMany(user, {
    foreignKey: 'profileId'
})

user.belongsTo(profile)

module.exports = {
    user,
    profile
};