# language: pt
Funcionalidade: Alertas e Modais
  Contexto:
    Dado que acesso a aba de alertas e modais

  Cenário: CT-01 - Validar alerta simples (Alert)
    Quando eu clico no botão de alert
    Então o sistema deve exibir um alerta com a mensagem "Este é um alerta simples!"

  Cenário: CT-02 - Validar confirmação (Confirm) aceitando
    Quando eu clico no botão de confirm aceitando
    Então o sistema deve exibir o alerta de confirmação com a mensagem "Você confirma esta ação?"

  Cenário: CT-03 - Validar confirmação (Confirm) cancelando
    Quando eu clico no botão de confirm cancelando
    Então o sistema deve exibir o alerta de confirmação com a mensagem "Você confirma esta ação?"

  Cenário: CT-04 - Validar prompt de texto (Prompt) preenchendo
    Quando eu clico no botão de prompt inserindo "Automacao Cyborg"
    Então o sistema deve exibir o prompt pedindo texto
    E a mensagem confirmada do prompt com "Automacao Cyborg" deve aparecer na tela

  Cenário: CT-05 - Validar prompt de texto (Prompt) cancelando
    Quando eu clico no botão de prompt cancelando
    Então o sistema deve exibir o prompt pedindo texto

  Cenário: CT-06 - Validar modal customizada
    Quando eu clico no botão de abrir modal
    Então a modal customizada deve ficar visível
    Quando eu clico no botão de fechar a modal
    Então a modal customizada não deve estar na tela
