Feature: Verify Amazon Search Functionality

	#Sample comment
	@autoReady
	Scenario: Verify user sees language/country options
		Given the browser is at the Amazon home page
		When the user hovers on the Flag on the navigation bar
		Then the user sees Language options on the dropdown
			And the user sees Change country/region on the dropdown

	@autoReady
	Scenario: Verify user can change country/region to German
		Given the browser is at the Amazon home page
		When the user hovers on the Flag on the navigation bar
			And the user clicks Change country/region on the dropdown
			And the user selects Germany (Deutschland) on the Website Country/Region page
			And the user clicks Go to website on the Website Country/Region page
		Then the user sees the German Amazon home page on a new tab

	@autoReady
	Scenario Outline: Verify user can change country/region data-driven
		Given the browser is at the Amazon home page
		When the user hovers on the Flag on the navigation bar
			And the user clicks Change country/region on the dropdown
			And the user selects <country> on the Website Country/Region page
			And the user clicks Go to website on the Website Country/Region page
		Then the user sees the <country> Amazon home page on a new tab
		Examples:
			| country       	|
			| Brazil (Brasil) 	|
			| Canada 			|
			| Saudi Arabia 		|
			| Singapore 		|