var React = require('react');
var IssueLabels = require('./IssueLabels.react');
var IssueReporterInfo = require('./IssueReporterInfo.react');
var IssueSummary = require('./IssueSummary.react');
var IssueHeader = require('./IssueHeader.react');

var ShortIssue = React.createClass({
	render: function() {
		var issue = this.props.issue;

		return (
			<li className="short-issue">
				<IssueHeader issue={issue}/>
				<IssueSummary text={issue.body} displayFullText={false}/>
				<div className="issues-list-text small-text"> 
					Issue #{issue.number} opened by {issue.user.login}
				</div>
			</li>
		);
	}
});

module.exports = ShortIssue;

