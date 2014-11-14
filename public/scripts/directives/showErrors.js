(function() {
    'use strict';
    angular
        .module('stateship')
        .directive('showErrors', function() {
		    return {
		      restrict: 'A',
		      require:  '^form',
		      link: function(scope, el, attrs, formCtrl) {
		      	var inputEl   = el[0].querySelector("[name]");
		        // convert the native text box element to an angular element
		        var inputNgEl = angular.element(inputEl);
		        // get the name on the text box so we know the property to check
		        // on the form controller
		        var inputName = inputNgEl.attr('name');

		        el.bind('blur', function() {
		          var valid = // is valid logic
		          el.toggleClass('has-error', valid);
		        });

		        scope.$on('show-errors-check-validity', function() {
		  			 el.toggleClass('has-error', formCtrl[inputName].$invalid);
				});

				scope.$on('show-errors-reset', function() {
		  			$timeout(function() {
		    		el.removeClass('has-error');
		  			}, 0, false);
				});
				
		      }
		    }
		});
		
})();