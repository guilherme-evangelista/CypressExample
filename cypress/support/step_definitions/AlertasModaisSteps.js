import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import AlertasModaisPage from "../../pages/AlertasModaisPage";

Given("que estou na aba de Alertas e Modais", () => {
    AlertasModaisPage.acessarPagina();
    AlertasModaisPage.clicarAbaAlertasEModais();
});

When("aciono o disparo de um alerta nativo garantindo a mensagem {string}", (mensagem) => {
    AlertasModaisPage.validateAlertText(mensagem);
    AlertasModaisPage.clicarBotaoMostrarAlert();
});

When("aceito a caixa de confirmacao nativa", () => {
    AlertasModaisPage.acceptAlertOrConfirm();
    AlertasModaisPage.clicarBotaoMostrarConfirm();
});

When("recuso a caixa de confirmacao nativa", () => {
    AlertasModaisPage.cancelConfirm();
    AlertasModaisPage.clicarBotaoMostrarConfirm();
});

When("preencho a caixa de prompt nativa com {string}", (texto) => {
    AlertasModaisPage.typeInPrompt(texto);
    AlertasModaisPage.clicarBotaoMostrarPrompt();
});

When("cancelo a caixa de prompt nativa", () => {
    AlertasModaisPage.typeInPrompt(null);
    AlertasModaisPage.clicarBotaoMostrarPrompt();
});

When("abro o modal customizado", () => {
    AlertasModaisPage.clicarBotaoAbrirModal();
});

Then("visualizo a mensagem de feedback {string}", (mensagem) => {
    AlertasModaisPage.validarMensagemDeFeedbackVisivel(mensagem);
});

Then("o modal deve exibir o titulo e corpo corretamente", () => {
    AlertasModaisPage.validarTituloModalVisivel();
    AlertasModaisPage.validarCorpoModalVisivel();
});

Then("ao fechar o modal ele deve desaparecer da tela", () => {
    AlertasModaisPage.clicarBotaoFecharModal();
    AlertasModaisPage.validarModalFechado();
});
