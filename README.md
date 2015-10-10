# conf-env

[![NPM Version][npm-image]][npm-url]

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

The default config file path is process.cwd()/config/env/

And generator have some file like: all.js  development.js production.js test.js etc.


## Examples


### how to switch config file
 
If you config the env variable NODE_ENV=development,then config will use development.js and merge with common.js

On Linux

```bash
export NODE_ENV=development  
```

Or 
```bash
export NODE_ENV=production  
```

### how to get the config value by key

```js
var config = require('conf-env')();
var host = config.host;
var port = config.port;
```

### custom local.js

If you add local.js in the ~/config/env/ path ,then local config will override env config.

### demo 

See demo [conf-env-demo](https://github.com/perzy/conf-env-demo)


## License

[MIT](LICENSE)