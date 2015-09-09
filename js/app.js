var React = require('react');
var RailsIssuesApp = require('./components/RailsIssuesApp.react');
var CommentsStore = require('./stores/CommentsStore');

React.render(
		<RailsIssuesApp/>,
		document.getElementById('rails-issues-app')
);



