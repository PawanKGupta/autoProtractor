/*
#----------------------------------------------------------------
# Original Author       : Pawan K Gupta
# Created Date          : 06/12/2019
# Last Modified by      : Pawan K Gupta
# Last Modification Date: 31/12/2019
#----------------------------------------------------------------
*/

import { browser } from 'protractor';
import htmlreporter = require('protractor-beautiful-reporter');
import { browserConfig } from './browser.conf';
import { suite } from './TestSuites/MyProject/suites';

exports.config = {
  framework: 'jasmine',
  capabilities: browserConfig.capabilities,
  restartBrowserBetweenTests: true,
  onPrepare: () => {
    jasmine.getEnv().addReporter(new htmlreporter({
      docTitle: 'My Project Report',
      docName: 'Report.html',
      baseDirectory: './Report',
      screenshotsSubfolder: 'screenshot',
      jsonsSubfolder: 'jsons',
      takeScreenShotsForSkippedSpecs: true,
      takeScreenShotsOnlyForFailedSpecs: true,
      preserveDirectory: true,
      gatherBrowserLogs: false,
      clientDefaults: {
        columnSettings: {
          displayTime: true,
          displayBrowser: true,
          displaySessionId: false,
          displayOS: true,
          inlineScreenshots: false,
          warningTime: 3000,
          dangerTime: 10000,
        },
        showTotalDurationIn: 'header',
        totalDurationFormat: 'hms',
      },
      sortFunction: function sortFunction(a, b) {
        if (a.instanceId < b.instanceId) { return -1; } else if (a.instanceId > b.instanceId) { return 1; }
        if (a.timestamp < b.timestamp) { return -1; } else if (a.timestamp > b.timestamp) { return 1; }
        return 0;
      },
    }).getJasmine2Reporter());
    browser.driver.manage().window().maximize();
  },
  jasmineNodeOpts: {
    isVerbose: true,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 400000,
    allScriptsTimeout: 200000,
  },

  suites: suite.HomePage,
  // specs: ['./../Test/MyProject/TestSuites/CustomerPortal/HomePage/RequestTile/ViewAllRequest/ViewAllRequest.js'],
  seleniumAddress: 'http://localhost:4444/wd/hub',

};
