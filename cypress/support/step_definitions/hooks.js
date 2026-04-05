import { AfterStep } from "@badeball/cypress-cucumber-preprocessor";

AfterStep(function () {
    cy.screenshot({ capture: 'viewport' });
});
