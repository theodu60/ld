/**
 * Detect model events
 */

'use strict';

var EventEmitter = require('events').EventEmitter;
var Detect = require('./detect.model');
var DetectEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
DetectEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Detect.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    DetectEvents.emit(event + ':' + doc._id, doc);
    DetectEvents.emit(event, doc);
  }
}

module.exports = DetectEvents;
