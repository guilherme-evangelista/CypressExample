# 🧪 CypressExample

Projeto de testes automatizados end-to-end utilizando **Cypress** com **BDD (Behavior Driven Development)** em português, aplicado ao site [QA Playground](https://playground-for-qa.vercel.app/playground).

[![Cypress Tests](https://github.com/guilherme-evangelista/CypressExample/actions/workflows/cypress.yml/badge.svg)](https://github.com/guilherme-evangelista/CypressExample/actions/workflows/cypress.yml)
[![GitHub Pages](https://img.shields.io/badge/Relatório-Cucumber%20BDD-brightgreen?logo=cucumber)](https://guilherme-evangelista.github.io/cypress-example/relatorio/index.html)

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Versão | Descrição |
|---|---|---|
| [Cypress](https://www.cypress.io/) | ^15 | Framework de testes E2E |
| [@badeball/cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor) | ^24 | Suporte ao Gherkin/BDD |
| [@bahmutov/cypress-esbuild-preprocessor](https://github.com/bahmutov/cypress-esbuild-preprocessor) | ^2 | Compilação dos arquivos `.feature` |
| [esbuild](https://esbuild.github.io/) | ^0.27 | Bundler de alta performance |
| [cypress-split](https://github.com/bahmutov/cypress-split) | ^1 | Divisão de execução paralela |
| [multiple-cucumber-html-reporter](https://github.com/WasiqB/multiple-cucumber-html-reporter) | ^3 | Consolidão de relatórios BDD |
| GitHub Actions | — | Pipeline de CI/CD Paralelizado |
| GitHub Pages | — | Publicação automática do relatório |

---

## 📁 Estrutura principal do projeto

```
CypressExample/
├── .github/
│   └── workflows/
│       └── cypress.yml              # Pipeline de CI/CD Paralela
├── cypress/
│   ├── e2e/
│   │   └── features/
│   │       └── elementosBasicos.feature # Cenários em Gherkin
│   ├── pages/
│   │   ├── BasePage.js
│   │   └── ElementosBasicosPage.js        
│   └── support/
│       ├── step_definitions/
│       │   └── ElementosBasicosSteps.js # Mapas Gherkin -> Cypress
│       └── e2e.js
├── generate-cucumber-report.js      # Combinador de relatórios
├── cypress.config.js
└── package.json
```

---

## 🚀 Como executar localmente

### Pré-requisitos

- Node.js >= 18
- npm >= 9

### Instalação

```bash
git clone https://github.com/guilherme-evangelista/CypressExample.git
cd CypressExample
npm install
```

### Executar os testes

```bash
# Modo interativo (UI do Cypress)
npx cypress open

# Modo headless (terminal via pipeline manual)
npm run cy:run
```

---

## 🏗️ Padrão Page Object Model + Custom Actions

O projeto se baseia numa super-classe **BasePage** contendo todas as funções genéricas e verificações embutidas (`validateUrl`, `selectOption`, `checkElement`), as quais são estendidas e herdadas pelas classes específicas de *Page*.

```js
// BasePage.js implementando validações robustas:
validateElementIsVisible(selector, timeout = 8000) {
    cy.get(selector, { timeout }).should('be.visible');
}
```

---

## ⚙️ Pipeline CI/CD: Múltiplas Máquinas (Parallel)

A cada `push` ou `pull request` na branch `main`, o GitHub Actions executa uma matriz automatizada utilizando o **cypress-split**.

A pipeline sob a pasta `.github/workflows/` inicia **vários instâncias (containers)** de testes de forma completamente distribuída:
```
[Runner 1] → Roda Fração 1
[Runner 2] → Roda Fração 2
[Runner 3] → Roda Fração 3
```

Cada *runner* despeja um log parcial `.json`. Após todos terminarem, um Job consolidador entra em cena rodando o script `generate-cucumber-report.js` que formata um único painel e entrega pro Pages.

O relatório final é publicado em:
**[https://guilherme-evangelista.github.io/CypressExample/relatorio](https://guilherme-evangelista.github.io/CypressExample/relatorio/)** *(que renderiza por debaixo dos panos o nosso index.html consolidado!)*

---

## 📊 Relatório Nativo BDD (Cucumber HTML Report)

Todos os resíduos como hooks de antes/depois ou logs do mochawesome foram deixados para trás e este projeto abraça o layout limpo. O `multiple-cucumber-html-reporter` gera visualizações por Funcionalidades e Cenários estritamente alinhados aos Mapas *Gherkin*.

---

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch: `git checkout -b feat/minha-feature`
3. Commit suas mudanças: `git commit -m 'feat: minha feature'`
4. Push para a branch: `git push origin feat/minha-feature`
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença ISC. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

> Desenvolvido e paralelizado por [Guilherme Evangelista](https://github.com/guilherme-evangelista) 🚀
