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

    validateElementDoesNotExist(selector, timeout = 8000) {
        cy.get(selector, { timeout }).should('not.exist'); 
    }

    validateElementIsChecked(selector, timeout = 8000) {
        cy.get(selector, { timeout }).should('be.checked');
    }

    validateElementIsNotChecked(selector, timeout = 8000) {
        cy.get(selector, { timeout }).should('not.be.checked');
    }

    mockWindowAlert(callbackFn) {
        cy.on('window:alert', callbackFn);
    }

    mockWindowConfirm(acaoAceitar, callbackFn) {
        cy.on('window:confirm', (texto) => {
            if (callbackFn) callbackFn(texto);
            return acaoAceitar;
        });
    }

    mockWindowPrompt(textoRetorno, alias = 'windowPrompt') {
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns(textoRetorno).as(alias);
        });
    }

    validarPromptChamado(alias = 'windowPrompt') {
        cy.get(`@${alias}`).should('be.called');
    }

    stubWindowOpen(alias = 'windowOpen') {
        cy.window().then((win) => {
            cy.stub(win, 'open').as(alias);
        });
    }

    validateStubCalledWithMatch(alias, regexMatcher) {
        cy.get(`@${alias}`).should('be.calledWithMatch', regexMatcher);
    }
}