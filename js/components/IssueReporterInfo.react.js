var React = require('react');

var IssueReporterInfo = React.createClass({
	render: function() {
		var user = this.props.user;

		return (
			<div>
				<img className="user-avatar" src={user.avatar_url}/>
				<p className="username-title issues-list-text"> {user.login} </p>
			</div>
		);
	}
});

module.exports = IssueReporterInfo;