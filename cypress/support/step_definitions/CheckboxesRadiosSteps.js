import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CheckboxesRadiosPage from "../../pages/CheckboxesRadiosPage";

Given("que estou na aba de Checkboxes e Radios", () => {
    CheckboxesRadiosPage.acessarPagina();
    CheckboxesRadiosPage.clicarAbaCheckboxesRadios();
});

When("marco a opcao {string}", (opcao) => {
    CheckboxesRadiosPage.marcarCheckbox(opcao);
});

When("marco o master checkbox de Selecionar Todas", () => {
    CheckboxesRadiosPage.marcarSelecionarTodas();
});

When("desmarco o master checkbox de Selecionar Todas", () => {
    CheckboxesRadiosPage.desmarcarSelecionarTodas();
});

When("foco e seleciono o radio {string}", (radioId) => {
    CheckboxesRadiosPage.clicarRadio(radioId);
});

Then("valido que a tela foi carregada exibindo o contador {string}", (quantidade) => {
    CheckboxesRadiosPage.validarContador(quantidade);
});

Then("valido que a opcao {string} esta marcada", (opcao) => {
    CheckboxesRadiosPage.validarCheckboxMarcado(opcao);
});

Then("valido que a opcao {string} esta desmarcada", (opcao) => {
    CheckboxesRadiosPage.validarCheckboxDesmarcado(opcao);
});

Then("valido que o contador de selecionados exibe {string}", (quantidade) => {
    CheckboxesRadiosPage.validarContador(quantidade);
});

Then("valido que o radio {string} esta marcado", (radioId) => {
    CheckboxesRadiosPage.validarRadioMarcado(radioId);
});

Then("valido que o radio {string} esta desmarcado", (radioId) => {
    CheckboxesRadiosPage.validarRadioDesmarcado(radioId);
});
