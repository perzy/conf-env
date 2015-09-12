# conf-env

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

## Installation

```bash
$ npm install conf-env
```

## API


```js
var config = require('conf-env')();
var host = config.host;
var port = config.port;
```

### config(options)

Create a env config helper with the given `options`.



## Examples


### how to switch config file
 
If you config the env variable NODE_ENV=development,then config will use development.js

On Linux

```bash
export NODE_ENV=development
```

### how to get the config value by key

```js
var config = require('conf-env')();
var host = config.host;
var port = config.port;
```


## License

[MIT](LICENSE)