# Install Karma:
> npm install karma --save-dev

</br>

# Install plugins that your project needs:
> npm install karma-jasmine karma-chrome-launcher jasmine-core --save-dev

</br>

# Generating the config file
> karma init karma.conf.js

</br>

# Running Tests

install karma-cli globally first:
> npm install -g karma-cli

Then execute:
> karma start

instead of `./node_modules/karma/bin/karma`

<br>

# Running Karma Tests in Saucelabs

Create a separate config file: `karma-sauce.conf.js`

and create a new script:

```js
"scripts": {
    ...
    "sauce": "karma start karma-sauce.conf.js",
  },
```
Run tests: `npm run sauce` <BR>
Result:
<img src="saucelabs.png"></img>

<br>

**Sample for `karma-sauce.conf.js`:**
```js
module.exports = function (config) {
  if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
    console.log('Make sure the SAUCE_USERNAME and SAUCE_ACCESS_KEY environment variables are set.')
    process.exit(1)
  }

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

```