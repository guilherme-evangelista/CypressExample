import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import FormulariosSimplesPage from "../../pages/FormulariosSimplesPage";
import ElementosBasicosPage from "../../pages/ElementosBasicosPage";

Given("que estou na aba de Formulários Simples", () => {
    ElementosBasicosPage.acessarPagina();
    FormulariosSimplesPage.clicarAbaFormulariosSimples();
});

When("preencho o formulário com dados válidos e aceito os termos", () => {
    FormulariosSimplesPage.preencherCampoNome('John Doe');
    FormulariosSimplesPage.preencherCampoEmail('johndoe@example.com');
    FormulariosSimplesPage.preencherCampoSenha('Password123');
    FormulariosSimplesPage.preencherCampoConfirmarSenha('Password123');
    FormulariosSimplesPage.clicarCheckboxAceitoOsTermos();
});

When("preencho todos os campos de texto corretamente", () => {
    FormulariosSimplesPage.preencherCampoNome('John Doe');
    FormulariosSimplesPage.preencherCampoEmail('johndoe@example.com');
    FormulariosSimplesPage.preencherCampoSenha('Password123');
    FormulariosSimplesPage.preencherCampoConfirmarSenha('Password123');
});

When("clico no botão Enviar sem aceitar os termos", () => {
    FormulariosSimplesPage.clicarBotaoEnviar();
});

When("clico no botão Limpar", () => {
    FormulariosSimplesPage.clicarBotaoLimpar();
});

When("clico no botão Enviar", () => {
    FormulariosSimplesPage.clicarBotaoEnviar();
});

When("preencho o formulário exceto o campo {string}", (campo) => {
    if (campo !== 'Nome') {
        FormulariosSimplesPage.preencherCampoNome('John Doe');
    }
    if (campo !== 'Email') {
        FormulariosSimplesPage.preencherCampoEmail('johndoe@example.com');
    }
    if (campo !== 'Senha') {
        FormulariosSimplesPage.preencherCampoSenha('Password123');
    }
    if (campo !== 'Confirmar Senha') {
        FormulariosSimplesPage.preencherCampoConfirmarSenha('Password123');
    }
});

When("preencho a senha {string} e a confirmação {string}", (senha, confirmarSenha) => {
    FormulariosSimplesPage.preencherCampoSenha(senha);
    FormulariosSimplesPage.preencherCampoConfirmarSenha(confirmarSenha);
});

Then("visualizo a mensagem de sucesso {string}", (mensagem) => {
    FormulariosSimplesPage.validarMensagemNaTela(mensagem);
});

Then("visualizo a mensagem de erro {string}", (mensagem) => {
    FormulariosSimplesPage.validarMensagemNaTela(mensagem);
});

Then("verifico que todos os campos do formulário foram resetados", () => {
    FormulariosSimplesPage.validarCampoNomeVazio();
    FormulariosSimplesPage.validarCampoEmailVazio();
    FormulariosSimplesPage.validarCampoSenhaVazio();
    FormulariosSimplesPage.validarCampoConfirmarSenhaVazio();
    FormulariosSimplesPage.validarAceiteDeTermosDesmarcado();
});

