var React = require('react');
var DetailedIssue = require('./DetailedIssue.react');
var CommentsStore = require('../stores/CommentsStore');
var IssueComment = require('./IssueComment.react');
var BackButton = require('./BackButton.react');

var IssueDetailsPage = React.createClass({
	render: function() {
		var issue = this.props.issue;
		var comments = CommentsStore.getIssueComments(issue.number);
		

		if(comments) {
			comments = comments.map(function(comment, index) {
				return (
					<IssueComment key={index} comment={comment}/>
				);
			});
		}

		return (
			<ul>
				<DetailedIssue issue={issue}/>
				{comments}
				<BackButton/>
			</ul>
		);
	},

	componentWillUnmount: function() {
		console.log('unmounting');
	}
});

module.exports = IssueDetailsPage;