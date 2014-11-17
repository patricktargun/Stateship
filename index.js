"use-strict";
var express = require('express'),
    bodyParser = require('body-parser'),
    civic = require('./lib/services/civicService'),
    MandrillCtrl = require('./lib/controllers/mandrillCtrl');

var app = express(),
    port = process.env.PORT_NUMBER || 9901;

var CORS = function(req, res, next){
    if(req.headers.origin === 'http://localhost:9901' || req.headers.origin === 'http://stateship.org' || req.headers.origin === "http://104.131.186.205"){
        next();
    }
    else {
        res.status(401).json("Email requests must be made from stateship.org");
    }
};

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

//End Point to hit for dirty politician info.
app.post('/api/representatives', CORS, civic.getReps);
app.post('/api/voterInfo', CORS, civic.getVoterInfo);

//End Point to hit for sending Emails. Uses Mandrill
app.post('/api/sendemail', CORS, MandrillCtrl.sendEmail);


app.listen(port, function() {
    console.log('Listening on port ' + port);
});
