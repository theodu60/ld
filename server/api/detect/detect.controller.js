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
var Language = require('../language/language.model');
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
    var europeen = "abcdéëàèefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var russian = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЭЯабвгдеёжзийклмнопрстуфхцчшщъы"
    var chinois = "阿贝色德饿艾弗日阿什伊鸡卡艾勒艾马艾娜哦佩苦艾和艾丝特玉维独布勒维伊克斯伊格黑克贼德"
    var japonais = "あかさたなはまやらわがざだばぱアカサタナハマヤラワガザダバパいきしちにひみりゐぎじぢびぴイキシチニヒミリヰギジヂビピうくすつぬふむゆるぐずづぶぷウクスツヌフムユルグズヅブプえけせてねへめれゑげぜでべぺエケセテネヘメレヱゲゼデベペおこそとのほもよろをんごぞどぼぽオコソトノホモヨロヲンゴゾドボポきゃしゃちゃにゃひゃみゃりゃぎゃじゃびゃぴゃキャシャチャニャヒャミャリャギャジャビャピャきゅしゅちゅにゅひゅみゅりゅぎゅじゅびゅぴゅキュシュチュニュヒュミュリュギュジュビュピュきょしょちょにょひょみょりょぎょじょびょぴょキョショチョニョヒョミョリョギョジョビョピョ"
    var arabe = "ﺍﺏﺕﺙﺝﺡﺥﺩﺫﺭﺯﺱﺵﺹﺽﻁﻅﻉﻍﻑﻕﻙﻝﻡﻥﻩﻭﻱء‎"
    var grec = "ABΓΔΕΖΗΘΙΚΛMΝΞΟΠΡΣΤΥΦΧΨΩ"

    var tmp = europeen + russian + chinois + japonais + arabe + grec
    var lettres = tmp.split('')
    for (var i=0; i<string.length;i++) {
        var character = string[i];
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
  var ouput_freq = []
  var ouput_freq = []
  for (var i in MongoRes){
    if (!input[i])
      input[i] = []
    if (!ouput_freq[i])
      ouput_freq[i] = []
    ouput_freq[i].push(MongoRes[i].ouput)
    for (var y in MongoRes[i].freq){
      if (MongoRes[i].freq[y].value)
        input[i].push(MongoRes[i].freq[y].value)
      else
        input[i].push(0)
    }
  }
  return ({input: input, ouput_freq: ouput_freq})
}

function allOuput(cb){
  var result = []
  Detect.find({}, { ouput: 1, _id:0 })
    .then(function (data){
      for (var i in data)
        result.push(data[i].ouput)
      cb(result)
    }) 
}

function findNearLanguage(knowsLanguage, result){
  var findedLanguageCode = null;
  var minScale = 9999;
  for(var i in knowsLanguage){
    var currentScale = Math.abs(knowsLanguage[i] - result)
    console.log(currentScale);
    if (currentScale < minScale){
      findedLanguageCode = knowsLanguage[i];
      minScale = currentScale;
    }
  }
  return findedLanguageCode;
}

function magique(newText, cb){
  //KNN METHODE
  var trainning = {
    input: [],
    ouput_libel: [],
    ouput_freq: []
  }
  Detect.findAsync()
    .then(function (data){
      if (data.length == 0){
        cb(0)        
      }
      else {
        trainning = createObjForAlgo(data)
        var data = trainning.input
        var result = trainning.ouput_freq
        var test = []
        var newRes = []
        newRes.push(newText)
        test = createObjForAlgo(newRes).input
        var knn = new ml.KNN({
            data : data,
            result : result
        });
        var y = knn.predict({
            x : test[0],
            k : 1,
            weightf : {type : 'gaussian', sigma : 10.0},
            distance : {type : 'euclidean'}
        });

        allOuput(function(data){
          var knowLanguageDetected = findNearLanguage(data, parseInt(y));
          cb(knowLanguageDetected);
        })

      }
    })
}
// Creates a new Detect in the DB
exports.create = function(req, res) {

  allOuput(function (data){
    console.log("data")
    console.log(data)
  })
  var input = req.body.input
  if (req.body.ouput)
    var output = req.body.ouput
  else
    var output = null
  var obj = {
    freq : getFrequency(input),
    ouput: output
  }
  console.log(obj)
  //SI LE TEXTE EST UNE LANGUE CONNU: ON APPREND 
  if (output) {
    Detect.createAsync(obj)
      .then(responseWithResult(res, 201))
      .catch(handleError(res));
  //SI LE TEXTE EST UNE LANGUE INCONNU: ON DEVINE 
  } else {
    magique(obj, function (codePays){
      Language.findAsync({id: codePays})
        .then(responseWithResult(res))
        .catch(handleError(res));           
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
