var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var port = process.env.port || 3000;

var app = express();

var db = require('./models');

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Override DELETE Post
app.use(methodOverride('_method'));

// Handlebars Setup
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// Static Directory
app.use(express.static(process.cwd() + '/public'));

// Routes for server access
require('./routes/burger-api-routes')(app);

db.sequelize.sync().then(function() {
    app.listen(port, function() {
        console.log("OMG ITS WORKING ON " + PORT + " now DONT TOUCH IT!");
    });
});