
var assert =require('assert');
var lag = require('../');
var exec = require('child_process').exec;
var path = require('path');

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

  it('allows the process to exit normally', function(done) {
    var cmd = 'node ' + path.join(__dirname, 'fixtures', 'process');
    exec(cmd, function(err, stdout, stderr) {
      done();
    });
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
