(function() {
    angular
        .module('stateship')
        .controller('MapCtrl', MapCtrl);

    function MapCtrl(StateService, $location, $scope) {
        var stateNames={al:"Alabama",ak:"Alaska",az:"Arizona",ar:"Arkansas",ca:"California",co:"Colorado",ct:"Connecticut",de:"Delaware",fl:"Florida",ga:"Georgia",hi:"Hawaii",id:"Idaho",il:"Illinois","in":"Indiana",ia:"Iowa",ks:"Kansas",ky:"Kentucky",la:"Louisiana",me:"Maine",md:"Maryland",ma:"Massachusetts",mi:"Michigan",mn:"Minnesota",ms:"Mississippi",mo:"Missouri",mt:"Montana",ne:"Nebraska",nv:"Nevada",nh:"New Hampshire",nj:"New Jersey",nm:"New Mexico",ny:"New York",nc:"North Carolina",nd:"North Dakota",oh:"Ohio",ok:"Oklahoma",or:"Oregon",pa:"Pennsylvania",ri:"Rhode Island",sc:"South Carolina",sd:"South Dakota",tn:"Tennessee",tx:"Texas",ut:"Utah",vt:"Vermont",va:"Virginia",wa:"Washington",wv:"West Virginia",wi:"Wisconsin",wy:"Wyoming"}

        var vm = this;
        vm.setCurrentState = setCurrentState;
        vm.changeStateName = changeStateName;
        vm.stateName = '';
        vm.showSpinner = false;
        vm.hideState = false;

        function setCurrentState(state) {
            vm.hideState = true;
            vm.showSpinner = true;
            $location.path('/state/' + state);
            $scope.$apply();
        }

        function changeStateName(state) {
            vm.stateName = stateNames[state];
            $scope.$apply();
        }

    }
})();

