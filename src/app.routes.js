'use strict';

var TEMPLATES = {
  SPECIALS: {
    HOME: require('./specials/templates/specials.html')
  }
};

function configureRoutes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('specials', {
      url: '/',
      views:
      {
        'specials@specialsList': {
          controller: 'SpecialsController',
          controllerAs: 'specialsList',
          template: TEMPLATES.SPECIALS.HOME
        },
        '': {
          controller: 'SpecialsController',
          controllerAs: 'specialsList',
          template: TEMPLATES.SPECIALS.HOME
        }
      }
    });

  $urlRouterProvider.otherwise('/');
}

module.exports = configureRoutes;
