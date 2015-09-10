var keyMirror = require('react/lib/keyMirror');

// Define action constants
module.exports = keyMirror({
  GET_ISSUES: null,       // Gets a page of new github issues
  GET_NEXT_ISSUES: null,
  GET_PREV_ISSUES: null,
  GET_ISSUE_COMMENTS: null,	//Gets the comments for a given issue
  GO_BACK_TO_ISSUES: null,
});