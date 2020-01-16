export let browserConfig = {
  capabilities: {
    browserName: 'chrome',
    marionatte: true,
    acceptSslCerts: true,
    acceptInsecureCerts: true,
    chromeOptions: {
      args: [
        '--start-maximized',
      ],
    },
  },
  multiCapabilities: [{
    browserName: 'firefox',
    marionatte: true,
    acceptSslCerts: true,
    acceptInsecureCerts: true,
  }, {
    browserName: 'chrome',
    marionatte: true,
    acceptSslCerts: true,
    acceptInsecureCerts: true,
    getPageTimeout: 30,
    chromeOptions: {
      args: [
        '--start-maximized',
      ],
    },
  },
  {
    browserName: 'internet explorer',
    marionatte: true,
    acceptSslCerts: true,
    acceptInsecureCerts: true,
  }],
};
