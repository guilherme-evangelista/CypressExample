import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import TabelasDinamicasPage from "../../pages/TabelasDinamicasPage";

Given("que estou na aba de Tabelas Dinâmicas", () => {
    TabelasDinamicasPage.acessarPagina();
    TabelasDinamicasPage.acessarAbaTabelasDinamicas();
});

When("pesquiso pelo usuário {string}", (nome) => {
    TabelasDinamicasPage.pesquisarUsuario(nome);
});

When("clico para ordenar pela coluna {string}", (coluna) => {
    TabelasDinamicasPage.ordenarPorColuna(coluna);
});

When("seleciono o primeiro usuário da lista", () => {
    TabelasDinamicasPage.selecionarUsuarioPeloIndice(1);
});

When("seleciono a opção de selecionar todos no cabeçalho", () => {
    TabelasDinamicasPage.selecionarTodos();
});

When("clico no botão de editar do usuário {string}", (nome) => {
    TabelasDinamicasPage.clicarBotaoEditar(nome);
});

When("clico no botão de excluir do usuário {string}", (nome) => {
    TabelasDinamicasPage.clicarBotaoExcluir(nome);
});

Then("visualizo apenas o registro {string} na tabela", (nome) => {
    TabelasDinamicasPage.validarUsuarioNaLista(nome);
    TabelasDinamicasPage.validarTamanhoDaTabela(1);
});

Then("verifico que a tabela não exibe nenhum resultado", () => {
    TabelasDinamicasPage.validarUsuarioNaoEstaNaLista("Usuário Inexistente");
    TabelasDinamicasPage.validarTamanhoDaTabela(0);
});

Then("a listagem de usuários deve ser reordenada com os {string} em ordem alfabética", (coluna) => {
    TabelasDinamicasPage.validarUsuariosOrdenadosPor(coluna);
    TabelasDinamicasPage.validarTamanhoDaTabela(5)
});

Then("o rodapé deve exibir a mensagem {string}", (mensagem) => {
    TabelasDinamicasPage.validarContagemSelecao(mensagem);
});

Then("visualizo a mensagem de confirmação {string} na tela", (mensagem) => {
    TabelasDinamicasPage.validarMensagemNaTela(mensagem);
});