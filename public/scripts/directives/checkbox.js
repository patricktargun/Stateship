(function() {
    'use strict';
    angular
        .module('stateship')
        .directive('checkbox', function(){
            return {
                restrict: 'A',
                template: "<div class='form-group'> <input type='checkbox' ng-model='vm.isHuman'>Check here if you are human.</div>"
            }
        });

})();