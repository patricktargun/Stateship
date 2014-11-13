var MandrillService = require('../services/mandrillService');

//API for mandrill service

module.exports.sendEmail = function(req, res){
    MandrillService.sendEmail(req.body)
        .then(function(stuff){
            res.status(200).json(stuff)
        }, function(err){
            res.status(418).json(err);
        })
};