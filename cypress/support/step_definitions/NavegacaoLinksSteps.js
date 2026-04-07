import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import NavegacaoLinksPage from "../../pages/NavegacaoLinksPage";

Given("que estou na aba de navegacao e links", () => {
    NavegacaoLinksPage.acessarPagina();
    NavegacaoLinksPage.clicarAbaNavegacao();
});

When("clico em ir para Sobre", () => {
    NavegacaoLinksPage.clicarIrParaSobre();
});

When("clico em ir para Contato", () => {
    NavegacaoLinksPage.clicarIrParaContato();
});

When("clico em ir para Produtos", () => {
    NavegacaoLinksPage.clicarIrParaProdutos();
});

When("clico no botao voltar", () => {
    NavegacaoLinksPage.clicarVoltar();
});

When("clico no botao avancar", () => {
    NavegacaoLinksPage.clicarAvancar();
});

When("clico no link externo", () => {
    NavegacaoLinksPage.clicarLinkExterno();
});

Then("valido que a seção principal de navegação está visível", () => {
    NavegacaoLinksPage.validarTituloDaSecaoVisivel();
});

Then("a página atual informada é {string}", (paginaEsperada) => {
    NavegacaoLinksPage.validarPaginaAtual(paginaEsperada);
});

Then("o histórico possui o tamanho {string}", (tamanhoEsperado) => {
    NavegacaoLinksPage.validarTamanhoHistorico(tamanhoEsperado);
});

Then("sou redirecionado para o Github do autor", () => {
    NavegacaoLinksPage.validarPaginaGithub();
});
