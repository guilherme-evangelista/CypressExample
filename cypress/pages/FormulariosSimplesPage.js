import BasePage from './BasePage';

class FormulariosSimplesPage extends BasePage {

    get elements() {
        return {
            btnFormulariosSimples: 'span:contains("Formulários Simples")',
            inputNome: 'input[data-testid=input-name]',
            inputEmail: 'input[data-testid=input-email]',
            inputSenha: 'input[data-testid=input-password]',
            inputConfirmarSenha: 'input[data-testid=input-confirm-password]',
            checkboxAceitoOsTermos: 'input[data-testid=checkbox-terms]',
            btnEnviar: 'button[data-testid=submit-button]',
            btnLimpar: 'button[data-testid=clear-button]'
        };
    }

    acessarAbaFormulariosSimplesPage() {
        this.clicarAbaFormulariosSimples();
    }

    clicarAbaFormulariosSimples() {
        this.clickElement(this.elements.btnFormulariosSimples);
    }

    preencherCampoNome(nome) {
        this.typeText(this.elements.inputNome, nome);
    }

    preencherCampoEmail(email) {
        this.typeText(this.elements.inputEmail, email);
    }

    preencherCampoSenha(senha) {
        this.typeText(this.elements.inputSenha, senha);
    }

    preencherCampoConfirmarSenha(confirmarSenha) {
        this.typeText(this.elements.inputConfirmarSenha, confirmarSenha);
    }

    clicarCheckboxAceitoOsTermos() {
        this.clickElement(this.elements.checkboxAceitoOsTermos);
    }

    clicarBotaoEnviar() {
        this.clickElement(this.elements.btnEnviar);
    }

    clicarBotaoLimpar() {
        this.clickElement(this.elements.btnLimpar);
    }

    validarMensagemNaTela(mensagem) {
        this.validateTextOnScreen(mensagem);
    }

    validarCampoNomeVazio() {
        this.validateValue(this.elements.inputNome, '');
    }

    validarCampoEmailVazio() {
        this.validateValue(this.elements.inputEmail, '');
    }

    validarCampoSenhaVazio() {
        this.validateValue(this.elements.inputSenha, '');
    }

    validarAceiteDeTermosDesmarcado() {
        cy.get(this.elements.checkboxAceitoOsTermos)
            .should('not.be.checked');
    }

    validarCampoConfirmarSenhaVazio() {
        this.validateValue(this.elements.inputConfirmarSenha, '');
    }

    validarCampoNomeObrigatorio() {
        this.validateTextOnScreen('Nome é obrigatório');
    }

    validarCampoEmailObrigatorio() {
        this.validateTextOnScreen('Email é obrigatório');
    }

    validarCampoSenhaObrigatorio() {
        this.validateTextOnScreen('Senha é obrigatória');
    }

    validarCampoSenhaDeveTerNoMinimoOitoCaracteres() {
        this.validateTextOnScreen('Senha deve ter no mínimo 8 caracteres');
    }

    validarSenhasNaoCoincidem() {
        this.validateTextOnScreen('Senhas não coincidem');
    }

    validarAceiteDeTermos() {
        this.validateTextOnScreen('Você deve aceitar os termos');
    }

}

export default new FormulariosSimplesPage();