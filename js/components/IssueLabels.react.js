var React = require('react');

var IssueLabels = React.createClass({
	render: function() {
		var labels = this.props.labels.map(function(label, index) {
			var spanStyle = {backgroundColor: "#" + label.color};
			return (
				<span key={index} style={spanStyle} className="label "> {label.name} </span>
			);
		})

		return (
			<div>{labels}</div>
		);
	}
});

module.exports = IssueLabels;