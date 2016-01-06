'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var LanguageSchema = new Schema({
  id: Number,
  code: String,
  label: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Language', LanguageSchema);
