var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCreate: (user) => {
        if (!user.changed('password')) {
          return;
        }
        return _bcrypt2.default.hash(user.password, 10).then((hash) => {
          user.password = hash;
        }).catch((err) => {
          throw err;
        });
      }
    }
  });

  User.associate = (models) => {
    User.hasMany(models.Event, {
      foreignKey: 'userId',
    });
  };
  };

  User.getUsername = (username, callback) => {
    User.findOne({
      where: {
        username
      }

    }).then((result) => {
      callback(result);
    }).catch((err) => {
      throw err;
    });
  };

  User.prototype.verifyPassword = (password, hash, callback) => {
    _bcrypt2.default.compare(password, hash).then((isMatch) => {
      callback(isMatch);
    }).catch((err) => {
      throw err;
    });
  };
  return User;
};
