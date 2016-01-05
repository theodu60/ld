/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/detects              ->  index
 * POST    /api/detects              ->  create
 * GET     /api/detects/:id          ->  show
 * PUT     /api/detects/:id          ->  update
 * DELETE  /api/detects/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Detect = require('./detect.model');
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

// Gets a list of Detects
exports.index = function(req, res) {
  Detect.findAsync()
    .then(responseWithResult(res))
    .catch(handleError(res));
};

// Gets a single Detect from the DB
exports.show = function(req, res) {
  Detect.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(responseWithResult(res))
    .catch(handleError(res));
};
function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}
//FREQUENCE LETTRE DANS UN TEXTE
function getFrequency(string) {
    var freq = {};
    var lettres = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z'
    ]
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (lettres.indexOf(character) != -1) {
          if (freq[character]) {
             freq[character]++;
          } else {
             freq[character] = 1;
          }
        }
    }
    var totalOfChar = 0 
    var res = []
    for (var i in freq){
        totalOfChar = totalOfChar + freq[i]
    }
    for (var i in freq){
      res.push({label: i, value: parseFloat( (freq[i]/totalOfChar))})
    }
    for (var l in lettres){
      if (!found(res, lettres[l]))
        res.push({label: lettres[l], value: parseFloat(0)})
    }
    return res;
};
function found(array, what){
  var found = false;
  for(var i = 0; i < array.length; i++) {
      if (array[i].label == what) {
          found = true;
          break;
      }
  }
return found
}
function convertLibelToFreq(arrLibel){
  var arrFreq = []
  for (var i in arrLibel)
    arrFreq.push(i / arrLibel.length)
  return arrFreq
}
function createObjForAlgo(MongoRes){
  var input = []
  var ouput_libel = []
  var ouput_freq = []
  for (var i in MongoRes){
    if (!input[i])
      input[i] = []
    if (!ouput_libel[i])
      ouput_libel[i] = []
    ouput_libel[i].push(MongoRes[i].ouput)
    for (var y in MongoRes[i].freq){
      if (MongoRes[i].freq[y].value)
        input[i].push(MongoRes[i].freq[y].value)
      else
        input[i].push(0)
    }
    if (!ouput_freq[i])
      ouput_freq[i] = convertLibelToFreq(ouput_libel)
  }
  return ({input: input, ouput_freq: ouput_freq})
}
function magique(newText, cb){
  var trainning = {
    input: [],
    ouput_libel: [],
    ouput_freq: []
  }
  Detect.findAsync()
    .then(function (res){
      trainning = createObjForAlgo(res)
      //TEST
    //  trainning.ouput_freq = [[0], [0], [1], [0], [1], [1], [0], [0], [0]]
      trainning.ouput_freq = [[1], [1], [2], [1], [2], [2], [1], [1], [1]]

var data = trainning.input
var result = trainning.ouput_freq
var test = []

var newRes = []
newRes.push(newText)
test = createObjForAlgo(newRes).input
console.log(test[0])

var knn = new ml.KNN({
    data : data,
    result : result
});
 
var y = knn.predict({
    x : test[0],
    k : 3,
 
    weightf : {type : 'gaussian', sigma : 10.0},
    // default : {type : 'gaussian', sigma : 10.0}
    // {type : 'none'}. weight == 1
    // Or you can use your own weight f
    // weightf : function(distance) {return 1./distance}
 
    distance : {type : 'euclidean'}
    // default : {type : 'euclidean'}
    // {type : 'pearson'}
    // Or you can use your own distance function
    // distance : function(vecx, vecy) {return Math.abs(dot(vecx,vecy));}
});
 
console.log(parseInt(y));

cb(y)


    })


}
// Creates a new Detect in the DB
exports.create = function(req, res) {
  var input = req.body.input
  if (req.body.ouput)
    var output = req.body.ouput
  else
    var output = null
  var obj = {
    freq : getFrequency(input),
    ouput: output
  }
  //SI LE TEXTE EST UNE LANGUE CONNU
  if (output) {
    Detect.createAsync(obj)
      .then(responseWithResult(res, 201))
      .catch(handleError(res));
  //SI LE TEXTE EST UNE LANGUE INCONNU
  } else {

    magique(obj, function (){
     res.send("ok")
    })



  }

    
};

// Updates an existing Detect in the DB
exports.update = function(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Detect.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(responseWithResult(res))
    .catch(handleError(res));
};

// Deletes a Detect from the DB
exports.destroy = function(req, res) {
  Detect.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
};
