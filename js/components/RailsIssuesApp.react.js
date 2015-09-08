var React = require('react');
var IssuesList = require('./IssuesList.react');
var PrevNextButtons = require('./PrevNextButtons.react');
var GithubAPIMethods = require('../utils/GithubAPIMethods');
var IssuesStore = require('../stores/IssuesStore');
var DispatcherActions = require('../actions/DispatcherActions');

var RailIssuesApp = React.createClass({
	getInitialState: function() {
		return {
			pageNumber: 1,
			issues: []
		}
	},

	render: function() {
		return (
			<div>
				<PrevNextButtons pageNumber={this.state.pageNumber}/>
				<IssuesList issues={this.state.issues}/>
				<PrevNextButtons pageNumber={this.state.pageNumber}/>
			</div>

		);
	},

	componentDidMount:function() {
		IssuesStore.addChangeListener(this._onChange);
		DispatcherActions.getIssuesPage(1);
	},

	componentWillUnmount: function() {
		IssuesStore.removeChangeListener(this._onChange);
	},

	_onChange: function() {
		var newPageNumber = IssuesStore.getCurrentPageNumber();
		var newIssues = IssuesStore.getIssues();
		this.setState({
			pageNumber: newPageNumber,
			issues: newIssues
		});
		
	}
});

module.exports = RailIssuesApp;