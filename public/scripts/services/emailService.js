(function() {
    "use-strict";
    angular
        .module('stateship')
        .service('EmailService', emailService);

    function emailService($http, $q){
        this.sendEmail = sendEmail;
        this.setCurrentRep = setCurrentRep;
        this.getCurrentRep = getCurrentRep;
        this.setLastPath = setLastPath;
        this.getLastPath = getLastPath;
        var lastPath = [];
        var currentRep;




        function setLastPath(one, two){
            lastPath.push(one);
            lastPath.push(two);
        }
        function getLastPath(){
            return lastPath;
        }
        function sendEmail(email){
            var aEmail = {
                message: {
                    to: [{email: email.to}],
                    from_email: email.from,
                    subject: email.subject,
                    html: '<p>'+email.text+'</p>'+'<p>Sent from Stateship.org</p>'
                }
            };
            var deferred = $q.defer();
            $http.post("/api/sendemail", aEmail).then(function(stuff){
                deferred.resolve(stuff.data);
            }, function(err){
                deferred.reject(err);
            });
            return deferred.promise;
        }
    }
    function setCurrentRep(rep){
        currentRep = rep;
    }
    function getCurrentRep(){
        return currentRep;
    }


})();