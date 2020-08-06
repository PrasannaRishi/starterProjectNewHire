var reporter = require('cucumber-html-reporter');
var options = {
        theme:          'hierarchy',
        jsonFile:       './e2e/reports/results/results.json',
        output:         './e2e/reports/results/report.html',
        screenshotsDirectory: './e2e/reports/results/screenshots/',
        storeScreenshots: true,
        reportSuiteAsScenarios: true,
        launchReport:   false,
        ignoreBadJsonFile:false,
        name:           'MyQuest',
        noInlineScreenshots: false,
        metadata: {
                "Test Environment": "QA",
                "Browser": "Chrome",
                "Platform": "Windows 10",
                "Executed": "on Virtual Machines"
            }
};
reporter.generate(options);