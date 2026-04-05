import BasePage from './BasePage';

class AlertasModaisPage extends BasePage {

    get elements() {
        return {
            abaAlertas: 'span:contains("Alertas e Modais")',
            btnAbrirModal: 'button:contains("Abrir Modal")',
            modalTitulo: 'h2:contains("Modal Customizado")',
            btnFecharModal: 'button:contains("Fechar")'
        };
    }

    clicarAbaAlertas() {
        this.clickElement(this.elements.abaAlertas);
    }

    clicarBotaoAlert() {
        this.clickElementByText('Mostrar Alert');
    }

    clicarBotaoConfirm() {
        this.clickElementByText('Mostrar Confirm');
    }

    clicarBotaoPrompt() {
        this.clickElementByText('Mostrar Prompt');
    }

    abrirModal() {
        this.clickElement(this.elements.btnAbrirModal);
    }

    fecharModal() {
        this.clickElement(this.elements.btnFecharModal);
    }

    validarModalAberta() {
        this.validateElementIsVisible(this.elements.btnFecharModal);
    }

    validarModalFechada() {
        this.validateElementDoesNotExist(this.elements.btnFecharModal);
    }

    validarMensagemSucessoGlobal(mensagem) {
        this.validateTextOnScreen(mensagem);
    }

}

export default new AlertasModaisPage();
