module.exports = function (config) {
  if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
    console.log('Make sure the SAUCE_USERNAME and SAUCE_ACCESS_KEY environment variables are set.')
    process.exit(1)
  }

  // var sauceParams = {
  //   testName: "Karma and Sauce Labs Demo",
  //   username: process.env.SAUCEUSER,       // optional: These are the default settings
  //   accessKey: process.env.ACCESSSAUCE,
  //   startTunnel: true,
  //   tunnelIdentifier: "rdc-on-sauce-tunnel-us",
  //   name: "echoSauceTunnel",
  //   // proxyHost: "ondemand.saucelabs.com",       
  //   // proxyPort: 443,
  //   connectOptions: {
  //     logfile: 'sauce_connect.log',
  //     noSslBumpDomains: "all"
  //   }
  // }

  const customLaunchers = {
    sl_chromeW3C: {
      base: 'SauceLabs',
      browserName: 'chrome',
      browserVersion: 'latest',
      'sauce:options': {
        tags: ['w3c-chrome']
      }
    }
  };

  config.set({
    // sauceLabs: sauceParams,
    sauceLabs: {
      testName: 'Karma Demo Tests',
      connectOptions: {
        logfile: 'sauce_connect.log',
        noSslBumpDomains: "all"
      }
    },
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'js/*.js',
      'tests/*_spec.js'
    ],
    reporters: ['dots', 'saucelabs'],
    colors: true,

    captureTimeout: 120000,
    customLaunchers: customLaunchers,
    browsers: Object.keys(customLaunchers),
    singleRun: true
  })
};
