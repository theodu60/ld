'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var DetectSchema = new Schema({
  freq: [{
  	label: String,
  	value: Number 
  }],
  ouput: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Detect', DetectSchema);
