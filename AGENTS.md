# Padrões e Regras do Projeto (Cypress + Cucumber BDD)

Este documento centraliza as principais regras de negócio, padrões de projeto (Design Patterns) e regras de padronização adotados neste projeto de automação E2E.

## 1. Stack Tecnológica
- **Framework de Testes:** Cypress
- **Arquitetura BDD:** Cucumber (`@badeball/cypress-cucumber-preprocessor`)
- **Pre-processor/Bundler:** ESBuild (`@bahmutov/cypress-esbuild-preprocessor`)
- **Paralelização:** `cypress-split`
- **Relatórios:** `multiple-cucumber-html-reporter`

## 2. Design Patterns (Padrões de Projeto)

### 2.1. Page Object Model (POM)
O projeto utiliza um padrão POM aprimorado focado em reutilização e estabilidade.

- **`BasePage.js`**: Todas as páginas devem estender a classe `BasePage`. Esta classe fornece métodos encapsulados para interações comuns do Cypress (ex: `clickElement`, `typeText`, `validateText`). A vantagem dessa abordagem é garantir validações de estado seguras antes da ação (ex: validar se o elemento `should('be.visible')` e `not.be.disabled` antes de ser clicado), o que reduz as falhas intermitentes (flakiness).
  - **Organização e Centralização**: Todos os métodos de interações diretas com o Cypress devem estar alocados na `BasePage`.
  - **Estruturação Interna**: Os métodos dentro da `BasePage` devem ser obrigatoriamente organizados e agrupados por tipo e similaridade (ex: agrupamento de métodos de "Navegação", "Interações/Ações" e "Validações/Asserções").
- **Herança**: Os arquivos específicos (ex: em `cypress/pages/**/*.js`) devem herdar métodos e comportamentos dessa base (`BasePage`).
- **Singleton Pattern**: As classes de páginas são instanciadas no rodapé de sua própria declaração e exportadas como um objeto único instanciado (`export default new NomeDaPage();`). Isso remove a poluição de código e a repetida necessidade de criar `new()` para a mesma page ao longo dos Steps de teste.

### 2.2. Behavior-Driven Development (BDD)
- Existe uma separação estrita de responsabilidades: Cenários de Casos de Testes e lógicas do Cypress.
- A orquestração é feita pelos arquivos Gherkin (`.feature`) declarados em `cypress/e2e/`.
- Os **Step Definitions**, encontrados em `cypress/support/step_definitions/`, agem restritamente como conexão (*Glue Code*) não contendo lógicas complexas. Eles interpretam a semântica de *Given, When, Then* executando as tarefas através do POM instanciado.

## 3. Regras de Padronização (Coding Standards)

### 3.1. Estrutura de Seletores (Locators)
- **Onde declarar**: Todos os seletores da interface gráfica devem ser mantidos limitados ao método reservado `get elements()` no inicio do objeto de cada respectivo Page (Page Object). Nada de seletores espalhados pelos métodos da classe.
- **Prioridade de Busca**: Prefira utilizar atributos que não mudam durante evolução do CSS (ex: `data-testid`). Se indisponível, text-matching (`button:contains(...)`) ou classes exclusivas.

### 3.2. Boas Práticas dentro dos "Step Definitions"
- **Regra de Ouro**: É expressamente **PROIBIDO** o uso e a manipulação direta do encadeamento `cy.*` (como `cy.get(...)` ou `cy.contains(...)`) nos arquivos do tipo *Steps*.
- **O que é permitido no Step**: Ações puramente sistemáticas como reiniciar contextos/sessão (ex: usar `cy.clearAllCookies()` ou limpar cache no caso inicial do `Given`).
- **Ordenação dos Passos (Steps)**: O código dentro dos arquivos de passos (arquivos `.js` de Steps) deve ser organizado mantendo uma sequência lógica contínua para fins de manutenção e legibilidade: primeiro declarar todos os passos do tipo `Given`, seguidos por todos os passos do tipo `When` e fechando com todos os passos do tipo `Then` no final do arquivo.
- **Passos Vazios**: É estritamente proibido possuir passos (Steps) vazios nos arquivos `.js`. Toda validação ou ação declarada na Feature (Gherkin) deve corresponder e injetar uma ação/asserção real do Cypress, sem pular ou criar blocos apenas para leitura de texto.

### 3.3. Gestão e Tratamento de Esperas (Waits)
- **Abolição do tempo fixo**: Não injete esperas cegas no meio das lógicas com `cy.wait(X)` exceto se a aplicação carecer impreterivelmente dessa estabilização inicial estática (exemplo: logo depois do `cy.visit()`).
- O tratamento assíncrono é delegado para a `BasePage`. Através de timeouts de fallback flexíveis que acompanham um default (ex: `8000ms`) os validadores integrados esperarão somente o tempo necessário.

### 3.4. Gestão de Estado Limpo (Clean State)
- Os testes devem ser atômicos e idempotentes. Em todo passo de construção (`Given` central), os dados de cache (`cy.clearLocalStorage()`, `SessionStorage`) e Cookies globais devem ser extirpados para garantir que novos cenários não sofram contaminação de resíduos anteriores de outras iterações.

### 3.5. Convenções de Nomenclatura (Naming conventions)
- **Features**: Subpastas e arquivos nomeados visando sua feature do negócio em `.feature`. As construções (Gherkin) devem ser escritas inteiramente em português (utilizando `# language: pt` e as marcações Funcionalidade, Contexto, Cenário, Dado, Quando, Então e E) seguindo o padrão consolidado.
- **Page Objects**: O sufixo do arquivo deve ser ser assinalado por `Page.js` via **PascalCase** (ex: `FormulariosSimplesPage.js`).
- **Steps**: Arquivo referenciando o passo sob o sufixo `Steps.js` utilizando **PascalCase** (ex: `ElementosBasicosSteps.js`).
- **Linguagem dos Métodos**: Escrita contínua em formato `camelCase` contendo o objetivo ou declaração assertiva clara em português (ex: `clicarInterruptor()`, `validarEstadoInterruptor(estado)`).
