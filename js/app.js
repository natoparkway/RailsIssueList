var React = require('react');
var RailsIssuesApp = require('./components/RailsIssuesApp.react');
var IssueDetailsPage = require('./components/IssueDetailsPage.react');
var CommentsStore = require('./stores/CommentsStore');
var ActionConstants = require('./constants/ActionConstants.js');
var AppDispatcher = require('./dispatcher/AppDispatcher.js');

React.render(
		<RailsIssuesApp/>,
		document.getElementById('rails-issues-app')
);

//When comments are requested, render the IssueDetailsPage
CommentsStore.addCommentsRequestedListener(function(issue) {
	React.render(
		<IssueDetailsPage issue={issue}/>,
		document.getElementById('rails-issues-app')
	);
});

CommentsStore.addCommentsDismissedListener(function() {
	React.render(
		<RailsIssuesApp/>,
		document.getElementById('rails-issues-app')
	);
});

