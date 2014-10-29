var request = require('request');

var API_KEY = 'AIzaSyDe1qRaYw7tSS8gFl3aN88jgzmb460ylwo';
var googleURI = 'https://www.googleapis.com/civicinfo/v2/';

module.exports = {
	getReps: function(req, res){
		var path = 'representatives';
		var address = req.body.address;

		request.get(googleURI + path + '?key=' + API_KEY + '&address=' + address, function(error, response, body){
			if(error) res.status(400).end();
			else{
				if(JSON.parse(body).error)
					res.status(JSON.parse(body).error.code).send(error);
				else
					res.status(200).send(body);
			}
		})
	},

	getVoterInfo: function(req, res){
		var path = 'voterinfo';
		var address = req.body.address;

		request.get(googleURI + path + '?key=' + API_KEY + '&address=' + address, function(error, response, body){
			if(error) res.status(400).end();
			else{
				if(JSON.parse(body).error)
					res.status(JSON.parse(body).error.code).send(error);
				else
					res.status(200).send(body);
			}
		})

	}
}