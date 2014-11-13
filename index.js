"use-strict";
var express = require('express'),
    bodyParser = require('body-parser'),
    civic = require('./lib/services/civicService'),
    MandrillCtrl = require('./lib/controllers/mandrillCtrl');

var app = express(),
    port = 9901;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "www.google.com");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//
var middle = function(req, res, next){
    if(req.headers.origin!== 'http://localhost:9901'){
        res.status(401).json("Email requests must be made from stateship.org");
    }
    else {
        next();
    }
};

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

//End Point to hit for dirty politician info.
app.post('/api/representatives', middle, civic.getReps);
app.post('/api/voterInfo', civic.getVoterInfo);

//End Point to hit for sending Emails. Uses Mandrill
app.post('/api/sendemail', middle, MandrillCtrl.sendEmail);


app.listen(port, function() {
    console.log('Listening on port ' + port);
});
