import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ElementosBasicosPage from "../../pages/ElementosBasicosPage";

Given("que estou na tela inicial QA Playground", () => {
    cy.clearAllCookies();
    cy.clearLocalStorage();
    cy.clearAllSessionStorage();
    ElementosBasicosPage.acessarPagina();
});

Then("a URL atual deve ser a correta", () => {
    cy.url().should('eq', ElementosBasicosPage.url);
});

When("clico no botão clique aqui", () => {
    ElementosBasicosPage.clicarBotaoSimples();
});

When("clico no botão duplo clique", () => {
    ElementosBasicosPage.clicarBotaoDuplo();
});

Then("valido que o botão clique aqui possui {string} clique", (quantidade) => {
    ElementosBasicosPage.btnCliqueAqui.should('contain', quantidade);
});

Then("valido que o botão duplo clique possui {string} clique", (quantidade) => {
    ElementosBasicosPage.btnDuploClique.should('contain', quantidade);
});

When("escrevo no campo de texto {string}", (texto) => {
    ElementosBasicosPage.preencherTexto(texto);
});

Then("valido que o campo de texto possui digitado {string}", (textoValidacao) => {
    ElementosBasicosPage.inputTexto.should('have.value', textoValidacao);
});

When("seleciono a opcao no dropdown de framework {string}", (framework) => {
    ElementosBasicosPage.selecionarDropdown(framework);
});

Then("valido que o dropdown de framework exibe a opcao {string}", (textoEsperado) => {
    ElementosBasicosPage.dropdown.should('contain', textoEsperado);
});

When("altero o valor do slider para {string}", (valor) => {
    ElementosBasicosPage.alterarSlider(valor);
});

Then("valido que o slider possui o valor {string}", (valor) => {
    ElementosBasicosPage.slider.should('have.value', valor);
});

When("clico no interruptor", () => {
    ElementosBasicosPage.clicarInterruptor();
});

Then("valido que o interruptor esta ativado", () => {
    ElementosBasicosPage.switchInterruptor.should('have.attr', 'aria-checked', 'true');
});

Then("valido que o interruptor esta desativado", () => {
    ElementosBasicosPage.switchInterruptor.should('have.attr', 'aria-checked', 'false');
});

