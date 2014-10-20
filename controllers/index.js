

var indexController = {
	index : function (req, res) {
		res.render('index');
	},
	applicants : function (req, res) {
		res.render('applicants');
	},
	success : function (req, res) {
		res.render('success');
	},
	applicant : function (req, res) {
		console.log(req.body);
		res.redirect('/success')
	}
}

module.exports = indexController;