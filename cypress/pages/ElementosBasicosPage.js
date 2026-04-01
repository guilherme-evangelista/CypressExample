class ElementosBasicosPage {
    get url() { return 'https://playground-for-qa.vercel.app/playground'; }

    get btnCliqueAqui() { return cy.contains('button', 'Clique aqui'); }
    get btnDuploClique() { return cy.contains('button', 'Duplo clique'); }
    get inputTexto() { return cy.get('input[placeholder="Digite algo..."]'); }
    get dropdown() { return cy.get('[data-testid="section-elementos-basicos"]').find('[data-testid="select-input"]');}
    get slider() { return cy.get('input[data-testid="range-input"]'); }
    get switchInterruptor() { return cy.get('button[data-testid="toggle-switch"]'); }

    opcaoDropdown(nome) { return cy.get(`button[data-testid="select-option-${nome}"]`); }

  
    acessarPagina() {
        cy.visit(this.url);
    }

    clicarBotaoSimples() {
        this.btnCliqueAqui.click({ force: true });
    }

    clicarBotaoDuplo() {
        this.btnDuploClique.dblclick();
    }

    preencherTexto(texto) {
        this.inputTexto.should('not.be.disabled');
        this.inputTexto.clear({ force: true });
        this.inputTexto.type(texto, { force: true });
    }

    selecionarDropdown(opcao) {
        this.dropdown.click();
        this.opcaoDropdown(opcao).click();
    }

    alterarSlider(valor) {
        this.slider.invoke('val', valor).trigger('change');
    }

    clicarInterruptor() {
        this.switchInterruptor.click();
    }
}

export default new ElementosBasicosPage();