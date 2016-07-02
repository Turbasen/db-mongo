'use strict';

const mongo = require('.');
const assert = require('assert');
const mongodb = require('mongodb');

before(done => mongo.on('ready', done));

describe('mongo', () => {
  it('returns Mongo wrapper class', () => {
    assert(mongo instanceof mongo.MongoWrapper);
    assert(mongo.db instanceof mongodb.Db);

    assert(mongo.api.users instanceof mongodb.Collection);

    ['turer', 'steder', 'områder', 'bilder', 'grupper'].forEach((type) => {
      assert(mongo[type] instanceof mongodb.Collection);
    });
  });

  it('is connected to the database', (done) => {
    mongo.db.stats((err, stats) => {
      assert.ifError(err);
      assert.equal(stats.ok, 1);
      done();
    });
  });

  it('connects via MONGO_URI environment variable', done => {
    process.env.MONGO_URI = 'mongodb://mongo:27017/test';

    delete require.cache[require.resolve('.')];
    require('.').on('ready', function readyCb() { // eslint-disable-line global-require
      // assert(this instanceof mongo.MongoWrapper);
      assert(this.db instanceof mongodb.Db);
      done();
    });

    delete process.env.MONGO_URI;
  });

  it('connects via MONGO_PORT_27017_TCP_* environment variables', done => {
    process.env.MONGO_PORT_27017_TCP_ADDR = 'mongo';
    process.env.MONGO_PORT_27017_TCP_PORT = '27017';

    delete require.cache[require.resolve('.')];
    require('.').on('ready', function readyCb() { // eslint-disable-line global-require
      assert(this.db instanceof mongodb.Db);
      done();
    });

    delete process.env.MONGO_PORT_27017_TCP_ADDR;
    delete process.env.MONGO_PORT_27017_TCP_PORT;
  });
});
