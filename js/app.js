var React = require('react');
var IssuesList = require('./components/IssuesList.react');
var GithubAPIMethods = require('./utils/GithubAPIMethods');

GithubAPIMethods.getIssuesPage(1, function(data, error) {
	console.log("Callback called");
	React.render(
		<IssuesList issues={data}/>,
		document.getElementById('rails-issues-app')
	);
});

