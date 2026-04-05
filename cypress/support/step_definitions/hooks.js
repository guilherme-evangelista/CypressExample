import { After, attach } from "@badeball/cypress-cucumber-preprocessor";

After(function () {
    const videoName = Cypress.spec.name;
    const videoUrl = `../videos/${videoName}.mp4`;
    
    const videoHtml = `
      <div style="margin-top: 10px;">
        <video controls preload="metadata" width="100%" style="max-width: 800px; border-radius: 8px; border: 1px solid #ccc;">
            <source src="${videoUrl}" type="video/mp4">
            Seu navegador não suporta a tag de vídeo nativa.
        </video>
      </div>
    `;
    
    attach(videoHtml, "text/html");
});
