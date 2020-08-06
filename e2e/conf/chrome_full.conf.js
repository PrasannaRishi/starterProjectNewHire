const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {

  directConnect: true,

  seleniumAddress: 'http://localhost:4444/wd/hub',

  allScriptsTimeout: 11000,
  capabilities: {
    'browserName': 'chrome',
    chromeOptions: {
      prefs: {
        "profile.default_content_setting_values.geolocation":2,
      }
    },
  },
   params: {viewport: 'lg',
    browser: 'chrome',
    app: 'Amazon',
    test: 'Amazon',
    runtime: 'QA',
    pipeline: 'Upon Request'
   },

  baseUrl: 'http://amazon.com/',
  dataUrl: 'http://qitwvel7ie1158:3000/amazon/ui',

  framework: 'custom',
  specs: [
    '../features/**/*.feature'
  ],

  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    compiler: 'ts:ts-node/register',    // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    require: ['../**/*.step.ts','../support/hooks.ts'],  // require step definition files before executing features
    tags: ['@autoReady'],                           // <string[]> (expression) only execute the features or scenarios with tags matching the expression
    strict: true,                       // <boolean> fail if there are any undefined or pending steps
    'dry-run': false,
    'backtrace':true ,                  // <boolean> invoke formatters without executing steps
    format: 'json:e2e/reports/results/results.json'
  },
  ignoreUncaughtExceptions: true,
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },

  onPrepare() {
    var width;
    var height;
    switch (browser.params.viewport) {
      case 'xs':
        width = 400;
        height = 600;
        break;
      case 'sm':
        width = 600;
        height = 600;
        break;
      case 'md':
        width = 1000;
        height = 700;
        break;
      case 'lg':
        width = 1200;
        height = 800;
        break;
      case 'xl':
        width = 1300;
        height = 900;
        break;
      default:
        width = 1000;
        height = 700;
        break;
    }
    browser.driver
      .manage()
      .window()
      .setSize(width, height);

    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
  }
};
