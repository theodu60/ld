/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/languages              ->  index
 * POST    /api/languages              ->  create
 * GET     /api/languages/:id          ->  show
 * PUT     /api/languages/:id          ->  update
 * DELETE  /api/languages/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Language = require('./language.model');

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

function responseWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.saveAsync()
      .spread(function(updated) {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.removeAsync()
        .then(function() {
          res.status(204).end();
        });
    }
  };
}

// Gets a list of Languages
exports.index = function(req, res) {

  var cv = require('opencv');
  var mat = new cv.Matrix.Eye(4,4);
  console.log(mat)
  Language.find({}).sort({ label : 1})
    .then(responseWithResult(res))
};

// Gets a single Language from the DB
exports.show = function(req, res) {
  Language.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(responseWithResult(res))
    .catch(handleError(res));
};

// Creates a new Language in the DB
exports.create = function(req, res) {
  Language.createAsync(req.body)
    .then(responseWithResult(res, 201))
    .catch(handleError(res));
};

// Updates an existing Language in the DB
exports.update = function(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Language.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(responseWithResult(res))
    .catch(handleError(res));
};

// Deletes a Language from the DB
exports.destroy = function(req, res) {
  Language.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
};
