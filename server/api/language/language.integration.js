'use strict';

var app = require('../..');
var request = require('supertest');

var newLanguage;

describe('Language API:', function() {

  describe('GET /api/languages', function() {
    var languages;

    beforeEach(function(done) {
      request(app)
        .get('/api/languages')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          languages = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      languages.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/languages', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/languages')
        .send({
          name: 'New Language',
          info: 'This is the brand new language!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          newLanguage = res.body;
          done();
        });
    });

    it('should respond with the newly created language', function() {
      newLanguage.name.should.equal('New Language');
      newLanguage.info.should.equal('This is the brand new language!!!');
    });

  });

  describe('GET /api/languages/:id', function() {
    var language;

    beforeEach(function(done) {
      request(app)
        .get('/api/languages/' + newLanguage._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          language = res.body;
          done();
        });
    });

    afterEach(function() {
      language = {};
    });

    it('should respond with the requested language', function() {
      language.name.should.equal('New Language');
      language.info.should.equal('This is the brand new language!!!');
    });

  });

  describe('PUT /api/languages/:id', function() {
    var updatedLanguage

    beforeEach(function(done) {
      request(app)
        .put('/api/languages/' + newLanguage._id)
        .send({
          name: 'Updated Language',
          info: 'This is the updated language!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedLanguage = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedLanguage = {};
    });

    it('should respond with the updated language', function() {
      updatedLanguage.name.should.equal('Updated Language');
      updatedLanguage.info.should.equal('This is the updated language!!!');
    });

  });

  describe('DELETE /api/languages/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/languages/' + newLanguage._id)
        .expect(204)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when language does not exist', function(done) {
      request(app)
        .delete('/api/languages/' + newLanguage._id)
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
