var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var ActionConstants = require('../constants/ActionConstants.js');
var AppConstants = require('../constants/AppConstants.js');
var EventEmitter = require('events').EventEmitter;
var GithubAPIMethods = require('../utils/GithubAPIMethods');
var _ = require('underscore');

//Private internal data
var _issues = [];
var _pageNumber = 1;

var IssuesStore = _.extend({}, EventEmitter.prototype, {
	emitChange: function() {
		this.emit('change');
	},

	loadPage: function(pageNumber, callback) {
		GithubAPIMethods.getIssuesPage(pageNumber, function(data, error) {
			if(error !== 'success') { //Return, do not emit change if there is an error
				console.log("ERROR: ")
				console.log(error);
				return;
			}

			_issues = data;
			callback();
		});
	},


	addChangeListener: function(callback) {
		this.on('change', callback);
	},

	getCurrentPageNumber: function() {
		return _pageNumber;
	},


	removeChangeListener: function(callback) {
		this.removeListener('change', callback)
	},

	getIssues: function() {
		return _issues;
	}
});

AppDispatcher.register(function(action) {
	switch(action.actionType) {
		case ActionConstants.GET_ISSUES:
			if(action.pageNumber === 0) return; //there are no pages below this
			_pageNumber = action.pageNumber;
			IssuesStore.loadPage(_pageNumber, function() {
				IssuesStore.emitChange();
			});
			break;


		default:
			//no op
	}



});

module.exports = IssuesStore;