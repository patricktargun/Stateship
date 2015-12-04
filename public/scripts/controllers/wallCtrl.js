(function () {
    "use-strict";
    angular
        .module('stateship')
        .controller('WallCtrl', WallCtrl);

    function WallCtrl($scope, $route, stateNames, WallService) {

        var vm = this;
        vm.data = WallService.data;
        vm.data.state = $route.current.params.state;
        vm.stateName = stateNames[vm.data.state];
        vm.postComment = WallService.postComment($scope);
        WallService.readComments();

    }
})();
