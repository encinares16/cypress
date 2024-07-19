const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false, 
    baseUrl: 'https://vm2-testpay.apollo.com.ph/',
    setupNodeEvents(on, config) {
      return {
        browsers: config.browsers.filter(
          (b) => b.family === 'chromium' && b.name !== 'electron'
        ), 
      }
    },
  },
});
