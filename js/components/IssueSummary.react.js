var React = require('react');
var AppConstants = require('../constants/AppConstants');

var IssueSummary = React.createClass({
	_abridgeText: function(text) {
		var abridgedText = '';
		var charCount = 0;
		text.split(' ').forEach(function(word) {
			if(charCount > AppConstants.ISSUE_SUMMARY_CH_LIMIT) return;
			charCount += word.length + 1;
			abridgedText += word + " ";	
		});

		return abridgedText.trim() + "...";
	},

	render: function() {
		var text = this.props.text;
		if(!this.props.displayFullText) {
			text = this._abridgeText(text);
		}

		return (
			<div>
				<p className="issues-list-text"> {text} </p>
			</div>
		);
	},




});

module.exports = IssueSummary;

