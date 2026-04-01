const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,

  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    reportPageTitle: "QA Playground - Relatório de Testes",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    code: false
  },
  
  e2e: {
    chromeWebSecurity: false,
    specPattern: "**/*.feature",
    
    async setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
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