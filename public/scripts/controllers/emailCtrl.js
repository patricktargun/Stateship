(function() {
    angular
        .module('stateship')
        .controller('EmailCtrl', EmailCtrl);

    function EmailCtrl(currentRep, EmailService, nzSwal, $route, $location, $scope) {
        var vm = this;
        vm.sendEmail = sendEmail;
        vm.resetForm = resetForm;
        vm.clearForm = clearForm;
        vm.rep = currentRep;


        function sendEmail(email) {
            $scope.$broadcast('show-errors-check-validity');
            if (!$scope.searchReps.$valid) {
                return; 
            }
            else if ($scope.searchReps.$valid) {
                email.to = currentRep.emails[0];
                EmailService.sendEmail(email)
                if (vm.isHuman) {
                    console.log('got here');
                    email.to = currentRep.emails[0];
                    EmailService.sendEmail(email)
                    .then(function() {
                        for (var key in email)
                            email[key] = "";
                        nzSwal({
                            title: "Email Sent",
                            timer: 1000,
                            confirmButtonColor: "#FFFFFF",
                            confirmButtonText: ""
                        });
                    }, function(){
                        nzSwal({
                            title: "Email Failed",
                            timer: 1500,
                            confirmButtonColor: "#FFFFFF",
                            confirmButtonText: ""
                        });
                    });
                }
                else {
                    nzSwal({
                        title: "Are you a human? If so check the box."
                    });
                }
            }

        }

        function clearForm(email) {
            nzSwal({
                    title: "Are you sure?",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: '#DD4B39',
                    confirmButtonText: "Yeah, clear it.",
                    closeOnConfirm: false
                })
                .then(function() {
                    nzSwal({
                        title: "Cleared",
                        timer: 1,
                        confirmButtonColor: "#FFFFFF",
                        confirmButtonText: ""
                    });
                    for (var key in email) {
                        email[key] = "";
                    }
                });
        }

        function resetForm(email) {
            nzSwal({
                    title: "Are you sure?",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: '#DD4B39',
                    confirmButtonText: "Yes, let's cancel.",
                    closeOnConfirm: false
                })
                .then(function() {
                    nzSwal({
                        title: "Email Canceled",
                        timer: 1000,
                        confirmButtonColor: "#FFFFFF",
                        confirmButtonText: ""
                    });
                    for (var key in email) {
                        email[key] = "";
                    }
                    var pathway = EmailService.getLastPath();
                    if (pathway[1]) {
                        $location.path("/state/" + pathway[0] + "/" + pathway[1]);
                    } else {
                        $location.path("/state/" + pathway[0]);
                    }
                });

        }
    }
})();
