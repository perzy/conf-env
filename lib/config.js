'use strict';

/**
 * Created by Jerry Wu on 7/27/15.
 */

/**
 * Module dependencies.
 */
var _ = require('lodash'),
  path = require('path'),
  glob = require('glob');

// Load app configuration
module.exports = function (options) {
  var defaultOpts = {
    dir:path.join(process.cwd(),'config'),
    env:'development'
  };

  options = _.merge(defaultOpts,options || {});
  var files = path.join(options.dir,'/env/*.js');

  var fileNames = glob.sync(files).map(function (file) {
    return file.split('/').pop().slice(0, -3);
  });

  var env = fileNames.indexOf(process.env.NODE_ENV) > -1 ? process.env.NODE_ENV : options.env;
  var hasCommonConf = fileNames.indexOf('common') > -1;
  var hasLocalConf = fileNames.indexOf('local') > -1;

  var envConfig =  require(path.join(options.dir,('/env/' + env)));
  if(hasCommonConf){
    envConfig = _.merge(
      require(path.join(options.dir,'/env/common')),
      envConfig
    );
  }

  if(hasLocalConf){
    envConfig = _.merge(
      envConfig,
      require(path.join(options.dir,'/env/local'))
    );
  }

  return envConfig;
};