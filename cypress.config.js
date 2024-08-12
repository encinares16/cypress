import { defineConfig } from "cypress";



module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false, 
    baseUrl: 'https://vm2-testpay.apollo.com.ph/',
    // baseUrl: 'http://10.172.0.52:8080/',
    setupNodeEvents(on, config) {
      return {
        browsers: config.browsers.filter(
          (b) => b.family === 'chromium' && b.name !== 'electron'
        ), 
      }
    },
  },
});
