
// first install koa
// then run like: node --harmony-generators index.js
// then send a request to the /lag route

var lag = require('event-loop-lag')(1000);
var koa = require('koa');
var app = koa();

app.use(function*(next){
  if ('/lag' == this.url)
    this.body = lag();
  else
    yield next;
})

var server = app.listen(2222);

server.on('listening', function() {
  var add = server.address();
  console.log('listening on http://%s:%d', add.address, add.port);
})
