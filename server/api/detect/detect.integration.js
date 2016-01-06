'use strict';

var app = require('../..');
var request = require('supertest');

var newDetect;

describe('Detect API:', function() {

  describe('GET /api/detects', function() {
    var detects;

    beforeEach(function(done) {
      request(app)
        .get('/api/detects')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          detects = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      detects.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/detects', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/detects')
        .send({
          name: 'New Detect',
          info: 'This is the brand new detect!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          newDetect = res.body;
          done();
        });
    });

    it('should respond with the newly created detect', function() {
      newDetect.name.should.equal('New Detect');
      newDetect.info.should.equal('This is the brand new detect!!!');
    });

  });

  describe('GET /api/detects/:id', function() {
    var detect;

    beforeEach(function(done) {
      request(app)
        .get('/api/detects/' + newDetect._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          detect = res.body;
          done();
        });
    });

    afterEach(function() {
      detect = {};
    });

    it('should respond with the requested detect', function() {
      detect.name.should.equal('New Detect');
      detect.info.should.equal('This is the brand new detect!!!');
    });

  });

  describe('PUT /api/detects/:id', function() {
    var updatedDetect

    beforeEach(function(done) {
      request(app)
        .put('/api/detects/' + newDetect._id)
        .send({
          name: 'Updated Detect',
          info: 'This is the updated detect!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedDetect = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedDetect = {};
    });

    it('should respond with the updated detect', function() {
      updatedDetect.name.should.equal('Updated Detect');
      updatedDetect.info.should.equal('This is the updated detect!!!');
    });

  });

  describe('DELETE /api/detects/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/detects/' + newDetect._id)
        .expect(204)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when detect does not exist', function(done) {
      request(app)
        .delete('/api/detects/' + newDetect._id)
        .expect(404)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
