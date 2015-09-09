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
		console.log('short issue clicked');
		DispatcherActions.getIssueComments(this.props.issue.number);
	},

	componentDidMount: function() {
		console.log('short issue mounted');
		console.log(this.context.toString());
		CommentsStore.addClickListener(this.props.issue.number, this._onChange);
	},

	_onChange: function() {
		React.render(
			<IssueDetailsPage issue={this.props.issue}/>,
			document.getElementById('rails-issues-app')
		);
	},

	componentWillUnmount: function() {
		CommentsStore.removeClickListener(this.props.issue.number, this._onChange);
	}
});

module.exports = ShortIssue;

