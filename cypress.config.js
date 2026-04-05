const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const cypressSplit = require("cypress-split");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  video: true,

  e2e: {
    chromeWebSecurity: false,
    specPattern: "cypress/e2e/**/*.feature",
    
    async setupNodeEvents(on, config) {
      cypressSplit(on, config);
      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },
  },
});