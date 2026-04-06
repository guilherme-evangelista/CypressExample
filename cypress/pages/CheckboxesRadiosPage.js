import BasePage from './BasePage';

class CheckboxesRadiosPage extends BasePage {

    get elements() {
        return {
            abaCheckboxesRadios: 'a[href*="/checkboxes"]',
            checkboxSelecionarTodas: 'label:contains("Selecionar Todas") input[type="checkbox"]',
            checkboxTarget: (nome) => `label:contains("${nome}") input[type="checkbox"]`,
            radioTarget: (nome) => `label:contains("${nome}") input[type="radio"]`,
            contadorSelecionados: 'div:contains("Selecionados:")'
        };
    }

    clicarAbaCheckboxesRadios() {
        this.clickElementByText('Checkboxes & Radios');
    }

    marcarCheckbox(nome) {
        this.checkElement(this.elements.checkboxTarget(nome));
    }

    desmarcarCheckbox(nome) {
        this.uncheckElement(this.elements.checkboxTarget(nome));
    }

    marcarSelecionarTodas() {
        this.checkElement(this.elements.checkboxSelecionarTodas);
    }
    
    desmarcarSelecionarTodas() {
        this.uncheckElement(this.elements.checkboxSelecionarTodas);
    }

    clicarRadio(nome) {
        this.checkElement(this.elements.radioTarget(nome));
    }

    validarCheckboxMarcado(nome) {
        this.validateElementIsChecked(this.elements.checkboxTarget(nome));
    }

    validarCheckboxDesmarcado(nome) {
        this.validateElementIsNotChecked(this.elements.checkboxTarget(nome));
    }
    
    validarRadioMarcado(nome) {
        this.validateElementIsChecked(this.elements.radioTarget(nome));
    }
    
    validarRadioDesmarcado(nome) {
        this.validateElementIsNotChecked(this.elements.radioTarget(nome));
    }

    validarContador(quantidadeEsperada) {
        this.validateTextOnScreen(`Selecionados: ${quantidadeEsperada}`);
    }
}

export default new CheckboxesRadiosPage();
