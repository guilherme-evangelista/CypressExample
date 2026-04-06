import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import WaitsESincronizacaoPage from "../../pages/WaitsESincronizacaoPage";

Given("acesso a aba de waits e sincronizacao", () => {
    WaitsESincronizacaoPage.clicarAbaWaitsESincronizacao();
});

When("clico no botao iniciar contagem", () => {
    WaitsESincronizacaoPage.clicarBotaoIniciarContagem();
});

When("clico no botao alternar elemento", () => {
    WaitsESincronizacaoPage.clicarBotaoAlternarElemento();
});

When("clico no botao carregar dados", () => {
    WaitsESincronizacaoPage.clicarBotaoCarregarDados();
});

Then("valido que o texto {string} é exibido na tela", (texto) => {
    WaitsESincronizacaoPage.validarTextoNaTela(texto);
});

Then("valido que o texto {string} não é mais exibido na tela", (texto) => {
    WaitsESincronizacaoPage.validarTextoNaoExibidoNaTela(texto);
});