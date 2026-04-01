// cypress/support/pages/BasePage.js

export default class BasePage {

    clickElement(selector, timeout = 8000) {
        cy.get(selector, { timeout })
            .should('be.visible')
            .and('not.be.disabled')
            .click();
    }

    doubleClickElement(selector, timeout = 8000) {
        cy.get(selector, { timeout })
            .should('be.visible')
            .and('not.be.disabled')
            .dblclick();
    }


    typeText(selector, text, timeout = 8000) {
        cy.get(selector, { timeout })
            .should('be.visible')
            .and('not.be.disabled')
            .clear()
            .type(text, { delay: 0 }); // delay 0 deixa a digitação mais rápida
    }

    setSliderValue(selector, value, timeout = 8000) {
        cy.get(selector, { timeout })
            .should('be.visible')
            .invoke('val', value)
            .trigger('change');
    }

    validateText(selector, expectedText, timeout = 8000) {
        cy.get(selector, { timeout })
            .should('be.visible')
            .and('contain.text', expectedText);
    }

    validateValue(selector, expectedValue, timeout = 8000) {
        cy.get(selector, { timeout })
            .should('be.visible')
            .and('have.value', expectedValue);
    }

    validateAttribute(selector, attribute, expectedValue, timeout = 8000) {
        cy.get(selector, { timeout })
            .should('have.attr', attribute, expectedValue);
    }
}