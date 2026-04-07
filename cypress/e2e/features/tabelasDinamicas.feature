# language: pt
Funcionalidade: QA Playground - Tabelas Dinâmicas

  Contexto:
    Dado que estou na aba de Tabelas Dinâmicas

  Cenário: CT-01 - Pesquisar usuário existente por nome
    Quando pesquiso pelo usuário "João Silva"
    Então visualizo apenas o registro "João Silva" na tabela

  Cenário: CT-01.1 - Pesquisar usuário existente por email
    Quando pesquiso pelo usuário "ana@exemplo.com"
    Então visualizo apenas o registro "ana@exemplo.com" na tabela

  Cenário: CT-02 - Pesquisar usuário inexistente
    Quando pesquiso pelo usuário "Usuário Inexistente"
    Então verifico que a tabela não exibe nenhum resultado

  Cenário: CT-03 - Ordenar tabela por Nome
    Quando clico para ordenar pela coluna "Nome"
    Então a listagem de usuários deve ser reordenada com os nomes em ordem alfabética

  Cenário: CT-03.1 - Ordenar tabela por Email
    Quando clico para ordenar pela coluna "Email"
    Então a listagem de usuários deve ser reordenada com os emails em ordem alfabética

  Cenário: CT-03.2 - Ordenar tabela por Cargo
    Quando clico para ordenar pela coluna "Cargo"
    Então a listagem de usuários deve ser reordenada com os cargos em ordem alfabética

  Cenário: CT-03.3 - Ordenar tabela por Status
    Quando clico para ordenar pela coluna "Status"
    Então a listagem de usuários deve ser reordenada com os status em ordem alfabética

  Cenário: CT-04 - Selecionar um usuário específico e validar contagem
    Quando seleciono o primeiro usuário da lista
    Então o rodapé deve exibir a mensagem "1 de 5 linha(s) selecionada(s)"

  Cenário: CT-05 - Selecionar todos os usuários via cabeçalho
    Quando seleciono a opção de selecionar todos no cabeçalho
    Então o rodapé deve exibir a mensagem "5 de 5 linha(s) selecionada(s)"

  Cenário: CT-06 - Editar um usuário da lista
    Quando clico no botão de editar do usuário "João Silva"
    Então visualizo a mensagem de confirmação "Editando João Silva" na tela

  Cenário: CT-07 - Excluir um usuário da lista
    Quando clico no botão de excluir do usuário "João Silva"
    Então visualizo a mensagem de confirmação "Excluindo João Silva" na tela
