export default class BasePage {

    get url() { return 'https://playground-for-qa.vercel.app/playground'; }

    acessarPagina() {
        cy.visit(this.url);
        cy.wait(1500);
    }

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
            .type(text, { delay: 0 });
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

    validateTextOnScreen(expectedText, timeout = 8000) {
        cy.contains(expectedText, { timeout })
            .should('be.visible');
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