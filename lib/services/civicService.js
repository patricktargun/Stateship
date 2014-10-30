var request = require('request');

var API_KEY = 'AIzaSyDe1qRaYw7tSS8gFl3aN88jgzmb460ylwo';
var googleURI = 'https://www.googleapis.com/civicinfo/v2/';

var combineRepInfo = function(jsonObj) {
    officials = jsonObj.officials;
    offices = jsonObj.offices;

    for (var i = 0; i < officials.length; i++) {
        for (var j = 0; j < offices.length; j++) {
            if (offices[j].officialIndices.indexOf(i) !== -1) {
                var officeObj = {};
                for (key in offices[j]) {
                    if (key !== 'officialIndices')
                        officeObj[key] = offices[j][key];
                }
                officials[i].office = officeObj;
                break;
            }
        }
    }
    return officials;
}

module.exports = {
    getReps: function(req, res) {
        var path = 'representatives';
        var address = req.body.address;

        request.get(googleURI + path + '?key=' + API_KEY + '&address=' + address + "&fields=offices,officials", function(error, response, body) {
            if (error) res.status(400).end();
            else {
                var info = JSON.parse(body);
                if (info.error)
                    res.status(info.error.code).send(error);
                else

                    res.status(200).json(combineRepInfo(info));
            }
        })
    },

    getVoterInfo: function(req, res) {
        var path = 'voterinfo';
        var address = req.body.address;

        request.get(googleURI + path + '?key=' + API_KEY + '&address=' + address, function(error, response, body) {
            if (error) res.status(400).end();
            else {
                if (JSON.parse(body).error)
                    res.status(JSON.parse(body).error.code).send(error);
                else
                    res.status(200).send(body);
            }
        })

    }
}
