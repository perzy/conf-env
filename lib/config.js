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

  var env = glob.sync(files).map(function (file) {
    return file.split('/').pop().slice(0, -3);
  }).indexOf(process.env.NODE_ENV) > -1 ? process.env.NODE_ENV : options.env;

  return _.merge(
    require(path.join(options.dir,'/env/all')),
    require(path.join(options.dir,('/env/' + env)))
  );
};