(function() {
    "use-strict";
    angular
        .module('stateship')
        .controller('StateCtrl', StateCtrl);

    function StateCtrl(currentState, representatives, StateService) {
        var vm = this;
        var repArrays = StateService.getRepArrays();
        vm.reps = representatives;
        vm.nationalReps = repArrays[0];
        vm.stateReps = repArrays[1];
        vm.getReps = getReps;
        vm.state = currentState;

        console.log(vm.nationalReps, vm.stateReps);

        function getReps(address) {
            console.log(address);
        }

    }
})();
