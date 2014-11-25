
var debug = require('debug')('event-loop-lag');

/**
 * Measures the amount of event loop lag;
 *
 * @param {Number} ms The interval (milliseconds) with which we'll check event loop lag.
 * @return {Function}
 */

module.exports = exports = function eventLoopLag(ms){
  if ('number' != typeof ms) throw new TypeError('ms must be a number');

  // start the timer now
  debug('using %dms', ms)

  var start = time();
  var delay = 0;

  var timeout = setTimeout(check, ms);
  timeout.unref();

  function check(){
    // workaround for https://github.com/joyent/node/issues/8364
    clearTimeout(timeout);

    // how much time has actually elapsed in the loop beyond what
    // setTimeout says is supposed to happen
    var t = time();
    delay = t - start - ms;
    start = t;

    timeout = setTimeout(check, ms)
    timeout.unref();
  }

  // return the loop delay in milliseconds
  return function() {
    return delay;
  }
}

function time() {
  var t = process.hrtime();
  return (t[0] * 1e3) + (t[1] / 1e6);
}
