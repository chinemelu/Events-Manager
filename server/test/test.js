import chai from 'chai';
import chaihttp from 'chai-http';

import server from '../http/server';
import db from '../models/index';

chai.use(chaihttp);
chai.should();
const { expect } = chai;

describe('Users', () => {
  beforeEach((done) => {
    db.User.destroy({
      where: {}
    });
    done();
  });

  describe('POST: /api/v1/users', () => {
    it('it should not create a user without a username field', (done) => {
      const user = {
        username: null,
        email: 'testemail@test.com',
        isAdmin: false,
        password: '@testPassword1',
        reEnterPassword: '@testPassword1'
      };
      chai.request(server)
        .post('/api/v1/users')
        .send(user)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('errors');
          res.body.errors.should.be.a('array');
          res.body.errors[0].should.eql('Username field must not be empty.');
          res.body.errors[1].should.eql('Username must be between 4-15 characters \n' +
          'long, it must include at least one lowercase alphabet, and it must consist of \n' +
          'only underscores,lowercase alphabets, numbers,\n' +
          'and no spaces in between characters.');
          done();
        });
    });

    it('it should not create a user if the username is fewer than 4 characters', (done) => {
      const user = {
        username: 'tes',
        email: 'testemail@test.com',
        isAdmin: false,
        password: '@testPassword1',
        reEnterPassword: '@testPassword1'
      };
      chai.request(server)
        .post('/api/v1/users')
        .send(user)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('errors');
          res.body.errors.should.be.a('array');
          res.body.errors[0].should.eql('Username must be between 4-15 characters \n' +
          'long, it must include at least one lowercase alphabet, and it must consist of \n' +
          'only underscores,lowercase alphabets, numbers,\n' +
          'and no spaces in between characters.');
          done();
        });
    });

    it('it should not create a user if the username is greater than 15 characters', (done) => {
      const user = {
        username: 'thisisalongusername',
        email: 'testemail@test.com',
        isAdmin: false,
        password: '@testPassword1',
        reEnterPassword: '@testPassword1'
      };
      chai.request(server)
        .post('/api/v1/users')
        .send(user)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('errors');
          res.body.errors.should.be.a('array');
          res.body.errors[0].should.eql('Username must be between 4-15 characters \n' +
          'long, it must include at least one lowercase alphabet, and it must consist of \n' +
          'only underscores,lowercase alphabets, numbers,\n' +
          'and no spaces in between characters.');
          done();
        });
    });

    it('it should not create a user if the username consists of special characters \n' +
    'other than an underscore', (done) => {
      const user = {
        username: '@test',
        email: 'testemail@test.com',
        isAdmin: false,
        password: '@testPassword1',
        reEnterPassword: '@testPassword1'
      };
      chai.request(server)
        .post('/api/v1/users')
        .send(user)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('errors');
          res.body.errors.should.be.a('array');
          res.body.errors[0].should.eql('Username must be between 4-15 characters \n' +
          'long, it must include at least one lowercase alphabet, and it must consist of \n' +
          'only underscores,lowercase alphabets, numbers,\n' +
          'and no spaces in between characters.');
          done();
        });
    });

    it('it should not create a user if the username contains an uppercase \n' +
    'character', (done) => {
      const user = {
        username: 'Test',
        email: 'testemail@test.com',
        isAdmin: false,
        password: '@testPassword1',
        reEnterPassword: '@testPassword1'
      };
      chai.request(server)
        .post('/api/v1/users')
        .send(user)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('errors');
          res.body.errors.should.be.a('array');
          res.body.errors[0].should.eql('Username must be between 4-15 characters \n' +
          'long, it must include at least one lowercase alphabet, and it must consist of \n' +
          'only underscores,lowercase alphabets, numbers,\n' +
          'and no spaces in between characters.');
          done();
        });
    });

    it('it should not create a user if the username has space between characters', (done) => {
      const user = {
        username: 'test password',
        email: 'testemail@test.com',
        isAdmin: false,
        password: '@testPassword1',
        reEnterPassword: '@testPassword1'
      };
      chai.request(server)
        .post('/api/v1/users')
        .send(user)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('errors');
          res.body.errors.should.be.a('array');
          res.body.errors[0].should.eql('Username must be between 4-15 characters \n' +
          'long, it must include at least one lowercase alphabet, and it must consist of \n' +
          'only underscores,lowercase alphabets, numbers,\n' +
          'and no spaces in between characters.');
          done();
        });
    });

    it('it should not create a user if the email field is empty', (done) => {
      const user = {
        username: 'test',
        email: null,
        isAdmin: false,
        password: '@testPassword1',
        reEnterPassword: '@testPassword1'
      };
      chai.request(server)
        .post('/api/v1/users')
        .send(user)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('errors');
          res.body.errors.should.be.a('array');
          res.body.errors[0].should.eql('Email field must not be empty');
          res.body.errors[1].should.eql('The email you entered is invalid, please try again.');
          done();
        });
    });

    it('it should not create a user if the email is of an invalid format', (done) => {
      const user = {
        username: 'test',
        email: 'testemail@test',
        isAdmin: false,
        password: '@testPassword1',
        reEnterPassword: '@testPassword1'
      };
      chai.request(server)
        .post('/api/v1/users')

        .send(user)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('errors');
          res.body.errors.should.be.a('array');
          res.body.errors[0].should.eql('The email you entered is invalid, please try again.');
          done();
        });
    });

    it('it should not create a user if there are any uppercase characters \n' +
       'contained in the email', (done) => {
      const user = {
        username: 'test',
        email: 'Testemail@test.com',
        isAdmin: false,
        password: '@testPassword1',
        reEnterPassword: '@testPassword1'
      };
      chai.request(server)
        .post('/api/v1/users')
        .send(user)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('errors');
          res.body.errors.should.be.a('array');
          res.body.errors[0].should.eql('The alphabets in the email must be lowercase');
          done();
        });
    });

    it('it should not create a user if the password field is empty', (done) => {
      const user = {
        username: 'test',
        email: 'testemail@test.com',
        isAdmin: false,
        password: null,
        reEnterPassword: null,
      };
      chai.request(server)
        .post('/api/v1/users')
        .send(user)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('errors');
          res.body.errors.should.be.a('array');
          res.body.errors[0].should.eql('Password field must not be empty');
          res.body.errors[1].should.eql('Password must be between 8-100 characters long,\n' +
            'and it must include one lowercase character, one uppercase character,\n' +
            'a number, and a special character.');
          done();
        });
    });

    it('it should not create a user if the password is fewer than 8 characters', (done) => {
      const user = {
        username: 'test',
        email: 'testemail@test.com',
        isAdmin: false,
        password: '@Test1',
        reEnterPassword: '@Test1'
      };
      chai.request(server)
        .post('/api/v1/users')
        .send(user)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('errors');
          res.body.errors.should.be.a('array');
          res.body.errors[0].should.eql('Password must be between 8-100 characters long,\n' +
            'and it must include one lowercase character, one uppercase character,\n' +
            'a number, and a special character.');
          done();
        });
    });

    it('it should not create a user if the password is greater than 100 characters', (done) => {
      const user = {
        username: 'test',
        email: 'testemail@test.com',
        isAdmin: false,
        password: 'thispasswordistoolongthatIdontknowhowIwillgetitupto\n' +
          'ahundredIwilltrytodomyverybesttogetituptoahundredcharacters.',
        reEnterPassword: '@Test1'
      };
      chai.request(server)
        .post('/api/v1/users')
        .send(user)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('errors');
          res.body.errors.should.be.a('array');
          res.body.errors[0].should.eql('Password must be between 8-100 characters long,\n' +
            'and it must include one lowercase character, one uppercase character,\n' +
            'a number, and a special character.');
          res.body.errors[1].should.eql('Passwords do not match, please try again.');
          done();
        });
    });

    it('it should not create a user if the password has no lowercase characters', (done) => {
      const user = {
        username: 'test',
        email: 'testemail@test.com',
        isAdmin: false,
        password: '@UPPERCASEPASSWORD1',
        reEnterPassword: '@UPPERCASEPASSWORD1'
      };
      chai.request(server)
        .post('/api/v1/users')
        .send(user)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('errors');
          res.body.errors.should.be.a('array');
          res.body.errors[0].should.eql('Password must be between 8-100 characters long,\n' +
            'and it must include one lowercase character, one uppercase character,\n' +
            'a number, and a special character.');
          done();
        });
    });

    it('it should not create a user if the password has no uppercase characters', (done) => {
      const user = {
        username: 'test',
        email: 'testemail@test.com',
        isAdmin: false,
        password: '@lowercasepassword1',
        reEnterPassword: '@lowercasepassword1'
      };
      chai.request(server)
        .post('/api/v1/users')
        .send(user)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('errors');
          res.body.errors.should.be.a('array');
          res.body.errors[0].should.eql('Password must be between 8-100 characters long,\n' +
            'and it must include one lowercase character, one uppercase character,\n' +
            'a number, and a special character.');
          done();
        });
    });

    it('it should not create a user if the password does not contain a number', (done) => {
      const user = {
        username: 'test',
        email: 'testemail@test.com',
        isAdmin: false,
        password: '@UPPERCASElowercasepassword',
        reEnterPassword: '@UPPERCASElowercasepassword'
      };
      chai.request(server)
        .post('/api/v1/users')
        .send(user)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('errors');
          res.body.errors.should.be.a('array');
          res.body.errors[0].should.eql('Password must be between 8-100 characters long,\n' +
            'and it must include one lowercase character, one uppercase character,\n' +
            'a number, and a special character.');
          done();
        });
    });

    it('it should not create a user if the password has no special character', (done) => {
      const user = {
        username: 'test',
        email: 'testemail@test.com',
        isAdmin: false,
        password: 'UPPERCASElowercasepassword1',
        reEnterPassword: 'UPPERCASElowercasepassword1'
      };
      chai.request(server)
        .post('/api/v1/users')
        .send(user)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('errors');
          res.body.errors.should.be.a('array');
          res.body.errors[0].should.eql('Password must be between 8-100 characters long,\n' +
            'and it must include one lowercase character, one uppercase character,\n' +
            'a number, and a special character.');
          done();
        });
    });

    it('it should not create a user if the passwords do not match', (done) => {
      const user = {
        username: 'test',
        email: 'testemail@test.com',
        isAdmin: false,
        password: '@Password1',
        reEnterPassword: '@differentPassword1'
      };
      chai.request(server)
        .post('/api/v1/users')
        .send(user)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('errors');
          res.body.errors.should.be.a('array');
          res.body.errors[0].should.eql('Passwords do not match, please try again.');
          done();
        });
    });

    it('it should create a user when all fields are completed correctly', (done) => {
      const user = {
        username: 'test',
        email: 'testemail@test.com',
        isAdmin: false,
        password: '@testPassword1',
        reEnterPassword: '@testPassword1'
      };
      chai.request(server)
        .post('/api/v1/users')
        .send(user)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          res.body.message.should.eql(`${user.username}, you have successfully created an account`);
          done();
        });
    });
  });

  describe('POST: /api/v1/users - duplicate input', () => {
    it('it should not create a user if the username already exists', (done) => {
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
      chai.request(server)
        .post('/api/v1/users')
        .send(user)
        .end(() => {
          chai.request(server)
            .post('/api/v1/users')
            .send(user2)
            .end((err, res) => {
              res.should.have.status(409);
              res.body.should.be.a('object');
              res.body.should.have.property('message');
              res.body.message.should.eql('username already exists');
              done();
            });
        });
    });

    it('it should not POST a user if the email already exists', (done) => {
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
      chai.request(server)
        .post('/api/v1/users')
        .send(user)
        .end(() => {
          chai.request(server)
            .post('/api/v1/users')
            .send(user2)
            .end((err, res) => {
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
    it('it should not login a user without a username', (done) => {
      const user = {
        username: null,
        password: '@testPassword1',
      };
      chai.request(server)
        .post('/api/v1/users/login')
        .send(user)
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.be.a('object');
          expect(res.body).to.have.property('message');
          expect(res.body.message).eql('username and password required');
          done();
        });
    });

    it('it should not login a user without a password', (done) => {
      const user = {
        username: 'testUsername',
        password: null,
      };
      chai.request(server)
        .post('/api/v1/users/login')
        .send(user)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          res.body.message.should.eql('username and password required');
          done();
        });
    });

    it('it should not login a user if the username is incorrect or does \n' +
      'not exist', (done) => {
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
      chai.request(server)
        .post('/api/v1/users')
        .send(user1)
        .end(() => {
          chai.request(server)
            .post('/api/v1/users/login')
            .send(user2)
            .end((err, res) => {
              res.should.have.status(401);
              res.body.should.be.a('object');
              res.body.should.have.property('message');
              res.body.message.should.eql('username or password is incorrect');
              done();
            });
        });
    });

    it('it should not login a user if the password is incorrect', (done) => {
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
      chai.request(server)
        .post('/api/v1/users/signup')
        .send(user1)
        .end(() => {
          chai.request(server)
            .post('/api/v1/users/login')
            .send(user2)
            .end((err, res) => {
              res.should.have.status(401);
              res.body.should.be.a('object');
              res.body.should.have.property('message');
              res.body.message.should.eql('username or password is incorrect');
              done();
            });
        });
    });

    it('it should login a user if the details are correct', (done) => {
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
      chai.request(server)
        .post('/api/v1/users')
        .send(user1)
        .end(() => {
          chai.request(server)
            .post('/api/v1/users/login')
            .send(user2)
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.include.keys('message', 'token');
              res.body.message.should.eql('Token generated. Sign in successful');
              done();
            });
        });
    });
  });

  describe('POST: api/v1/events/', () => {
    it('it should not create an event without a token provided', (done) => {
      const event = {
        title: null,
        description: 'Event description',
        numberofattendees: 150,
        eventtype: 'theatre',
        eventsetup: 'setup',
        additionalcomments: 'Additional comments',
        centerId: 2,
        isPrivate: false,
        imageurl: '',
        userId: 2,
        startdatetime: '27/10/2018 12:00',
        enddatetime: '27/10/2018 13:00'
      };
      chai.request(server)
        .post('/api/v1/events')
        .send(event)
        .end((err, res) => {
          expect(res).to.have.status(403);
          expect(res.body).to.be.a('object');
          expect(res.body).to.have.property('message');
          expect(res.body).to.have.property('success');
          expect(res.body.success).to.eql('false');
          expect(res.body.message).eql('No token provided');
          done();
        });
    });
    
    it('it should not create an event without a title field', (done) => {
      const event = {
        title: null,
        description: 'Event description',
        numberofattendees: 150,
        eventtype: 'theatre',
        eventsetup: 'setup',
        additionalcomments: 'Additional comments',
        centerId: 2,
        isPrivate: false,
        imageurl: '',
        userId: 2,
        startdatetime: '27/10/2018 12:00',
        enddatetime: '27/10/2018 13:00'
      };
      chai.request(server)
        .post('/api/v1/events')
        .set({ token: process.env.TEST_TOKEN })
        .send(event)
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.be.a('object');
          expect(res.body).to.have.property('errors');
          expect(res.body.errors[0]).eql('Title field must not be empty');
          done();
        });
    });

    it('it should not create an event without a description field', (done) => {
      const event = {
        title: 'Turnt birthday',
        description: null,
        numberofattendees: 150,
        eventtype: 'theatre',
        eventsetup: 'setup',
        additionalcomments: 'Additional comments',
        centerId: 2,
        isPrivate: false,
        imageurl: '',
        userId: 2,
        startdatetime: '27/10/2018 12:00',
        enddatetime: '27/10/2018 13:00'
      };
      chai.request(server)
        .post('/api/v1/events')
        .set({ token: process.env.TEST_TOKEN })
        .send(event)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('errors');
          res.body.errors[0].should.eql('Description field must not be empty');
          done();
        });
    });

    it('it should not create an event without a number of attendees field', (done) => {
      const event = {
        title: 'Turnt birthday',
        description: 'Event description',
        numberofattendees: null,
        eventtype: 'theatre',
        eventsetup: 'setup',
        additionalcomments: 'Additional comments',
        centerId: 2,
        isPrivate: false,
        imageurl: '',
        userId: 2,
        startdatetime: '27/10/2018 12:00',
        enddatetime: '27/10/2018 13:00'
      };
      chai.request(server)
        .post('/api/v1/events')
        .set({ token: process.env.TEST_TOKEN })
        .send(event)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('errors');
          res.body.errors[0].should.eql('Number of attendees field must not be empty');
          done();
        });
    });

    it('it should not create an event if an events centre is not selected', (done) => {
      const event = {
        title: 'Turnt birthday',
        description: 'Event description',
        numberofattendees: 25,
        eventtype: 'theatre',
        eventsetup: 'setup',
        additionalcomments: 'Additional comments',
        centerId: null,
        isPrivate: false,
        imageurl: '',
        userId: 2,
        startdatetime: '27/10/2018 12:00',
        enddatetime: '27/10/2018 13:00'
      };
      chai.request(server)
        .post('/api/v1/events')
        .set({ token: process.env.TEST_TOKEN })
        .send(event)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('errors');
          res.body.errors[0].should.eql('Number of attendees field must not be empty');
          done();
        });
    });

    it('it should not create an event without a start date and time field', (done) => {
      const event = {
        title: 'Turnt birthday',
        description: 'Event description',
        numberofattendees: 100,
        eventtype: 'theatre',
        eventsetup: 'setup',
        additionalcomments: 'Additional comments',
        centerId: 2,
        isPrivate: false,
        imageurl: '',
        userId: 2,
        startdatetime: null,
        enddatetime: '27/10/2018 13:00'
      };
      chai.request(server)
        .post('/api/v1/events')
        .set({ token: process.env.TEST_TOKEN })
        .send(event)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('errors');
          res.body.errors[0].should.eql('The start date and time must not be empty');
          done();
        });
    });

    it('it should not create an event without an end date and time', (done) => {
      const event = {
        title: 'Turnt birthday',
        description: 'Event description',
        numberofattendees: 100,
        eventtype: 'theatre',
        eventsetup: 'setup',
        additionalcomments: 'Additional comments',
        centerId: 2,
        isPrivate: false,
        userId: 2,
        imageurl: '',
        startdatetime: '27/10/2018 12:00',
        enddatetime: null
      };
      chai.request(server)
        .post('/api/v1/events')
        .set({ token: process.env.TEST_TOKEN })
        .send(event)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('errors');
          res.body.errors[0].should.eql('The end date and time must not be empty');
          done();
        });
    });

    it('it should create an event if the necessary details are filled', (done) => {
      const event = {
        title: 'Turnt birthday',
        description: 'Event description',
        numberofattendees: 100,
        eventtype: 'theatre',
        eventsetup: 'setup',
        additionalcomments: 'Additional comments',
        centerId: 2,
        isPrivate: false,
        imageurl: '',
        startdatetime: '27/10/2018 12:00',
        enddatetime: '27/10/2018 13:00'
      };
      chai.request(server)
        .post('/api/v1/events')
        .set({ token: process.env.TEST_TOKEN })
        .send(event)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('message')
            .eql('You have successfully added an event');
          res.body.data.should.have.property('title');
          res.body.data.should.have.property('description');
          res.body.data.should.have.property('numberofattendees');
          res.body.data.should.have.property('eventtype');
          res.body.data.should.have.property('eventsetup');
          res.body.data.should.have.property('additionalcomments');
          res.body.data.should.have.property('centreId');
          res.body.data.should.have.property('isPrivate');
          res.body.data.should.have.property('imageurl');
          res.body.data.should.have.property('startdatetime');
          res.body.data.should.have.property('enddatetime');
          done();
        });
    });

    it('it should not create an event without a title field', (done) => {
      const event = {
        title: null,
        description: 'Event description',
        numberofattendees: 150,
        eventtype: 'theatre',
        eventsetup: 'setup',
        additionalcomments: 'Additional comments',
        centerId: 2,
        isPrivate: false,
        imageurl: '',
        userId: 2,
        startdatetime: '27/10/2018 12:00',
        enddatetime: '27/10/2018 13:00'
      };
      chai.request(server)
        .post('/api/v1/events')
        .set({ token: process.env.TEST_TOKEN })
        .send(event)
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.be.a('object');
          expect(res.body).to.have.property('errors');
          expect(res.body.errors[0]).eql('Title field must not be empty');
          done();
        });
    });
  });

  describe('POST: api/v1/centers', () => {
    it('it should not create a center without a token provided', (done) => {
      const center = {
        name: null,
        location: 'Center description',
        description: 'description field',
        suitablefor: 'theatre',
        facilities: 'chairs, musical instruments',
        userId: 2
      };
      chai.request(server)
        .post('/api/v1/events')
        .send(center)
        .end((err, res) => {
          expect(res).to.have.status(403);
          expect(res.body).to.be.a('object');
          expect(res.body).to.have.property('message');
          expect(res.body).to.have.property('success');
          expect(res.body.success).to.eql('false');
          expect(res.body.message).eql('No token provided');
          done();
        });
    });

    it('it should not create a center without a name field', (done) => {
      const center = {
        name: null,
        location: 'Center description',
        description: 'description field',
        suitablefor: 'theatre',
        facilities: 'chairs, musical instruments',
        userId: 2
      };
      chai.request(server)
        .post('/api/v1/centers')
        .set({ token: process.env.TEST_TOKEN })
        .send(center)
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.be.a('object');
          expect(res.body).to.have.property('errors');
          expect(res.body.errors[0]).eql('Name field must not be empty');
          done();
        });
    });

    it('it should not create a center without a location field', (done) => {
      const center = {
        name: 'obiwandu center',
        location: null,
        description: 150,
        suitablefor: 'theatre',
        facilities: 'chairs, musical instruments',
        userId: 2
      };
      chai.request(server)
        .post('/api/v1/centers')
        .set({ token: process.env.TEST_TOKEN })
        .send(center)
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.be.a('object');
          expect(res.body).to.have.property('errors');
          expect(res.body.errors[0]).eql('Location field must not be empty');
          done();
        });
    });

    it('it should not create a center without a description field', (done) => {
      const center = {
        name: 'obiwandu center',
        location: 'Ketu',
        description: null,
        suitablefor: 'theatre',
        facilities: 'chairs, musical instruments',
        userId: 2
      };
      chai.request(server)
        .post('/api/v1/centers')
        .set({ token: process.env.TEST_TOKEN })
        .send(center)
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.be.a('object');
          expect(res.body).to.have.property('errors');
          expect(res.body.errors[0]).eql('Description field must not be empty');
          done();
        });
    });

    it('it should not create a center without a suotable for field', (done) => {
      const center = {
        name: 'obiwandu center',
        location: 'Ketu',
        description: 'Center description',
        suitablefor: null,
        facilities: 'chairs, musical instruments',
        userId: 2
      };
      chai.request(server)
        .post('/api/v1/centers')
        .set({ token: process.env.TEST_TOKEN })
        .send(center)
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.be.a('object');
          expect(res.body).to.have.property('errors');
          expect(res.body.errors[0]).eql('Suitable for field must not be empty');
          done();
        });
    });

    it('it should not create a center without a facilities field', (done) => {
      const center = {
        name: 'obiwandu center',
        location: 'Ketu',
        description: 'Center description',
        suitablefor: 'banquet',
        facilities: null,
        userId: 2
      };
      chai.request(server)
        .post('/api/v1/centers')
        .set({ token: process.env.TEST_TOKEN })
        .send(center)
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.be.a('object');
          expect(res.body).to.have.property('errors');
          expect(res.body.errors[0]).eql('Facilities field must not be empty');
          done();
        });
    });

    it('it should create a center if the necessary details are filled', (done) => {
      const center = {
        name: 'Chuba Okadigbo Center',
        location: 'Ikeja',
        description: 'Great place for a wedding.',
        suitablefor: 'Wedding',
        facilities: 'chairs, tables, musical instruments',
        userId: 2
      };
      chai.request(server)
        .post('/api/v1/centers')
        .set({ token: process.env.TEST_TOKEN })
        .send(center)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('message')
            .eql('You have successfully added a center');
          res.body.data.should.have.property('name');
          res.body.data.should.have.property('location');
          res.body.data.should.have.property('description');
          res.body.data.should.have.property('suitablefor');
          res.body.data.should.have.property('facilities');
          res.body.data.should.have.property('userId');
          done();
        });
    });
  });
});
