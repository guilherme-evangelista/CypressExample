# language: pt
Funcionalidade: QA Playground - Waits e Sincronização

  Contexto:
    Dado que estou na tela inicial QA Playground
    E acesso a aba de waits e sincronizacao

  Cenário: CT-01 - Validar texto exibido apos clicar no botao iniciar contagem
    E valido que o texto "Texto inicial" é exibido na tela
    Quando clico no botao iniciar contagem
    Então valido que o texto "Contagem finalizada" é exibido na tela

  Cenário: CT-02 - Interagir com o botao Alternar Elemento
    E valido que o texto "Eu posso ser ocultado!" é exibido na tela
    Quando clico no botao alternar elemento
    Então valido que o texto "Eu posso ser ocultado!" não é mais exibido na tela

  Cenário: CT-03 - Interagir com o botao Carregar Dados
    Quando clico no botao carregar dados
    Então valido que o texto "Dados carregados após 3 segundos!" é exibido na tela
 