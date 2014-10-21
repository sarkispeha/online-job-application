var Applicant = require('../models/applicados-model.js');

var indexController = {
	index : function (req, res) {
		res.render('index');
	},
	applicants : function (req, res) {
		Applicant.find({}, function(err, results){
			res.render('applicants', {
				applicants: results
			});
		});
	},
	success : function (req, res) {
		res.render('success');
	},
	applicant : function (req, res) {
		console.log(req.body);

		var applicantData = req.body; //submitted data

		var applicant = new Applicant(applicantData);

		applicant.save(function(err, result){
		res.redirect('/success');
		});
	}
}

module.exports = indexController;