
var assert =require('assert');
var lag = require('../');

describe('event-loop-lag', function() {
  it('exports a function', function(done) {
    assert.equal('function', typeof lag);
    done();
  });

  it('requires a ms arg', function(done) {
    assert.throws(function() {
      lag();
    }, /must be a number/);
    done();
  });

  it('returns a function', function(done) {
    var fn = lag(100);
    assert.equal('function', typeof fn);
    done();
  });

  describe('return fn', function() {
    it('returns a number', function(done) {
      var fn = lag(10);
      setTimeout(function() {
        var val = fn();
        assert.equal('number', typeof val);
        done();
      }, 50);
    });
  });
});
