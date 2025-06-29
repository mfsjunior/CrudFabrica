// Importa o polyfill de metadata necessário para o funcionamento de decorators no NestJS.
// É importante para recursos avançados como validação, injeção de dependências e integração com ORMs.
import 'reflect-metadata';

// Importa a função NestFactory, que é usada para criar a instância principal da aplicação NestJS.
import { NestFactory } from '@nestjs/core';

// Importa o módulo principal da aplicação, onde todos os outros módulos são conectados.
import { AppModule } from './app.module';

// Função assíncrona que inicializa e executa a aplicação NestJS.
async function bootstrap() {
  // Cria a aplicação NestJS a partir do módulo principal (AppModule).
  const app = await NestFactory.create(AppModule);

  // Habilita o CORS (Cross-Origin Resource Sharing), permitindo que o frontend (em outro domínio/porta)
  // faça requisições para a API. Essencial para projetos onde frontend e backend estão separados.
  app.enableCors();

  // Faz o servidor HTTP escutar na porta 3000 dentro do container Docker.
  // Essa porta deve ser mapeada no docker-compose.yml para acesso externo.
  await app.listen(3000);
}

// Executa a função bootstrap para iniciar a aplicação.
// Sem essa chamada, o servidor não inicia.
bootstrap();
