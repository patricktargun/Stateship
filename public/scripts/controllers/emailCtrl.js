(function(){
	angular
		.module('stateship')
        .controller('EmailCtrl', EmailCtrl);
        function EmailCtrl (currentRep, EmailService){
        	var vm = this;
        	console.log("got Here");
        	vm.sendEmail = sendEmail;
        	vm.resetForm = resetForm;
        	vm.rep = currentRep;


        	function sendEmail(email) {
        		email.to = currentRep.emails[0];
        		EmailService.sendEmail(email)
        			.then(function(){
        				for(key in email)
        					email[key] = "";
        			})
        	}
        	function resetForm () {
        		for(key in email)
        			email[key] = "";
        	}
        }
})();