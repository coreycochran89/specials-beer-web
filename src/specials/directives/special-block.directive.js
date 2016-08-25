'use strict';

SpecialBlock.$inject = [];
function SpecialBlock() {
    return {
        scope: {special:'='},
        replace: true,
        template: require('../templates/special-block.html'),
        link: function(scope, element, attrs) {
        }
    };
}
module.exports = SpecialBlock;
