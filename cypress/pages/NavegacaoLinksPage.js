import BasePage from './BasePage';

class NavegacaoLinksPage extends BasePage {

    get elements() {
        return {
            abaNavegacaoELinks: 'span:contains("Navegação e Links")', 
            tituloDaSecao: 'h2:contains("Navegação e Links")',
            btnIrParaSobre: 'button:contains("Ir para Sobre")',
            btnIrParaContato: 'button:contains("Ir para Contato")',
            btnIrParaProdutos: 'button:contains("Ir para Produtos")',
            btnLinkExterno: 'button:contains("Link Externo")',
            btnVoltar: 'button:contains("Voltar"):first',
            btnAvancar: 'button:contains("Avançar"):first',
            statusPagina: 'p:contains("Página atual:") > span',
            contadorHistorico: 'p:contains("Histórico:") > span'
        };
    }

    clicarAbaNavegacao() {
        this.clickElement(this.elements.abaNavegacaoELinks);
    }
    
    validarTituloDaSecaoVisivel() {
        this.validateElementIsVisible(this.elements.tituloDaSecao);
    }

    clicarIrParaSobre() {
        this.clickElement(this.elements.btnIrParaSobre);
    }

    clicarIrParaContato() {
        this.clickElement(this.elements.btnIrParaContato);
    }

    clicarIrParaProdutos() {
        this.clickElement(this.elements.btnIrParaProdutos);
    }

    clicarLinkExterno() {
        this.stubWindowOpen('windowOpen');
        this.clickElement(this.elements.btnLinkExterno);
    }

    clicarVoltar() {
        this.clickElement(this.elements.btnVoltar);
    }

    clicarAvancar() {
        this.clickElement(this.elements.btnAvancar);
    }

    validarPaginaAtual(nomePaginaEsperada) {
        this.validateTextOnScreen(nomePaginaEsperada);
    }

    validarTamanhoHistorico(tamanhoEsperado) {
        this.validateTextOnScreen(`Histórico: ${tamanhoEsperado} página(s)`);
    }

    validarPaginaGithub() {
        this.validateStubCalledWithMatch('windowOpen', /github\.com\/qamichaelmaia/);
    }

}

export default new NavegacaoLinksPage();
