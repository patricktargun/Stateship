var mongoose = require('mongoose');

var Comment = mongoose.model('Comment', {state: String, message: String, date: Date});

module.exports = {
    checkState: function (req, res, next) {
        var state = req.params.state;
        if (!state) return res.status(400).send('State not provided');
        req.state = state.toLowerCase();
        next();
    },
    postComment: function (req, res) {
        var message = req.body.message;
        if (!message) return res.status(400).send('Message not provided');
        var comment = new Comment({state: req.state, message: message, date: Date.now()});
        comment.save(function (err) {
            if (err) return res.status(400).send(err);
            res.send();
        });
    },
    readComments: function (req, res) {
        Comment.find({state: req.state}, function (err, comments) {
            if (err) return res.status(400).send(err);
            res.json(comments);
        });
    }
};