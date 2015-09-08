var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var ActionConstants = require('../constants/ActionConstants.js');
var AppConstants = require('../constants/AppConstants.js');
var EventEmitter = require('events').EventEmitter;
var GithubAPIMethods = require('../utils/GithubAPIMethods');
var _ = require('underscore');
EventEmitter.setM

//Private internal data
var _comments = {};

var CommentsStore = _.extend({}, EventEmitter.prototype, {
	emitChange: function(issueNumber) {
		this.emit(issueNumber.toString());
	},

	loadPage: function(issueNumber, callback) {
		GithubAPIMethods.getIssueComments(issueNumber, function(data, error) {
			if(error !== 'success') { //Return, do not emit change if there is an error
				console.log("ERROR: ")
				console.log(error);
				return;
			}

			_comments[issueNumber] = data;
			callback();
		});
	},

	addClickListener: function(issueNumber, callback) {
		this.on(issueNumber.toString(), callback);
	},

	removeClickListener: function(issueNumber, callback) {
		this.removeListener(issueNumber.toString(), callback);
	},

	getIssueComments: function(issueNumber) {
		return _comments[issueNumber];
	}
});

CommentsStore.setMaxListeners(AppConstants.ISSUES_PER_PAGE + 1);
AppDispatcher.register(function(action) {
	switch(action.actionType) {
		case ActionConstants.GET_ISSUE_COMMENTS:
			CommentsStore.loadPage(action.issueNumber, function() {
				CommentsStore.emitChange(action.issueNumber);
			});
			break;


		default:
			//no op
	}
});

module.exports = CommentsStore;