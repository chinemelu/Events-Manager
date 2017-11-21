'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _usercontroller = require('../controllers/usercontroller');

var _usercontroller2 = _interopRequireDefault(_usercontroller);

var _usersignup = require('../errorchecker/usersignup');

var _usersignup2 = _interopRequireDefault(_usersignup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express2.default.Router();

router.post('/', _usersignup2.default, _usercontroller2.default.signup);
router.post('/login', _usercontroller2.default.login);

exports.default = router;