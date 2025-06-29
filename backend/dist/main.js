"use strict"; // Ativa o modo estrito do JavaScript para evitar erros comuns.
// Define a propriedade __esModule para compatibilidade com módulos ES6.
Object.defineProperty(exports, "__esModule", { value: true });
// Importa o módulo principal do NestJS, que fornece funções essenciais para criar a aplicação.
const core_1 = require("@nestjs/core");
// Importa o módulo raiz da aplicação, onde todos os outros módulos estão conectados.
const app_module_1 = require("./app.module");
// Função assíncrona que inicializa e executa a aplicação NestJS.
async function bootstrap() {
    // Cria a aplicação NestJS a partir do módulo principal (AppModule).
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    // Habilita o CORS (Cross-Origin Resource Sharing), permitindo que o frontend acesse a API.
    app.enableCors();
    // Faz o servidor escutar na porta 3000.
    await app.listen(3000);
}
// Executa a função bootstrap para iniciar a aplicação.
bootstrap();
//# sourceMappingURL=main.js.map
// Comentário gerado pelo TypeScript para mapear o código-fonte original (main.ts) ao arquivo transpilado (main.js).