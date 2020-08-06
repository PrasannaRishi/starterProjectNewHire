const { SpecReporter } = require('jasmine-spec-reporter');
var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {

  directConnect: true,

  seleniumAddress: 'http://localhost:4444/wd/hub',

  allScriptsTimeout: 11000,
  capabilities: {
    'browserName': 'chrome',
    // 'proxy':{
    //   'proxyType':'manual',
    //   'httpProxy':'http://qproxy.qdx.com:9090',
    //   'httpsProxy':'http://qproxy.qdx.com:9090'
    // }
    chromeOptions: {
      prefs: {
        "profile.default_content_setting_values.geolocation":2,
      }
    },
    
    'loggingPrefs': {
      'driver':'ALL',
      'server':'ALL',
      'browser':'ALL'
    }
  },
   params: {viewport: 'lg',
    browser: 'chrome',
    app: 'MyQuest',
    test: 'MyQuest Web Automation Testing Framework',
    runtime: 'QA',
    pipeline: 'Upon Request'
   },

  baseUrl: 'https://mq2master.mq.questdiagnostics.com/web/home',
  dataUrl: 'http://qitwvel7ie1158:3000/myQuest/ui',
  signInUrl: 'https://lbqacas.qa.medplus.com/cas/login?service=https%3A%2F%2Fmq2master.mq.questdiagnostics.com%2Fmq-service%2Flogin%2Fcas&mqback=https%3A%2F%2Fmq2master.mq.questdiagnostics.com',

  specs: ['../spec/testSpec.ts'],
  ignoreUncaughtExceptions: true,
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 100000,
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

    jasmine.getEnv().addReporter(new HtmlReporter({baseDirectory: 'tmp/screenshots'}).getJasmine2Reporter());
  }
};
