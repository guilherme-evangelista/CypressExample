import BasePage from './BasePage';

class ElementosBasicosPage extends BasePage {
    
    get elements() {
        return {
            btnCliqueAqui: 'button:contains("Clique aqui")',
            btnDuploClique: 'button:contains("Duplo clique")',
            inputTexto: 'input[placeholder="Digite algo..."]',
            dropdown: '[data-testid="section-elementos-basicos"] [data-testid="select-input"]',
            slider: 'input[data-testid="range-input"]',
            switchInterruptor: 'button[data-testid="toggle-switch"]',
            
            opcaoDropdown: (nome) => `button[data-testid="select-option-${nome}"]`
        };
    }

    clicarBotaoSimples() {
        this.clickElement(this.elements.btnCliqueAqui);
    }

    clicarBotaoDuplo() {
        this.doubleClickElement(this.elements.btnDuploClique);
    }

    preencherTexto(texto) {
        this.typeText(this.elements.inputTexto, texto);
    }

    selecionarDropdown(opcao) {
        this.clickElement(this.elements.dropdown);
        this.clickElement(this.elements.opcaoDropdown(opcao));
    }

    alterarSlider(valor) {
        this.setSliderValue(this.elements.slider, valor);
    }

    clicarInterruptor() {
        this.clickElement(this.elements.switchInterruptor);
    }

    validarQuantidadeCliquesSimples(quantidade) {
        this.validateText(this.elements.btnCliqueAqui, quantidade);
    }

    validarQuantidadeCliquesDuplo(quantidade) {
        this.validateText(this.elements.btnDuploClique, quantidade);
    }

    validarValorInput(texto) {
        this.validateValue(this.elements.inputTexto, texto);
    }

    validarOpcaoDropdown(texto) {
        this.validateText(this.elements.dropdown, texto);
    }

    validarValorSlider(valor) {
        this.validateValue(this.elements.slider, valor);
    }

    validarEstadoInterruptor(estadoBooleano) {
        const estadoString = estadoBooleano ? 'true' : 'false';
        this.validateAttribute(this.elements.switchInterruptor, 'aria-checked', estadoString);
    }
}

export default new ElementosBasicosPage();