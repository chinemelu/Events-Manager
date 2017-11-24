import bcrypt from 'bcrypt';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      }
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    hooks: {
      beforeCreate: (user) => {
        return bcrypt.hash(user.password, 10)
          .then((hash) => {
            user.password = hash;
          })
          .catch((err) => {
            throw err;
          });
      }
    },
  });
  User.associate = (models) => {
    User.hasMany(models.Event, {
      foreignKey: 'userId',
    });
    User.hasMany(models.Center, {
      foreignKey: 'userId',
    });
  };


  User.getUsername = (username, callback) => {
    username = username.toLowerCase();
    User.findOne({
      where: {
        username
      }
    })
      .then((result) => {
        callback(result);
      })
      .catch((err) => {
        throw err;
      });
  };

  User.prototype.verifyPassword = (password, hash, callback) => {
    bcrypt.compare(password, hash)
      .then((isMatch) => {
        callback(isMatch);
      })
      .catch((err) => {
        throw err;
      });
  };
  return User;
};
