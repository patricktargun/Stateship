(function() {
    "use-strict";
    angular
        .module('stateship')
        .service('EmailService', emailService);

    function emailService($http, $q){
        this.sendEmail = sendEmail;
        this.setCurrentRep = setCurrentRep;
        this.getCurrentRep = getCurrentRep;
        var currentRep;





        function sendEmail(email){
            var aEmail = {
                message: {
                    to: [{email: email.to}],
                    from_email: email.from,
                    subject: email.subject,
                    html: '<p>'+email.text+'</p>'+'<p>Sent from Stateship.org</p>'
                }
            };
            return $http.post("/api/sendemail", aEmail).then(function(stuff){
                return stuff.data;
            }, function(err){
                return err;
            })
        }
    }
    function setCurrentRep(rep){
        currentRep = rep;
    }
    function getCurrentRep(){
        return currentRep;
    }


})();