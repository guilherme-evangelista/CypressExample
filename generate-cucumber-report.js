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

// Após gerar o report, movemos os vídeos para dentro da mesma pasta do relatório
try {
    const videosDir = path.join(__dirname, 'cypress/videos');
    const reportVideosDir = path.join(reportPath, 'videos');
    if (fs.existsSync(videosDir)) {
        // Node 16.7.0+ nativo
        fs.cpSync(videosDir, reportVideosDir, { recursive: true, force: true });
        console.log('🎬 Vídeos copiados para o relatório com sucesso!');
    }
} catch (err) {
    console.warn('Falha ao copiar vídeos para o destino final:', err);
}
