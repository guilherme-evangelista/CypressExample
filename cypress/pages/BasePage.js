export default class BasePage {

    get url() { return 'https://playground-for-qa.vercel.app/playground'; }

    acessarPagina() {
        cy.clearAllCookies();
        cy.clearLocalStorage();
        cy.clearAllSessionStorage();
        cy.visit(this.url);
        cy.wait(1500);
    }

    stubWindowOpen(alias = 'windowOpen') {
        cy.window().then((win) => {
            cy.stub(win, 'open').as(alias);
        });
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

    pressKey(selector, keyCommand, timeout = 8000) {
        cy.get(selector, { timeout })
            .should('be.visible')
            .type(`{${keyCommand}}`);
    }

    selectOption(selector, optionValue, timeout = 8000) {
        cy.get(selector, { timeout })
            .should('be.visible')
            .select(optionValue);
    }

    checkElement(selector, timeout = 8000) {
        cy.get(selector, { timeout })
            .should('be.visible')
            .check({ force: true });
    }

    uncheckElement(selector, timeout = 8000) {
        cy.get(selector, { timeout })
            .should('be.visible')
            .uncheck({ force: true });
    }

    setSliderValue(selector, value, timeout = 8000) {
        cy.get(selector, { timeout })
            .should('be.visible')
            .invoke('val', value)
            .trigger('change');
    }

    clickElementByText(text, timeout = 8000) {
        cy.contains(text, { timeout }).should('be.visible').click();
    }

    acceptAlertOrConfirm() {
        cy.on('window:alert', () => true);
        cy.on('window:confirm', () => true);
    }

    cancelConfirm() {
        cy.on('window:confirm', () => false);
    }

    typeInPrompt(textToType) {
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns(textToType);
        });
    }

    validateAlertText(expectedText) {
        cy.on('window:alert', (text) => {
            expect(text).to.contain(expectedText);
        });
    }

    validateConfirmText(expectedText) {
        cy.on('window:confirm', (text) => {
            expect(text).to.contain(expectedText);
        });
    }

    validateUrl(expectedUrl) {
        cy.url().should('eq', expectedUrl); 
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

    validateTextDoesNotExist(expectedText, timeout = 8000) {
        cy.contains(expectedText, { timeout })
            .should('not.exist');
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

    validateElementIsVisible(selector, timeout = 8000) {
        cy.get(selector, { timeout }).should('be.visible');
    }

    validateElementExists(selector, timeout = 8000) {
        cy.get(selector, { timeout }).should('exist');
    }

    validateTextExists(expectedText, options = {}, timeout = 8000) {
        cy.contains(expectedText, { ...options, timeout }).should('exist');
    }

    validateElementDoesNotExist(selector, timeout = 8000) {
        cy.get(selector, { timeout }).should('not.exist'); 
    }

    validateElementIsChecked(selector, timeout = 8000) {
        cy.get(selector, { timeout }).should('be.checked');
    }

    validateElementIsNotChecked(selector, timeout = 8000) {
        cy.get(selector, { timeout }).should('not.be.checked');
    }

    validateStubCalledWithMatch(alias, regexMatcher) {
        cy.get(`@${alias}`).should('be.calledWithMatch', regexMatcher);
    }

    validateElementDoesNotContainText(selector, text, timeout = 8000) {
        cy.get(selector, { timeout })
            .should('not.contain.text', text);
    }

    validateQuantityOfElements(selector, expectedQuantity, timeout = 8000) {
        cy.get(selector, { timeout }).should('have.length', expectedQuantity);
    }
    
    validateInnerTextOfElement(selector, expectedText, timeout = 8000) {
        cy.get(selector, { timeout })
            .should('have.prop', 'innerText')
            .and('equal', expectedText);
    }

    validateTextsInElementsAreSortedByAscendingOrder(selector, timeout = 8000) {
        cy.get(selector, { timeout })
            .then(($cells) => {
                const screenTexts = Cypress.$.makeArray($cells).map(cell => cell.innerText.trim());
                const expectedSortedTexts = [...screenTexts].sort((a, b) => a.localeCompare(b, 'pt-BR'));
                expect(screenTexts).to.deep.equal(expectedSortedTexts);
            });
    }
}
