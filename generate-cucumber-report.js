const report = require('multiple-cucumber-html-reporter');
const fs = require('fs');
const path = require('path');

const jsonDir = path.join(__dirname, 'cypress/reports/cucumber-json');
const reportPath = path.join(__dirname, 'cypress/reports/relatorio_consolidado');

// Check se a pasta de JSONs existe
if (!fs.existsSync(jsonDir)) {
    console.error('DIRETÓRIO JSON NÃO ENCONTRADO!');
    process.exit(1);
}

report.generate({
    jsonDir: jsonDir,
    reportPath: reportPath,
    metadata:{
        browser: {
            name: 'chrome',
            version: 'latest'
        },
        device: 'GitHub Actions Runner',
        platform: {
            name: 'ubuntu',
            version: 'latest'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Projeto', value: 'QA Playground / Cypress'},
            {label: 'Tipo', value: 'Testes Paralelizados (Cucumber + Split)'}
        ]
    }
});
