var AppConstants = require('../constants/AppConstants');

module.exports = {

	getIssuesPage: function(pageNumber, callback) {
		var params = {
			page: pageNumber,
			per_page: AppConstants.ISSUES_PER_PAGE
		};
		$.get(AppConstants.RAILS_ISSUES_API_URL, params, callback);
	}


}