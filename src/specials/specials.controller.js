'use strict';

//var _ = require('lodash'); use once needed

function SpecialsController(SpecialsService) {
  var vm = this;

  vm.message = 'THESE ARE OUR SPECIALS!';
  vm.specials = undefined;

  vm.getSpecials = getSpecials;

  activate();

  function activate() {
    getSpecials();
  }

  function getSpecials(category) {
    SpecialsService.getSpecials(category)
    .then(function(specials) {
      vm.specials = specials;
    })
    .catch(function() {
      alert('failed getting specials');
    });
  }
}

module.exports = SpecialsController;
