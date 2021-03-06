const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

// eslint-disable-next-line no-unused-vars
function hashPassword (user, options) {
  const SALT_FACTOR = 8

  if (!user.changed('password')) {
    return;
  }

  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
      user.setDataValue('password', hash)
    })
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', { // nombre del DataTypes User
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password:DataTypes.STRING
  }, {
    hooks: {
      // beforeCreate: hashPassword,   Eliminar beforeCreate y beforeUpdate de los ganchos en User.js. Hay error donde la contraseña comparada es hash dos veces
      // beforeUpdate: hashPassword,
      beforeSave: hashPassword
    }
  })

  User.prototype.comparePassword = function (password) {
     return bcrypt.compareAsync(password, this.password)
   }

  return User
}
