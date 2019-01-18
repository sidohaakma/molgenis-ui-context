// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'display navbar test': browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.navbar')
      .assert.elementPresent('.navbar-brand')
      .assert.elementPresent('.navbar-expand-md')
      .resizeWindow(200, 400)
      .waitForElementVisible('.navbar-toggler-icon', 5000)
      .assert.cssClassNotPresent('.navbar.navbar-light.bg-light', '.navbar-expand-md')
      .end()
  },
  'display cookiewall': browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.navbar')
      .assert.elementPresent('.navbar-brand')
      .end()
  }
}
