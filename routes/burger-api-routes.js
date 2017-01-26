var db = require('../models');

module.exports = function(app) {
    // Gets All Burgers
    app.get('/api/burgers', function(req, res) {
        db.Burgers.findAll({}).then(function(burgers){
            return res.json(error || burgers);
        });
    });

// Create
    app.post('/api/burgers', function(req, res) {
        db.Burgers.create(req.burger_name).then(function(burgers) {
            res.json(burgers);
        });
    });
}