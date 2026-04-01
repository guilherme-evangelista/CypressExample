const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  reporter: "cypress-mochawesome-reporter",  // ← adicionar
  reporterOptions: {                          // ← adicionar
    reportDir: "cypress/reports",
    charts: true,
    reportPageTitle: "QA Playground - Relatório de Testes",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    chromeWebSecurity: false,
    specPattern: "**/*.feature",
    async setupNodeEvents(on, config) {
      // Inicializa o plugin do Cucumber
      await addCucumberPreprocessorPlugin(on, config);
      
      // Configura o esbuild para ler os arquivos .feature
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)], // <-- Removido o .default e ajustada a chamada
        })
      );
      
      return config;
    },
  },
});