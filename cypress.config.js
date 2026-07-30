const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    video: true,
    videoOnFailOnly: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});