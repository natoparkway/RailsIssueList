var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var ActionConstants = require('../constants/ActionConstants.js');
var AppConstants = require('../constants/AppConstants.js');
var EventEmitter = require('events').EventEmitter;
var GithubAPIMethods = require('../utils/GithubAPIMethods');
var IssuesStore = require('./IssuesStore');
var _ = require('underscore');
EventEmitter.setM

//Private internal data
var _comments = {};
var COMMENTS_REQUESTED = 'comments_requested';
var COMMENTS_DISMISSED = 'comments_dismissed';

var CommentsStore = _.extend({}, EventEmitter.prototype, {
	emitChange: function(changeType, issue) {
		this.emit(changeType, issue);
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

	addCommentsRequestedListener: function(callback) {
		this.on(COMMENTS_REQUESTED, callback);
	},

	removeCommentsRequestedListener: function(callback) {
		this.removeListener(COMMENTS_REQUESTED, callback);
	},

	getIssueComments: function(issueNumber) {
		return _comments[issueNumber];
	},

	addCommentsDismissedListener: function(callback) {
		this.on(COMMENTS_DISMISSED, callback);
	}
});


CommentsStore.dispatchToken = AppDispatcher.register(function(action) {
	var issue = action.issue;
	switch(action.actionType) {
		case ActionConstants.GET_ISSUE_COMMENTS:
			CommentsStore.loadPage(issue.number, function() {
				CommentsStore.emitChange(COMMENTS_REQUESTED, issue);
			});
			break;

		case(ActionConstants.GO_BACK_TO_ISSUES):
			window.setTimeout(function() {	//TODO: Replace with Dispatcher.waitFor() call
				CommentsStore.emitChange(COMMENTS_DISMISSED)
			}, 200);
			break;

		default:
			//no op
	}
});

module.exports = CommentsStore;