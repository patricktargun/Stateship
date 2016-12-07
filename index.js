"use-strict";
var express = require('express'),
    bodyParser = require('body-parser'),
    civic = require('./lib/services/civicService'),
    wall = require('./lib/services/wallService'),
    MandrillCtrl = require('./lib/controllers/mandrillCtrl');
    mongoose = require('mongoose');

var app = express(),
    port = process.env.PORT_NUMBER || 8080;

var CORS = function(req, res, next){
    if(req.headers.origin === 'http://localhost:8080' || req.headers.origin === 'http://stateship.org' ||
        req.headers.origin === 'http://www.stateship.org' || req.headers.origin === "http://104.131.186.205"){
        next();
    }
    else if(req.headers.referer === 'http://localhost:8080/' || req.headers.referer === 'http://stateship.org/' ||
        req.headers.referer === 'http://www.stateship.org/' || req.headers.referer === "http://104.131.186.205/"){
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

//States walls endpoint.
app.post('/api/wall/:state', CORS, wall.checkState, wall.postComment);
app.get('/api/wall/:state', CORS, wall.checkState, wall.readComments);

//End Point to hit for sending Emails. Uses Mandrill
app.post('/api/sendemail', CORS, MandrillCtrl.sendEmail);


// Connect to db and start app =============================
app.listen(port, function(){
   console.log('The Magic Happens on port ' + port);
});


// mongoose.connection.on('open', function () {
//     console.log('Connected to mongo server.');

//     app.listen(port, function(){
//        console.log('The Magic Happens on port ' + port);
//     });
// });

// mongoose.connection.on('connecting', function () {
//     console.log('connecting...');
// });

// mongoose.connection.on('error', function (err) {
//     console.log('Could not connect to mongo server!');
//     console.log(err);
//     process.exit(1);
// });

// console.log('Mongo server at: Compose.io');
// mongoose.connect(process.env.COMPOSE_URI);


