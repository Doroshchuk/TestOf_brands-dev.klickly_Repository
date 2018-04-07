exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },

    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['tests/CheckingAllElements_spec.js'],

    jasmineNodeOpts: {
        onComplete: null,
        isVerbose: false,
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 30000
    },

    // Define things that will happen before start testing.
    onPrepare: function() {
        // var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
        // // Add jasmine spec reporter
        // jasmine.getEnv().addReporter(new SpecReporter({
        //     displayFailuresSummary: true,
        //     displayFailedSpec: true,
        //     displaySuiteNumber: true,
        //     displaySpecDuration: true
        // }));

        browser.driver.manage().window().maximize();
    }
};