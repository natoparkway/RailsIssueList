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
		DispatcherActions.getPrevIssuesPage();
	},

	_nextClicked: function() {
		DispatcherActions.getNextIssuesPage();
	}
});

module.exports = PrevNextButtons;