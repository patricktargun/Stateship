var express = require('express'),
	bodyParser = require('body-parser'),
	civic = require('./lib/services/civicService');

var app = express(),
	port = 9901;

app.use(bodyParser.json());

app.post('/api/representatives', civic.getReps);
app.post('/api/voterInfo', civic.getVoterInfo);


app.listen(port, function(){
	console.log('Listening on port ' + port);
});