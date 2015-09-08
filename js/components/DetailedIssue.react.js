var React = require('react');
var IssueLabels = require('./IssueLabels.react');
var IssueReporterInfo = require('./IssueReporterInfo.react');
var IssueSummary = require('./IssueSummary.react');
var IssueHeader = require('./IssueHeader.react');
var IssueState = require('./IssueState.react');

var DetailedIssue = React.createClass({
	render: function() {
		var issue = this.props.issue;

		return (
			<li>
				<IssueHeader issue={issue}/>
				<IssueState state={issue.state}/>
				<IssueSummary text={issue.body} displayFullText={true}/>
				<div className="small-text"> 
					Issue #{issue.number} opened by {issue.user.login}
				</div>
			</li>
		);
	}
});

module.exports = DetailedIssue;