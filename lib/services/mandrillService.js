var mandrill = require('mandrill-api/mandrill'),
    mandrill_client = new mandrill.Mandrill('SXS9mfYhFMxYOc0-kyW9eg'),
    q = require('q');






module.exports = {
    sendEmail: function(email){
        var deferred = q.defer();
        mandrill_client.messages.send(email, function(stuff){
           deferred.resolve(stuff);
        }, function(err){
           deferred.reject(err);
        });
        return deferred.promise;
    }
};