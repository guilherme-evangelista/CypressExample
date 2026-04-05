import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import AlertasModaisPage from "../../pages/AlertasModaisPage";
import ElementosBasicosPage from "../../pages/ElementosBasicosPage";

let mensagemAlertCapturada = "";
let mensagemConfirmCapturada = "";

Given("que acesso a aba de alertas e modais", () => {
    ElementosBasicosPage.acessarPagina();
    AlertasModaisPage.clicarAbaAlertas();
});

When("eu clico no botão de alert", () => {
    AlertasModaisPage.mockWindowAlert((texto) => {
        mensagemAlertCapturada = texto;
    });
    AlertasModaisPage.clicarBotaoAlert();
});

When("eu clico no botão de confirm aceitando", () => {
    AlertasModaisPage.mockWindowConfirm(true, (texto) => {
        mensagemConfirmCapturada = texto;
    });
    AlertasModaisPage.clicarBotaoConfirm();
});

When("eu clico no botão de confirm cancelando", () => {
    AlertasModaisPage.mockWindowConfirm(false, (texto) => {
        mensagemConfirmCapturada = texto;
    });
    AlertasModaisPage.clicarBotaoConfirm();
});

When("eu clico no botão de prompt inserindo {string}", (texto) => {
    AlertasModaisPage.mockWindowPrompt(texto);
    AlertasModaisPage.clicarBotaoPrompt();
});

When("eu clico no botão de prompt cancelando", () => {
    AlertasModaisPage.mockWindowPrompt(null);
    AlertasModaisPage.clicarBotaoPrompt();
});

When("eu clico no botão de abrir modal", () => {
    AlertasModaisPage.abrirModal();
});

When("eu clico no botão de fechar a modal", () => {
    AlertasModaisPage.fecharModal();
});

Then("o sistema deve exibir um alerta com a mensagem {string}", (mensagemEsperada) => {
    expect(mensagemAlertCapturada).to.equal(mensagemEsperada);
});

Then("o sistema deve exibir o alerta de confirmação com a mensagem {string}", (mensagemEsperada) => {
    expect(mensagemConfirmCapturada).to.equal(mensagemEsperada);
});

Then("o sistema deve exibir o prompt pedindo texto", () => {
    AlertasModaisPage.validarPromptChamado();
});

Then("a mensagem confirmada do prompt com {string} deve aparecer na tela", (textoPreenchido) => {
    AlertasModaisPage.validarMensagemSucessoGlobal(textoPreenchido);
});

Then("a modal customizada deve ficar visível", () => {
    AlertasModaisPage.validarModalAberta();
});

Then("a modal customizada não deve estar na tela", () => {
    AlertasModaisPage.validarModalFechada();
});
