var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var ActionConstants = require('../constants/ActionConstants.js');

var DispatcherActions = {
	getIssuesPage: function(pageNumber) {
		AppDispatcher.dispatch({
			actionType: ActionConstants.GET_ISSUES,
			pageNumber: pageNumber
		})
	}
}