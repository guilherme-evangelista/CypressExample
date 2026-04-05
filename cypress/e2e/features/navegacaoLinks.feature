# language: pt
Funcionalidade: QA Playground - Navegação e Links

  Contexto:
    Dado que estou na tela inicial QA Playground
    E acesso a aba de navegacao e links

  Cenário: CT-01 - Validar estado inicial da seção de navegação
    Então valido que a seção principal de navegação está visível
    E a página atual informada é "Página Inicial"
    E o histórico possui o tamanho "1"

  Cenário: CT-02 - Navegar para a página Sobre
    Quando clico em ir para Sobre
    Então a página atual informada é "Sobre"
    E o histórico possui o tamanho "2"

  Cenário: CT-03 - Navegar para a página Contato
    Quando clico em ir para Contato
    Então a página atual informada é "Contato"
    E o histórico possui o tamanho "2"

  Cenário: CT-04 - Navegar para a página Produtos
    Quando clico em ir para Produtos
    Então a página atual informada é "Produtos"
    E o histórico possui o tamanho "2"

  Cenário: CT-05 - Testar o histórico de avancar e voltar
    Quando clico em ir para Produtos
    E clico no botao voltar
    Então a página atual informada é "Página Inicial"
    Quando clico no botao avancar
    Então a página atual informada é "Produtos"
    E o histórico possui o tamanho "2"

  Cenário: CT-06 - Clicar no link externo
    Quando clico no link externo
    Então sou redirecionado para o Github do autor
 