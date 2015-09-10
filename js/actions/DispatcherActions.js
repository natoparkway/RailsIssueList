var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var ActionConstants = require('../constants/ActionConstants.js');

var DispatcherActions = {
	getCurrIssuesPage: function() {
		AppDispatcher.dispatch({
			actionType: ActionConstants.GET_ISSUES,
		});
	},

	getNextIssuesPage: function() {
		while(!AppDispatcher.isDispatching) {}
		AppDispatcher.dispatch({
			actionType: ActionConstants.GET_NEXT_ISSUES,
		});
	},

	getPrevIssuesPage: function() {
		AppDispatcher.dispatch({
			actionType: ActionConstants.GET_PREV_ISSUES,
		});
	},

	getIssueComments: function(issue) {
		AppDispatcher.dispatch({
			actionType: ActionConstants.GET_ISSUE_COMMENTS,
			issue: issue
		});
	},

	backToIssues: function() {	//Notifies listener that the user wants to navigate back to the issues page
		AppDispatcher.dispatch({
			actionType: ActionConstants.GO_BACK_TO_ISSUES
		});
	}
};

module.exports = DispatcherActions;