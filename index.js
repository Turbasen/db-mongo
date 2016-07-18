'use strict';

const EventEmitter = require('events').EventEmitter;
const MongoClient = require('mongodb').MongoClient;
const inherits = require('util').inherits;

const MongoWrapper = function MongoWrapper(uri) {
  EventEmitter.call(this);

  MongoClient.connect(uri, (err, database) => {
    if (err) { throw err; }

    this.db = database;

    this.api = {
      users: database.collection('api.users'),
    };

    [
      'arrangementer',
      'bilder',
      'grupper',
      'områder',
      'steder',
      'turer',
    ].forEach((type) => {
      this[type] = database.collection(type);
    });

    this.emit('ready');
  });

  return this;
};

inherits(MongoWrapper, EventEmitter);

if (process.env.MONGO_URI) {
  module.exports = new MongoWrapper(process.env.MONGO_URI);
} else {
  const addr = process.env.MONGO_PORT_27017_TCP_ADDR || 'mongo';
  const port = process.env.MONGO_PORT_27017_TCP_PORT || '27017';
  const db = 'test';

  module.exports = new MongoWrapper(`mongodb://${addr}:${port}/${db}`);
}

module.exports.MongoWrapper = MongoWrapper;
