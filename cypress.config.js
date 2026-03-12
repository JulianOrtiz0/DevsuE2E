const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const version = config.env.version || 'local'
      const urls = {
        local: 'https://www.saucedemo.com/',
        qa: 'https://www.saucedemo.com/',
        prod: 'https://www.saucedemo.com/',
      };
      
      allureWriter(on, config);
      config.baseUrl = urls[version];
      return config;
    },
    env: {
      allure: true,
      allureResultsPath: 'allure-results'
    }
  },
});
