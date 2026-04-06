# language: pt
Funcionalidade: QA Playground - Checkboxes e Radios

  Contexto:
    Dado que estou na aba de Checkboxes e Radios

  Cenário: CT-01 - Validar apresentacao da tela de Checkboxes e Radios
    Então valido que a tela foi carregada exibindo o contador "0"

  Cenário: CT-02 - Validar marcação de checkbox individual
    Quando marco a opcao "option1"
    Então valido que a opcao "option1" esta marcada
    E valido que o contador de selecionados exibe "1"

  Cenário: CT-03 - Validar marcação de todas as opcoes via master checkbox
    Quando marco o master checkbox de Selecionar Todas
    Então valido que a opcao "option1" esta marcada
    E valido que a opcao "option2" esta marcada
    E valido que a opcao "option3" esta marcada
    E valido que o contador de selecionados exibe "3"

  Cenário: CT-04 - Validar desmarcação de todas as opcoes via master checkbox
    Quando marco o master checkbox de Selecionar Todas
    E desmarco o master checkbox de Selecionar Todas
    Então valido que a opcao "option1" esta desmarcada
    E valido que a opcao "option2" esta desmarcada
    E valido que a opcao "option3" esta desmarcada
    E valido que o contador de selecionados exibe "0"

  Cenário: CT-05 - Validar marcação exclusiva de Radio Buttons
    Quando foco e seleciono o radio "radio1"
    E foco e seleciono o radio "radio2"
    Então valido que o radio "radio2" esta marcado
    E valido que o radio "radio1" esta desmarcado
