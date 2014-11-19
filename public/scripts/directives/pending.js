(function() {
    'use strict';
    angular
        .module('stateship')
        .directive('pending', function($q){
			return {
				restrict: 'A',
				//Says where you can use the directive in the html

				scope: {
					request: '&'
					//request is the attribute name that you want to bind to inside the directive scope
				},


				link: function(scope, elem, attrs){
					var spinner = angular.element('<div class="our-btn btn-blue"><i class="ion-loading-c"></i></div>').hide();
					elem.after(spinner);

					var dynamicFunc = function(){
						var deferred = $q.defer();
						deferred.resolve(scope.request());

						return deferred.promise;
					};

					elem.click(function(){
						spinner.show();
						elem.hide();
						dynamicFunc()
							.then(function(data){
								setTimeout(function(){
									spinner.hide();
									elem.show();
								}, 1000);
							})
					});

				},
			}
		});
		
})();