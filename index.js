"use-strict";
var express = require('express'),
    bodyParser = require('body-parser'),
    civic = require('./lib/services/civicService'),
    MandrillCtrl = require('./lib/controllers/mandrillCtrl');

var app = express(),
    port = 9901;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.post('/api/representatives', civic.getReps);
app.post('/api/voterInfo', civic.getVoterInfo);

app.post('/api/sendemail', MandrillCtrl.sendEmail);


app.listen(port, function() {
    console.log('Listening on port ' + port);
});
