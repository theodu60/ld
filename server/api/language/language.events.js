/**
 * Language model events
 */

'use strict';

var EventEmitter = require('events').EventEmitter;
var Language = require('./language.model');
var LanguageEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
LanguageEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Language.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    LanguageEvents.emit(event + ':' + doc._id, doc);
    LanguageEvents.emit(event, doc);
  }
}

module.exports = LanguageEvents;
