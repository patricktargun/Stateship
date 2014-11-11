(function() {
    angular
        .module('stateship')
        .controller('MapCtrl', MapCtrl);

    function MapCtrl(StateService, $location, $scope) {
        var vm = this;
        vm.setCurrentState = setCurrentState;

        function setCurrentState(state) {
            console.log(state);
            $location.path('/state/' + state);
            $scope.$apply();

        }
    }
})();

