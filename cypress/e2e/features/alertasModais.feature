# language: pt
Funcionalidade: QA Playground - Alertas e Modais

  Contexto:
    Dado que estou na aba de Alertas e Modais

  Cenário: CT-01 - Validar disparo de Alerta Nativo
    Quando aciono o disparo de um alerta nativo garantindo a mensagem "Este é um alerta simples!"

  Cenário: CT-02 - Validar confirmacao de um Dialogo Confirm
    Quando aceito a caixa de confirmacao nativa
    Então visualizo a mensagem de feedback "Confirmado!"

  Cenário: CT-03 - Validar cancelamento de um Dialogo Confirm
    Quando recuso a caixa de confirmacao nativa
    Então visualizo a mensagem de feedback "Cancelado"

  Cenário: CT-04 - Validar insercao de texto em um Prompt
    Quando preencho a caixa de prompt nativa com "teste"
    Então visualizo a mensagem de feedback "Olá, teste!"

  Cenário: CT-05 - Validar cancelamento de um Prompt
    Quando cancelo a caixa de prompt nativa
    Então visualizo a mensagem de feedback "Prompt cancelado"

  Cenário: CT-06 - Validar visualizacao e fechamento de modal customizado
    Quando abro o modal customizado
    Então o modal deve exibir o titulo e corpo corretamente
    E ao fechar o modal ele deve desaparecer da tela
