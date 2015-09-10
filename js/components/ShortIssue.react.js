var React = require('react');
var IssueLabels = require('./IssueLabels.react');
var IssueReporterInfo = require('./IssueReporterInfo.react');
var IssueSummary = require('./IssueSummary.react');
var IssueHeader = require('./IssueHeader.react');
var DispatcherActions = require('../actions/DispatcherActions');
var CommentsStore = require('../stores/CommentsStore');
var IssueDetailsPage = require('./IssueDetailsPage.react');

var ShortIssue = React.createClass({
	render: function() {
		var issue = this.props.issue;

		return (
			<li className="short-issue" onClick={this._handleClick}>
				<IssueHeader issue={issue}/>
				<IssueSummary text={issue.body} displayFullText={false}/>
				<div className="small-text"> 
					Issue #{issue.number} opened by {issue.user.login}
				</div>
			</li>
		);
	},

	_handleClick: function() {
		DispatcherActions.getIssueComments(this.props.issue);
	},

	_onChange: function() {
		React.render(
			<IssueDetailsPage issue={this.props.issue}/>,
			document.getElementById('rails-issues-app')
		);
	},
});

module.exports = ShortIssue;

