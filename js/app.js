var React = require('react');
var RailsIssuesApp = require('./components/RailsIssuesApp.react');
var IssueDetailsPage = require('./components/IssueDetailsPage.react');
var GithubAPIMethods = require('./utils/GithubAPIMethods');
var CommentsStore = require('./stores/CommentsStore');

React.render(
		<RailsIssuesApp/>,
		document.getElementById('rails-issues-app')
)



// GithubAPIMethods.getIssuesPage(1, function(data, error) {
// 	React.render(
// 		<IssueDetailsPage issue={data[5]}/>,
// 		document.getElementById('rails-issues-app')
// 	);
// });

