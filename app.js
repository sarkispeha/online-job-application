var express = require('express');
var bodyParser = require('body-parser');

var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', indexController.index);

// displays a list of applicants
app.get('/applicants', indexController.applicants);

app.get('/success', indexController.success);

// creates and applicant
app.post('/applicant', indexController.applicant);

var server = app.listen(8441, function() {
	console.log('Express server listening on port ' + server.address().port);
});
