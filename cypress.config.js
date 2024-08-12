const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.URL_VM2,
    chromeWebSecurity: false, 
    setupNodeEvents(on, config) {

      config.env = {
        USERNAME: process.env.QA_USER,
        PASSWORD: process.env.QA_PASSWORD,
      }
      return config
      // return {
      //   browsers: config.browsers.filter(
      //     (b) => b.family === 'chromium' && b.name !== 'electron'
      //   ), 
      // }
    },
  },
});
