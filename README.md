# 🧪 CypressExample

Projeto de testes automatizados end-to-end utilizando **Cypress** com **BDD (Behavior Driven Development)** em português, aplicado ao site [QA Playground](https://playground-for-qa.vercel.app/playground).

[![Cypress Tests](https://github.com/guilherme-evangelista/CypressExample/actions/workflows/cypress.yml/badge.svg)](https://github.com/guilherme-evangelista/CypressExample/actions/workflows/cypress.yml)
[![GitHub Pages](https://img.shields.io/badge/Relatório-GitHub%20Pages-blue?logo=github)](https://guilherme-evangelista.github.io/CypressExample/relatorio/merged-report.html)

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Versão | Descrição |
|---|---|---|
| [Cypress](https://www.cypress.io/) | ^15 | Framework de testes E2E |
| [@badeball/cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor) | ^24 | Suporte ao Gherkin/BDD |
| [@bahmutov/cypress-esbuild-preprocessor](https://github.com/bahmutov/cypress-esbuild-preprocessor) | ^2 | Compilação dos arquivos `.feature` |
| [esbuild](https://esbuild.github.io/) | ^0.27 | Bundler de alta performance |
| [cypress-mochawesome-reporter](https://github.com/LironEr/cypress-mochawesome-reporter) | latest | Geração de relatório HTML |
| GitHub Actions | — | Pipeline de CI/CD |
| GitHub Pages | — | Publicação automática do relatório |

---

## 📁 Estrutura do projeto

```
CypressExample/
├── .github/
│   └── workflows/
│       └── cypress.yml              # Pipeline de CI/CD
├── cypress/
│   ├── e2e/
│   │   └── features/
│   │       └── elementosBasicos.feature   # Cenários BDD em português
│   ├── pages/
│   │   └── ElementosBasicosPage.js        # Page Object Model
│   └── support/
│       ├── step_definitions/
│       │   └── elementosBasicosSteps.js   # Implementação dos steps
│       └── e2e.js
├── .cypress-cucumber-preprocessorrc.json
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

# Modo headless (terminal)
npx cypress run

# Modo headless com geração de relatório
npm run cy:report
```

---

## 🧩 Cenários de teste

Os cenários estão escritos em **Gherkin com linguagem portuguesa** e cobrem os elementos básicos do QA Playground

### Exemplo de cenário

```gherkin
# language: pt
Funcionalidade: QA Playground - Elementos Básicos

  Contexto:
    Dado que estou na tela inicial QA Playground

  Cenário: CT-04 - Interação com o dropdown customizado
    Quando seleciono a opcao no dropdown de framework "robot"
    Então valido que o dropdown de framework exibe a opcao "Robot Framework"
```

---

## 🏗️ Padrão Page Object Model (POM)

O projeto utiliza **Page Object Model** para separar a lógica de seleção de elementos da lógica dos testes, facilitando manutenção e reuso.

```js
// cypress/pages/ElementosBasicosPage.js
class ElementosBasicosPage {
    get url() { return 'https://playground-for-qa.vercel.app/playground'; }
    get btnCliqueAqui() { return cy.contains('button', 'Clique aqui'); }
    // ...
}
export default new ElementosBasicosPage();
```

---

## ⚙️ Pipeline CI/CD

A cada `push` ou `pull request` na branch `main`, o GitHub Actions executa automaticamente:

```
push → Checkout → Setup Node → npm ci → Cypress run → Relatório → GitHub Pages
```

O relatório é publicado automaticamente em:
**[https://guilherme-evangelista.github.io/CypressExample/relatorio](https://guilherme-evangelista.github.io/CypressExample/relatorio)**

---

## 📊 Relatório de testes

O relatório é gerado com **Mochawesome** e inclui:

- ✅ Status de cada cenário (passou/falhou)
- 📸 Screenshots automáticos em caso de falha
- 📈 Gráficos de resultado
- 🕐 Tempo de execução por teste

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

> Desenvolvido por [Guilherme Evangelista](https://github.com/guilherme-evangelista) 🚀