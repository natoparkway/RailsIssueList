var React = require('react');
var DispatcherActions = require('../actions/DispatcherActions');

var PrevNextButtons = React.createClass({
	render: function() {
		return (
			<div className="btn-container">
				<span onClick={this._prevClicked} className="btn prev-btn">Prev</span>
				<span className="page-number">{this.props.pageNumber}</span>
				<span onClick={this._nextClicked} className="btn next-btn">Next</span>
			</div>
		);
	},

	_prevClicked: function() {
		DispatcherActions.getIssuesPage(this.props.pageNumber - 1);
	},

	_nextClicked: function() {
		DispatcherActions.getIssuesPage(this.props.pageNumber + 1);
	}
});

module.exports = PrevNextButtons;