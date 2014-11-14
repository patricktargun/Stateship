(function() {
    angular
        .module('stateship')
        .controller('EmailCtrl', EmailCtrl);

    function EmailCtrl(currentRep, EmailService, nzSwal) {
        var vm = this;
        console.log("got Here");
        vm.sendEmail = sendEmail;
        vm.resetForm = resetForm;
        vm.rep = currentRep;


        function sendEmail(email) {
            email.to = currentRep.emails[0];
            EmailService.sendEmail(email)
                .then(function() {
                    for (var key in email)
                        email[key] = "";
                });
        }

        function resetForm(email) {
            nzSwal({
                    title: "Are you sure?",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: '#DD4B39',
                    confirmButtonText: "Yes, do it!",
                    closeOnConfirm: false
                })
                .then(function() {
                    nzSwal('You did it!');
                    for (var key in email)
                        email[key] = "";
                })
                .catch(function() {
                    nzSwal('Cancelled :)');
                });
            
        }
    }
})();
