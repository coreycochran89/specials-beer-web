'use strict';
SpecialsResource.$inject = ['AvApiResource'];
function SpecialsResource(AvApiResource) {
    return new AvApiResource({ version: '/v1', url: '/specials' });
}

module.exports = SpecialsResource;
