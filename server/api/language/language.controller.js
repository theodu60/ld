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
var cv = require('opencv')
var async = require('async')
  var ml = require('machine_learning');

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
function matrixToOne(matrix){
  var tab = []
  for (var i= 0; i< matrix.height(); i++){
    for (var y= 0; y< matrix.width(); y++){
      if (matrix.get(i,y))
        tab.push(matrix.get(i,y))
      else
        tab.push(0)
    }
  }
  return tab
}
var parseImg = function (path, cb){
      var tab = []

  cv.readImage(path, function(err, im){
    im.convertGrayscale()
    im.save('./examples/files/out.jpg');

    var contours = im.findContours()
    for(var c = 0; c < contours.size(); ++c) {
        if (!tab[c])
          tab[c] = []

        var m = new cv.Matrix(contours.boundingRect(c).width, contours.boundingRect(c).height)
        for (var i= contours.boundingRect(c).x; i< contours.boundingRect(c).width; i++){
          for (var y= contours.boundingRect(c).y; y< contours.boundingRect(c).height; y++){
            m.set(i,y)
            if (im.get(i,y)){
              tab[c].push(im.get(i,y))
            }else{
              tab[c].push(0)
            }

          }
        }
    }
      cb(tab)
  })
}
function magique(matrix, request, cb){
var alpha = []
alpha[0] = 'A'
alpha[1] = 'B'

  var knn = new ml.KNN({
      data : matrix,
      result : [
        [0],[0],[0],[0],
        [1],[1],[1],[1]
      ]
  });

console.log(matrix[0].length)

console.log(request.length)
  var prediction = knn.predict({
      x : request,
      k : 1,
      weightf : {type : 'gaussian', sigma : 10.0},
      distance : {type : 'euclidean'}
  });
console.log("prediction " + prediction)
  cb(alpha[prediction])
}

// Gets a list of Languages
exports.index = function(req, res) {
var nbFiles = [0,1,2,3,4,5,6,7]
var matrix = []


//"./examples/files/all/"+file+".png"
/*
  async.each(nbFiles, function(file, callback) {
    cv.readImage("./examples/files/all/"+file+".png", function(err, im){
      im.convertGrayscale()
      im.save('./examples/files/out'+file+'.jpg');
      if (!matrix[file])
        matrix[file] = []
        for (var i= 0; i< im.height(); i++){
          for (var y= 0; y< im.width(); y++){
            if (im.get(i,y))
              matrix[file].push(im.get(i,y))
            else
              matrix[file].push(0)
          }
        }
      callback()
    })
  }, function(err){
    if( err ) {
      console.log('A file failed to process');
    } else {
      console.log('All files have been processed successfully');
    }
    parseImg("./examples/files/num.png", function (data){
      var trad = []
      console.log("Nombre de Lettre source: " + data.length)

      async.each(data, function(l, callback) {
        magique(matrix, l, function (t){
          trad.push(t)
          callback()
        })
      }, function(err){
         // console.log(trad)
      });
  });
})
*/


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
