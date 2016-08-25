'use strict';

var angular = require('angular');

var appName = 'specialsBeer.specials';
var app = angular.module(appName, [])
  .constant('name', appName)
  .controller ( 'SpecialsController', require('./specials.controller.js'))
  .factory ( 'SpecialsService', require('./specials.factory.js'))
  .factory ( 'SpecialsResource', require('./specials.resource.js'))
  .directive ( 'specialBlock', require('./directives/special-block.directive.js'));

module.exports = app;