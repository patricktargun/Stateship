(function() {
    "use-strict";
    angular
        .module('stateship')
        .controller('StateCtrl', StateCtrl);

    function StateCtrl(currentState, repArrays, stateNames, EmailService, $location, $scope, $route) {

        var vm = this;
        vm.nationalReps = repArrays[0];
        vm.stateReps = repArrays[1];
        vm.localReps = repArrays[2];
        vm.state = currentState;
        vm.stateName = stateNames[vm.state];
        vm.setCurrentRep = setCurrentRep;

        function setCurrentRep(rep) {
            EmailService.setCurrentRep(rep);
            EmailService.setLastPath($route.current.params.state, $route.current.params.address);
            $location.path("/emailRep");
        }

        //clear out input boxes
        if($scope.mainCtrl.address.city){
            $scope.mainCtrl.address.state.abbreviation = '';
            $scope.mainCtrl.address.street = '';
            $scope.mainCtrl.address.city = '';
        }




        
    }
})();
