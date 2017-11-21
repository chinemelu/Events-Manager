'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _server = require('../http/server');

var _server2 = _interopRequireDefault(_server);

var _index = require('../models/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_chaiHttp2.default);
_chai2.default.should();
const { expect } = _chai2.default;

describe('Users', () => {
  afterEach(done => {
    _index2.default.User.destroy({
      where: {}
    });
    done();
  });
  describe('POST: /api/v1/users/', () => {
    it('it should not create a user without a username field', done => {
      const user = {
        username: null,
        email: 'testemail@test.com',
        isAdmin: false,
        password: '@testPassword1',
        reEnterPassword: '@testPassword1'
      };
      _chai2.default.request(_server2.default).post('/api/v1/users/').send(user).end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('errors');
        res.body.errors.should.be.a('array');
        res.body.errors[0].should.eql('Username field must not be empty.');
        res.body.errors[1].should.eql('Username must be between 4-15 characters \n' + 'long, it must include at least one lowercase alphabet, and it must consist of \n' + 'only underscores,lowercase alphabets, numbers,\n' + 'and no spaces in between characters.');
        done();
      });
    });

    it('it should not create a user if the username is fewer than 4 characters', done => {
      const user = {
        username: 'tes',
        email: 'testemail@test.com',
        isAdmin: false,
        password: '@testPassword1',
        reEnterPassword: '@testPassword1'
      };
      _chai2.default.request(_server2.default).post('/api/v1/users/').send(user).end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('errors');
        res.body.errors.should.be.a('array');
        res.body.errors[0].should.eql('Username must be between 4-15 characters \n' + 'long, it must include at least one lowercase alphabet, and it must consist of \n' + 'only underscores,lowercase alphabets, numbers,\n' + 'and no spaces in between characters.');
        done();
      });
    });

    it('it should not create a user if the username is greater than 15 characters', done => {
      const user = {
        username: 'thisisalongusername',
        email: 'testemail@test.com',
        isAdmin: false,
        password: '@testPassword1',
        reEnterPassword: '@testPassword1'
      };
      _chai2.default.request(_server2.default).post('/api/v1/users/').send(user).end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('errors');
        res.body.errors.should.be.a('array');
        res.body.errors[0].should.eql('Username must be between 4-15 characters \n' + 'long, it must include at least one lowercase alphabet, and it must consist of \n' + 'only underscores,lowercase alphabets, numbers,\n' + 'and no spaces in between characters.');
        done();
      });
    });

    it('it should not create a user if the username consists of special characters \n' + 'other than an underscore', done => {
      const user = {
        username: '@test',
        email: 'testemail@test.com',
        isAdmin: false,
        password: '@testPassword1',
        reEnterPassword: '@testPassword1'
      };
      _chai2.default.request(_server2.default).post('/api/v1/users/').send(user).end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('errors');
        res.body.errors.should.be.a('array');
        res.body.errors[0].should.eql('Username must be between 4-15 characters \n' + 'long, it must include at least one lowercase alphabet, and it must consist of \n' + 'only underscores,lowercase alphabets, numbers,\n' + 'and no spaces in between characters.');
        done();
      });
    });

    it('it should not create a user if the username contains an uppercase \n' + 'character', done => {
      const user = {
        username: 'Test',
        email: 'testemail@test.com',
        isAdmin: false,
        password: '@testPassword1',
        reEnterPassword: '@testPassword1'
      };
      _chai2.default.request(_server2.default).post('/api/v1/users/').send(user).end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('errors');
        res.body.errors.should.be.a('array');
        res.body.errors[0].should.eql('Username must be between 4-15 characters \n' + 'long, it must include at least one lowercase alphabet, and it must consist of \n' + 'only underscores,lowercase alphabets, numbers,\n' + 'and no spaces in between characters.');
        done();
      });
    });

    it('it should not create a user if the username has space between characters', done => {
      const user = {
        username: 'test password',
        email: 'testemail@test.com',
        isAdmin: false,
        password: '@testPassword1',
        reEnterPassword: '@testPassword1'
      };
      _chai2.default.request(_server2.default).post('/api/v1/users/').send(user).end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('errors');
        res.body.errors.should.be.a('array');
        res.body.errors[0].should.eql('Username must be between 4-15 characters \n' + 'long, it must include at least one lowercase alphabet, and it must consist of \n' + 'only underscores,lowercase alphabets, numbers,\n' + 'and no spaces in between characters.');
        done();
      });
    });

    it('it should not create a user if the email field is empty', done => {
      const user = {
        username: 'test',
        email: null,
        isAdmin: false,
        password: '@testPassword1',
        reEnterPassword: '@testPassword1'
      };
      _chai2.default.request(_server2.default).post('/api/v1/users/').send(user).end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('errors');
        res.body.errors.should.be.a('array');
        res.body.errors[0].should.eql('Email field must not be empty');
        res.body.errors[1].should.eql('The email you entered is invalid, please try again.');
        done();
      });
    });

    it('it should not create a user if the email is of an invalid format', done => {
      const user = {
        username: 'test',
        email: 'testemail@test',
        isAdmin: false,
        password: '@testPassword1',
        reEnterPassword: '@testPassword1'
      };
      _chai2.default.request(_server2.default).post('/api/v1/users/').send(user).end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('errors');
        res.body.errors.should.be.a('array');
        res.body.errors[0].should.eql('The email you entered is invalid, please try again.');
        done();
      });
    });

    it('it should not create a user if there are any uppercase characters \n' + 'contained in the email', done => {
      const user = {
        username: 'test',
        email: 'Testemail@test.com',
        isAdmin: false,
        password: '@testPassword1',
        reEnterPassword: '@testPassword1'
      };
      _chai2.default.request(_server2.default).post('/api/v1/users/').send(user).end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('errors');
        res.body.errors.should.be.a('array');
        res.body.errors[0].should.eql('The alphabets in the email must be lowercase');
        done();
      });
    });

    it('it should not create a user if the password field is empty', done => {
      const user = {
        username: 'test',
        email: 'testemail@test.com',
        isAdmin: false,
        password: null,
        reEnterPassword: null
      };
      _chai2.default.request(_server2.default).post('/api/v1/users/').send(user).end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('errors');
        res.body.errors.should.be.a('array');
        res.body.errors[0].should.eql('Password field must not be empty');
        res.body.errors[1].should.eql('Password must be between 8-100 characters long,\n' + 'and it must include one lowercase character, one uppercase character,\n' + 'a number, and a special character.');
        done();
      });
    });

    it('it should not create a user if the password is fewer than 8 characters', done => {
      const user = {
        username: 'test',
        email: 'testemail@test.com',
        isAdmin: false,
        password: '@Test1',
        reEnterPassword: '@Test1'
      };
      _chai2.default.request(_server2.default).post('/api/v1/users/').send(user).end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('errors');
        res.body.errors.should.be.a('array');
        res.body.errors[0].should.eql('Password must be between 8-100 characters long,\n' + 'and it must include one lowercase character, one uppercase character,\n' + 'a number, and a special character.');
        done();
      });
    });

    it('it should not create a user if the password is greater than 100 characters', done => {
      const user = {
        username: 'test',
        email: 'testemail@test.com',
        isAdmin: false,
        password: 'thispasswordistoolongthatIdontknowhowIwillgetitupto\n' + 'ahundredIwilltrytodomyverybesttogetituptoahundredcharacters.',
        reEnterPassword: '@Test1'
      };
      _chai2.default.request(_server2.default).post('/api/v1/users/').send(user).end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('errors');
        res.body.errors.should.be.a('array');
        res.body.errors[0].should.eql('Password must be between 8-100 characters long,\n' + 'and it must include one lowercase character, one uppercase character,\n' + 'a number, and a special character.');
        res.body.errors[1].should.eql('Passwords do not match, please try again.');
        done();
      });
    });

    it('it should not create a user if the password has no lowercase characters', done => {
      const user = {
        username: 'test',
        email: 'testemail@test.com',
        isAdmin: false,
        password: '@UPPERCASEPASSWORD1',
        reEnterPassword: '@UPPERCASEPASSWORD1'
      };
      _chai2.default.request(_server2.default).post('/api/v1/users/').send(user).end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('errors');
        res.body.errors.should.be.a('array');
        res.body.errors[0].should.eql('Password must be between 8-100 characters long,\n' + 'and it must include one lowercase character, one uppercase character,\n' + 'a number, and a special character.');
        done();
      });
    });

    it('it should not create a user if the password has no uppercase characters', done => {
      const user = {
        username: 'test',
        email: 'testemail@test.com',
        isAdmin: false,
        password: '@lowercasepassword1',
        reEnterPassword: '@lowercasepassword1'
      };
      _chai2.default.request(_server2.default).post('/api/v1/users/').send(user).end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('errors');
        res.body.errors.should.be.a('array');
        res.body.errors[0].should.eql('Password must be between 8-100 characters long,\n' + 'and it must include one lowercase character, one uppercase character,\n' + 'a number, and a special character.');
        done();
      });
    });

    it('it should not create a user if the password does not contain a number', done => {
      const user = {
        username: 'test',
        email: 'testemail@test.com',
        isAdmin: false,
        password: '@UPPERCASElowercasepassword',
        reEnterPassword: '@UPPERCASElowercasepassword'
      };
      _chai2.default.request(_server2.default).post('/api/v1/users/').send(user).end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('errors');
        res.body.errors.should.be.a('array');
        res.body.errors[0].should.eql('Password must be between 8-100 characters long,\n' + 'and it must include one lowercase character, one uppercase character,\n' + 'a number, and a special character.');
        done();
      });
    });

    it('it should not create a user if the password has no special character', done => {
      const user = {
        username: 'test',
        email: 'testemail@test.com',
        isAdmin: false,
        password: 'UPPERCASElowercasepassword1',
        reEnterPassword: 'UPPERCASElowercasepassword1'
      };
      _chai2.default.request(_server2.default).post('/api/v1/users/').send(user).end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('errors');
        res.body.errors.should.be.a('array');
        res.body.errors[0].should.eql('Password must be between 8-100 characters long,\n' + 'and it must include one lowercase character, one uppercase character,\n' + 'a number, and a special character.');
        done();
      });
    });

    it('it should not create a user if the passwords do not match', done => {
      const user = {
        username: 'test',
        email: 'testemail@test.com',
        isAdmin: false,
        password: '@Password1',
        reEnterPassword: '@differentPassword1'
      };
      _chai2.default.request(_server2.default).post('/api/v1/users/').send(user).end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('errors');
        res.body.errors.should.be.a('array');
        res.body.errors[0].should.eql('Passwords do not match, please try again.');
        done();
      });
    });

    it('it should create a user when all fields are completed correctly', done => {
      const user = {
        username: 'test',
        email: 'testemail@test.com',
        isAdmin: false,
        password: '@testPassword1',
        reEnterPassword: '@testPassword1'
      };
      _chai2.default.request(_server2.default).post('/api/v1/users/').send(user).end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('object');
        res.body.should.have.property('message');
        res.body.message.should.eql(`${user.username}, you have successfully created an account`);
        done();
      });
    });
  });

  describe('POST: /api/v1/users/ - duplicate input', () => {
    it('it should not create a user if the username already exists', done => {
      const user = {
        username: 'test',
        email: 'testemail1@test.com',
        password: '@testPassword1',
        reEnterPassword: '@testPassword1'
      };
      const user2 = {
        username: 'test',
        email: 'testemail@test.com',
        password: '@testPassword1',
        reEnterPassword: '@testPassword1'
      };
      _chai2.default.request(_server2.default).post('/api/v1/users/').send(user).end(() => {
        _chai2.default.request(_server2.default).post('/api/v1/users/').send(user2).end((err, res) => {
          res.should.have.status(409);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          res.body.message.should.eql('username already exists');
          done();
        });
      });
    });

    it('it should not POST a user if the email already exists', done => {
      const user = {
        username: 'test100',
        email: 'testemail1@test.com',
        password: '@testPassword1',
        reEnterPassword: '@testPassword1'
      };
      const user2 = {
        username: 'test',
        email: 'testemail1@test.com',
        password: '@testPassword1',
        reEnterPassword: '@testPassword1'
      };
      _chai2.default.request(_server2.default).post('/api/v1/users/').send(user).end(() => {
        _chai2.default.request(_server2.default).post('/api/v1/users/').send(user2).end((err, res) => {
          res.should.have.status(409);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          res.body.message.should.eql('email already exists');
          done();
        });
      });
    });
  });

  describe('POST: /api/v1/users/login', () => {
    it('it should not login a user without a username', done => {
      const user = {
        username: null,
        password: '@testPassword1'
      };
      _chai2.default.request(_server2.default).post('/api/v1/users/login').send(user).end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('message');
        expect(res.body.message).eql('username and password required');
        done();
      });
    });

    it('it should not login a user without a password', done => {
      const user = {
        username: 'testUsername',
        password: null
      };
      _chai2.default.request(_server2.default).post('/api/v1/users/login').send(user).end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('message');
        res.body.message.should.eql('username and password required');
        done();
      });
    });

    it('it should not login a user if the username is incorrect or does \n' + 'not exist', done => {
      const user1 = {
        username: 'testusername',
        email: 'testemail@test.com',
        isAdmin: false,
        password: '@testPassword',
        reEnterPassword: '@testPassword'
      };
      const user2 = {
        username: 'test',
        password: '@testPassword'
      };
      _chai2.default.request(_server2.default).post('/api/v1/users/').send(user1).end(() => {
        _chai2.default.request(_server2.default).post('/api/v1/users/login').send(user2).end((err, res) => {
          res.should.have.status(401);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          res.body.message.should.eql('username or password is incorrect');
          done();
        });
      });
    });

    it('it should not login a user if the password is incorrect', done => {
      const user1 = {
        username: 'testusername',
        email: 'testemail@test.com',
        isAdmin: false,
        password: '@testPassword1',
        reEnterPassword: '@testPassword1'
      };
      const user2 = {
        username: 'testusername',
        password: '@testPassword2'
      };
      _chai2.default.request(_server2.default).post('/api/v1/users').send(user1).end(() => {
        _chai2.default.request(_server2.default).post('/api/v1/users/login').send(user2).end((err, res) => {
          res.should.have.status(401);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          res.body.message.should.eql('username or password is incorrect');
          done();
        });
      });
    });

    it('it should login a user if the details are correct', done => {
      const user1 = {
        username: 'testusername',
        email: 'testemail1@test.com',
        isAdmin: false,
        password: '@testPassword1',
        reEnterPassword: '@testPassword1'
      };
      const user2 = {
        username: 'testusername',
        password: '@testPassword1'
      };
      _chai2.default.request(_server2.default).post('/api/v1/users').send(user1).end(() => {
        _chai2.default.request(_server2.default).post('/api/v1/users/login').send(user2).end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.include.keys('message', 'token');
          res.body.message.should.eql('Token generated. Sign in successful');
          done();
        });
      });
    });
  });
});