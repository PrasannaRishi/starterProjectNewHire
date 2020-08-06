Feature: Verify Amazon Search Functionality

	#Sample comment
	@autoReady
	Scenario: Verify user sees language/country options
		Given the browser is at the Amazon home page
		When the user clicks the Flag
		Then the user sees Language options
		And the user sees Change country/region

	@autoReady
	Scenario: Verify user can change country/region
		Given the browser is at the Amazon home page
		When the user clicks the Flag
		And the user clicks Change country/region
		And the user selects Germany (Deutschland)
		And the user clicks Go to website
		Then the user sees the site in German in a new tab