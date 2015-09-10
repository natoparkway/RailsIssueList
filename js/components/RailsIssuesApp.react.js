var React = require('react');
var IssuesList = require('./IssuesList.react');
var PrevNextButtons = require('./PrevNextButtons.react');
var GithubAPIMethods = require('../utils/GithubAPIMethods');
var IssuesStore = require('../stores/IssuesStore');
var DispatcherActions = require('../actions/DispatcherActions');


var RailIssuesApp = React.createClass({
	getInitialState: function() {
		return {
			issues: []
		}
	},

	render: function() {
		return (
			<div>
				<PrevNextButtons pageNumber={IssuesStore.getCurrentPageNumber()}/>
				<IssuesList issues={this.state.issues}/>
				<PrevNextButtons pageNumber={IssuesStore.getCurrentPageNumber()}/>
			</div>

		);
	},

	componentDidMount:function() {
		IssuesStore.addChangeListener(this._onChange);
		DispatcherActions.getCurrIssuesPage();
	},

	componentWillUnmount: function() {
		IssuesStore.removeChangeListener(this._onChange);
	},

	_onChange: function() {
		this.setState({
			issues: IssuesStore.getIssues()
		});
		
	}
});

module.exports = RailIssuesApp;