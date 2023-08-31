const { defineConfig } = require("cypress");
module.exports = defineConfig({
  "defaultCommandTimeout": 30000,
  "pageLoadTimeout":30000,
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  retries: 0,
  env:{
    'appUrl':"https://staging.engineer.ai"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

    },
  },
});
