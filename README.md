#RailsIssueList

###How to run:
	Navigate to root directory
	run 'http-server' (if you don't have http-server module installed, you can use python to start one or npm install http-server)
	Navigate to localhost:8080 (or whichever port you specified)

###Tests:
	Unfortunately I did not have enough time to implement tests.

###Features:
	Default page
		Displays a list of 25 issues at a time
		Allows the user to navigate between pages
		Each issue displays
			Issue number and title
			Labels
			Reporter's username and gravatar
			The first 140 characters of the summary, ending on a clean word
	Issue Details Page
		Clicking on an individualized issue on the default page takes you to a issue details page
		The detailed issue displays
			Issue state and title
			Labels
			Reporter's username and gravatar
			The complete issue summary
		The page also displays any comments on that issue

###Places for improvement:
	No routing mechanism, so back button does not work and state is not saved on refresh
	IssuesStore does not cache and must make a GET request everytime the user changes the page
	@-notation refrences to GitHub users do not link to profiles.
	