import BasePage from './BasePage';

class TabelasDinamicasPage extends BasePage {

    get elements() {
        return {
            btnTabelasDinamicas: 'span:contains("Tabelas Dinâmicas")',
            inputBusca: 'input[data-testid="table-search"]',
            tabelaUsuarios: 'table[data-testid="users-table"]',
            checkboxSelecionarTodos: 'input[data-testid="select-all"]',
            colunaNome: 'th[data-testid="sort-name"]',
            colunaEmail: 'th[data-testid="sort-email"]',
            colunaCargo: 'th[data-testid="sort-role"]',
            colunaStatus: 'th[data-testid="sort-status"]',
            textoContagemSelecao: 'div[data-testid="selection-count"]',
            bannerFeedback: 'div[data-testid="table-info"]',
            quantidadeDeUsuarios: 'tbody tr'
        };
    }

    acessarAbaTabelasDinamicas() {
        this.clickElement(this.elements.btnTabelasDinamicas);
    }

    pesquisarUsuario(nome) {
        this.typeText(this.elements.inputBusca, nome);
    }

    ordenarPorNome() {
        this.clickElement(this.elements.colunaNome);
    }

    ordenarPorEmail() {
        this.clickElement(this.elements.colunaEmail);
    }

    ordenarPorCargo() {
        this.clickElement(this.elements.colunaCargo);
    }

    ordenarPorStatus() {
        this.clickElement(this.elements.colunaStatus);
    }

    selecionarTodos() {
        this.checkElement(this.elements.checkboxSelecionarTodos);
    }

    deselecionarTodos() {
        this.uncheckElement(this.elements.checkboxSelecionarTodos);
    }

    selecionarUsuarioPeloIndice(indice) {
        this.checkElement(`input[data-testid="select-row-${indice}"]`);
    }

    clicarBotaoEditar(nome) {
        this.clickElement(`tr:contains("${nome}") [data-testid^="edit-"]`);
    }

    clicarBotaoExcluir(nome) {
        this.clickElement(`tr:contains("${nome}") [data-testid^="delete-"]`);
    }

    ordenarPorColuna(coluna) {
        switch (coluna) {
            case "Nome":
                this.clickElement(this.elements.colunaNome);
                break;
            case "Email":
                this.clickElement(this.elements.colunaEmail);
                break;
            case "Cargo":
                this.clickElement(this.elements.colunaCargo);
                break;
            case "Status":
                this.clickElement(this.elements.colunaStatus);
                break;
            default:
                throw new Error(`Coluna inválida: ${coluna}`);
        }
    }

    validarMensagemNaTela(mensagem) {
        this.validateTextOnScreen(mensagem);
    }

    validarContagemSelecao(textoEsperado) {
        this.validateInnerTextOfElement(this.elements.textoContagemSelecao, textoEsperado);
    }

    validarUsuarioNaLista(nome) {
        this.validateText(this.elements.tabelaUsuarios, nome);
    }

    validarUsuarioNaoEstaNaLista(nome) {
        this.validateElementDoesNotContainText(this.elements.tabelaUsuarios, nome);
    }

    validarTamanhoDaTabela(tamanhoEsperado) {
        this.validateQuantityOfElements(this.elements.quantidadeDeUsuarios, tamanhoEsperado);
    }

    validarUsuariosOrdenadosPor(coluna) {
        switch (coluna) {
            case "nomes":
                this.validateTextsInElementsAreSortedByAscendingOrder('td[data-testid^="cell-name-"]');
                break;
            case "emails":
                this.validateTextsInElementsAreSortedByAscendingOrder('td[data-testid^="cell-email-"]');
                break;
            case "cargos":
                this.validateTextsInElementsAreSortedByAscendingOrder('tbody tr td:nth-child(4)');
                break;
            case "status":
                this.validateTextsInElementsAreSortedByAscendingOrder('tbody tr td:nth-child(5)');
                break;
            default:
                throw new Error(`Coluna inválida: ${coluna}`);
        }
    }
}

export default new TabelasDinamicasPage();
