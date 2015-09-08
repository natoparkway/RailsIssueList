var React = require('react');

var IssueState = React.createClass({
	_pickColor: function(state) {
		var color;
		switch(state) {
			case 'open':
				color = 'red';
				break;
			case 'closed':
				color = 'green';
				break;
			default:
				color = '#889CFF';
		}

		return color;
	},

	render: function() {
		var state = this.props.state;
		var divStyle = {
			"backgroundColor": this._pickColor(state)
		}


		return (
			<div className="issue-state" style={divStyle}> {state.toUpperCase()} </div>
		);
	}
});

module.exports = IssueState;

