'use strict';

var angular = require('angular');
var routeConfig = require('./app.routes.js');

var dependencies = [
  'ui.router',
  'availity',
  require('./specials/module.js').name
];

var moduleName = 'specialsBeer';
angular.module(moduleName, dependencies)
  .constant('name', moduleName)
  .config(routeConfig);

