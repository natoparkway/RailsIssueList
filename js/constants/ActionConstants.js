var keyMirror = require('react/lib/keyMirror');

// Define action constants
module.exports = keyMirror({
  GET_ISSUES: null,       // Gets a page of new github issues
  GET_ISSUE_COMMENTS: null,	//Gets the comments for a given issue
});