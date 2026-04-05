import BasePage from './BasePage';

class AlertasModaisPage extends BasePage {

    get elements() {
        return {
            abaAlertas: 'span:contains("Alertas e Modais")',
            btnAlert: 'button:contains("Mostrar Alert")',
            btnConfirm: 'button:contains("Mostrar Confirm")',
            btnPrompt: 'button:contains("Mostrar Prompt")',
            btnAbrirModal: 'button:contains("Abrir Modal")',
            mensagemFeedbackBox: '.text-orange-500, p:contains("!")',
            modalTitle: 'h2:contains("Modal Customizado")',
            modalBody: 'p:contains("Este é um modal personalizado com overlay e botão de fechar.")',
            btnFecharModal: 'button:contains("Fechar")'
        };
    }

    clicarAbaAlertasEModais() {
        this.clickElement(this.elements.abaAlertas);
    }

    clicarBotaoMostrarAlert() {
        this.clickElement(this.elements.btnAlert);
    }

    clicarBotaoMostrarConfirm() {
        this.clickElement(this.elements.btnConfirm);
    }

    clicarBotaoMostrarPrompt() {
        this.clickElement(this.elements.btnPrompt);
    }

    clicarBotaoAbrirModal() {
        this.clickElement(this.elements.btnAbrirModal);
    }

    clicarBotaoFecharModal() {
        this.clickElement(this.elements.btnFecharModal);
    }

    validarMensagemDeFeedbackVisivel(mensagemEsperada) {
        if (mensagemEsperada === 'Prompt cancelado') {
            this.validateElementExists(this.elements.mensagemFeedbackBox);
            return;
        }
        this.validateTextExists(mensagemEsperada, { matchCase: false });
    }

    validarTituloModalVisivel() {
        this.validateTextExists("Modal Customizado");
    }

    validarCorpoModalVisivel() {
        this.validateTextExists("Este é um modal personalizado");
    }

    validarModalFechado() {
        this.validateElementDoesNotExist(':contains("Este é um modal personalizado"):last');
    }
}

export default new AlertasModaisPage();
