'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _app = require('../../app');

var _app2 = _interopRequireDefault(_app);

var _userRoute = require('../routes/userRoute');

var _userRoute2 = _interopRequireDefault(_userRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_app2.default.use('/api/v1/users', _userRoute2.default);

_app2.default.use((req, res) => {
  res.status(404).json({
    message: 'This page is not available'
  });
});

_app2.default.use((req, res) => {
  res.status(500).json({ message: 'Internal Server Error' });
});

const port = process.env.PORT || 3000;

_app2.default.set('port', port);

const server = _app2.default.listen(port, () => {
  console.log('listening to port 3000');
});

exports.default = server;