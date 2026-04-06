import BasePage from "./BasePage";

class WaitsESincronizacaoPage extends BasePage {
    get elements() {
        return {
            abaWaits: 'span:contains("Waits e Sincronização")',
            btnIniciarContagem: 'button:contains("Iniciar Contagem")',
            btnCarregarDados: 'button:contains("Carregar Dados")',
            btnAlternarElemento: 'button:contains("Alternar Elemento")'
        }
    }

    clicarAbaWaitsESincronizacao() {
        this.clickElement(this.elements.abaWaits);
    }

    clicarBotaoIniciarContagem() {
        this.clickElement(this.elements.btnIniciarContagem);
    }

    clicarBotaoCarregarDados() {
        this.clickElement(this.elements.btnCarregarDados);
    }

    clicarBotaoAlternarElemento() {
        this.clickElement(this.elements.btnAlternarElemento);
    }

    validarTextoNaTela(texto) {
        this.validateTextOnScreen(texto);
    }

    validarTextoNaoExibidoNaTela(texto) {
        this.validateTextDoesNotExist(texto);
    }
}

export default new WaitsESincronizacaoPage();