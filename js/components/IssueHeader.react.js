var React = require('react');
var IssueLabels = require('./IssueLabels.react');

IssueHeader = React.createClass({
	render: function() {
		var issue = this.props.issue;
		var user = issue.user;

		return (
			<div class="issue-header"> 
				<img className="user-avatar" src={user.avatar_url}/>
				<span className="issues-list-text issue-title">{issue.title} #{issue.number}</span>
				<IssueLabels labels={issue.labels}/>
			</div>
		);
	}
});


module.exports = IssueHeader;