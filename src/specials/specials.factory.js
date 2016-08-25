'use strict';

SpecialsServiceFactory.$inject = ['SpecialsResource'];
function SpecialsServiceFactory(SpecialsResource) {

  var SpecialsService = function () {
    this.getSpecials = getSpecials;
  };

  function getSpecials(category) {
      var params = {};
      if(category) {
          params.category = category;
      }
    return SpecialsResource.query({params:params})
        .then(function(response) {
          return response.data.specials || new [];
        });
  }

  return new SpecialsService();
}

module.exports = SpecialsServiceFactory;
