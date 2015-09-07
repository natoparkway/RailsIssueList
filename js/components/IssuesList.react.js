var React = require('react');
var ShortIssue = require('./ShortIssue.react');

var IssuesList = React.createClass({
	render: function() {
		var issues = this.props.issues.map(function(issue, index) {
			return (
				<ShortIssue key={index} issue={issue}/>
			);
		});

		return (
			<ul>
				{issues}
			</ul>
		);
	}
});

module.exports = IssuesList;