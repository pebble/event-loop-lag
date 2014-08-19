#event-loop-lag

Measures Node.js event loop lag.

```js
var interval = 1000; // how often to refresh our measurement
var lag = require('event-loop-lag')(interval);

console.log('event loop lag is %d', lag());
```

#### event-loop-lag(number)

`event-loop-lag` accepts a number of milliseconds representing how
often to refresh the event loop lag measurement and returns a function
you can call to receive the latest lag measurement.

```js
var lag = require('event-loop-lag')(1000);
var koa = require('koa');
var app = koa();

app.use(function*(next){
  if ('/lag' == this.url)
    this.body = lag();
  else
    yield next;
})
```

### Installation

```
npm install event-loop-lag --save
```

### Development

#### running tests

- `make test` runs tests
- `make test-cov` runs tests + test coverage
- `make open-cov` opens test coverage results in your browser

#### verbose logging

`event-loop-lag` supports the `debug` module for help during development.
Enable verbose logging by setting your `DEBUG` env variable like so:

````
DEBUG=event-loop-lag* npm test
```

## Sponsored by

[Pebble Technology!](https://getpebble.com)

## License

[MIT](https://github.com/pebble/event-loop-lag/blob/master/LICENSE)
