import chai from 'chai';
import chaihttp from 'chai-http';

import server from '../http/server';
import db from '../models/index';

chai.use(chaihttp);
chai.should();
const { expect } = chai;

describe('Users', () => {
  afterEach((done) => {
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
          done();
        });
    });

    it('it should not create a user if the email field is empty', (done) => {
      const user = {
        username: 'test',
        email: null,
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

    it('it should not create a user if the password field is empty', (done) => {
      const user = {
        username: 'test',
        email: 'testemail@test.com',
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
          done();
        });
    });

    it('it should not create a user if the passwords do not match', (done) => {
      const user = {
        username: 'test',
        email: 'testemail@test.com',
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
        password: '@testPassword1',
        reEnterPassword: '@testPassword1'
      };
      const user2 = {
        username: 'testusername',
        password: '@testPassword2'
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
  });

  describe('POST: api/v1/events/', () => {
    it('it should not create an event without a token provided', (done) => {
      const event = {
        title: 'Ikoyi Center',
        description: 'Event description',
        numberofattendees: 150,
        eventtype: 'theatre',
        eventsetup: 'setup',
        additionalcomments: 'Additional comments',
        centerId: 2,
        isPrivate: false,
        imageurl: 'www.google.com',
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
        startdatetime: '27/10/2018 12:00',
        enddatetime: '27/10/2018 13:00'
      };
      chai.request(server)
        .post('/api/v1/events')
        .set('token', 'process.env.TEST_TOKEN')
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

    it('it should not create an event without an integer as input for number of attendees field', (done) => {
      const event = {
        title: 'Turnt birthday',
        description: 'Event description',
        numberofattendees: 'one hundred',
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
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('errors');
          res.body.errors[0].should.eql('Number of attendees input must be an integer');
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
          res.body.errors[0].should.eql('centerId must not be empty');
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
          res.body.errors[0].should.eql('Start date and time must not be empty');
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
          res.body.errors[0].should.eql('End date and time must not be empty');
          done();
        });
    });
  });

  describe('POST: api/v1/centers', () => {
    it('it should not create a center without a name field', (done) => {
      const center = {
        name: null,
        location: 'Center description',
        description: 'description field',
        suitablefor: 'theatre',
        facilities: 'chairs, musical instruments',
        availability: 'available'
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
        availability: 'not available'
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
        availability: 'not available'
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

    it('it should not create a center without a suitable for field', (done) => {
      const center = {
        name: 'obiwandu center',
        location: 'Ketu',
        description: 'Center description',
        suitablefor: null,
        facilities: 'chairs, musical instruments',
        availability: 'not available'
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
        availability: 'not available'
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


    it('it should not create a center without an availability field', (done) => {
      const center = {
        name: 'obiwandu center',
        location: 'Ketu',
        description: 'Center description',
        suitablefor: 'banquet',
        facilities: 'chair, table',
        availability: null
      };
      chai.request(server)
        .post('/api/v1/centers')
        .set({ token: process.env.TEST_TOKEN })
        .send(center)
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.be.a('object');
          expect(res.body).to.have.property('errors');
          expect(res.body.errors[0]).eql('Availability field must not be empty');
          done();
        });
    });
  });

  describe('DELETE: /api/v1/events/:id', () => {
    it('it should provide a status 204 message if the requested DELETE id \n' +
    'does not exist in the database', (done) => {
      chai.request(server)
        .delete('/api/v1/events/1')
        .set({ token: process.env.TEST_TOKEN })
        .end((err, res) => {
          res.should.have.status(204);
          res.body.should.be.a('object');
          done();
        });
    });
  });
});
