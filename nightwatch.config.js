require('babel-register')
var packageJson = require('./package.json')

var defaultPauzeBeforeTestStart = 3000

module.exports = {
  test_settings: {
    ci_chrome: {
      launch_url: "http://ondemand.saucelabs.com:80",
      selenium_port: 80,
      selenium_host: 'ondemand.saucelabs.com',
      silent: true,
      username: process.env.SAUCE_CRED_USR,
      access_key: process.env.SAUCE_CRED_PSW,
      desiredCapabilities: {
        name: packageJson.name,
        build: packageJson.name + '#PR-${CHANGE_ID}-build-${BUILD_NUMBER}',
        'tunnel-identifier': process.env.TUNNEL_IDENTIFIER,
        browserName: 'chrome'
      },
      globals: {
        waitForConditionTimeout: 10000,
        waitBeforeTestStart: defaultPauzeBeforeTestStart
      }
    },

    ci_firefox: {
      launch_url: "http://ondemand.saucelabs.com:80",
      selenium_port: 80,
      selenium_host: 'ondemand.saucelabs.com',
      silent: true,
      username: process.env.SAUCE_CRED_USR,
      access_key: process.env.SAUCE_CRED_PSW,
      desiredCapabilities: {
        name: packageJson.name,
        build: packageJson.name + '#PR-${CHANGE_ID}-build-${BUILD_NUMBER}',
        'tunnel-identifier': process.env.TUNNEL_IDENTIFIER,
        browserName: 'firefox'
      },
      globals: {
        waitForConditionTimeout: 10000,
        waitBeforeTestStart: defaultPauzeBeforeTestStart
      }
    },

    ci_ie11: {
      launch_url: "http://ondemand.saucelabs.com:80",
      selenium_port: 80,
      selenium_host: 'ondemand.saucelabs.com',
      silent: true,
      username: process.env.SAUCE_CRED_USR,
      access_key: process.env.SAUCE_CRED_PSW,
      desiredCapabilities: {
        name: packageJson.name,
        build: packageJson.name + '#PR-${CHANGE_ID}-build-${BUILD_NUMBER}',
        'tunnel-identifier': process.env.TUNNEL_IDENTIFIER,
        browserName: 'internet explorer',
        platform: 'Windows 10',
        version: '11.103',
      },
      globals: {
        waitForConditionTimeout: 10000,
        waitBeforeTestStart: defaultPauzeBeforeTestStart
      }
    },

    ci_safari: {
      launch_url: "http://ondemand.saucelabs.com:80",
      selenium_port: 80,
      selenium_host: 'ondemand.saucelabs.com',
      silent: true,
      username: process.env.SAUCE_CRED_USR,
      access_key: process.env.SAUCE_CRED_PSW,
      desiredCapabilities: {
        name: packageJson.name,
        build: packageJson.name + '#PR-${CHANGE_ID}-build-${BUILD_NUMBER}',
        'tunnel-identifier': process.env.TUNNEL_IDENTIFIER,
        browserName: 'safari'
      },
      globals: {
        waitForConditionTimeout: 10000,
        waitBeforeTestStart: 5000
      }
    }
  }
}
