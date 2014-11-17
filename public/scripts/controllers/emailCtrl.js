(function() {
    angular
        .module('stateship')
        .controller('EmailCtrl', EmailCtrl);

    function EmailCtrl(currentRep, EmailService, $scope) {
        var vm = this;
        console.log("got Here");
        vm.sendEmail = sendEmail;
        vm.resetForm = resetForm;
        vm.rep = currentRep;


        function sendEmail(email) {
            $scope.$broadcast('show-errors-check-validity');
            if (!$scope.searchReps.$valid) {
                return; 
            }
            else if ($scope.searchReps.$valid) {
            email.to = currentRep.emails[0];
            EmailService.sendEmail(email)
                .then(function() {
                    for (var key in email)
                        email[key] = "";
                });
            }
        }

        function resetForm() {
            for (var key in email)
                email[key] = "";
        }
    }
})();
