(function() {
    angular
        .module('stateship')
        .controller('EmailCtrl', EmailCtrl);

    function EmailCtrl(currentRep, EmailService, nzSwal, $route, $location) {
        var vm = this;
        vm.sendEmail = sendEmail;
        vm.resetForm = resetForm;
        vm.clearForm = clearForm;
        vm.rep = currentRep;

        insertCheckboxes();

        function insertCheckboxes() {
            var btns = angular.element(document.getElementById("submission-btns"));
            btns.before('<div class="form-group"> <input type="checkbox" ng-model="vm.isHuman">Check here if you are human. <br></div>');
        }


        function sendEmail(email) {
            if (vm.isHuman) {
                console.log('got here');
                email.to = currentRep.emails[0];
                EmailService.sendEmail(email)
                    .then(function() {
                        for (var key in email)
                            email[key] = "";
                    });
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
