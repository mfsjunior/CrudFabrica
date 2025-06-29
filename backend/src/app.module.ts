// Importa o decorator @Module, que é usado para definir um módulo no NestJS.
import { Module } from '@nestjs/common';

// Importa o módulo do Mongoose, que permite integração com o MongoDB.
import { MongooseModule } from '@nestjs/mongoose';

// Importa o módulo de configuração, que carrega variáveis do arquivo .env para process.env.
import { ConfigModule } from '@nestjs/config';

// Importa o módulo de itens, onde estão os controllers, services e schemas relacionados aos itens.
import { ItemsModule } from './items/items.module';

// Define o módulo principal da aplicação usando o decorator @Module.
@Module({
  // A propriedade imports define outros módulos que este módulo depende.
  imports: [
    // Carrega as variáveis de ambiente do arquivo .env para process.env.
    ConfigModule.forRoot(),
    // Conecta a aplicação ao MongoDB usando a URI definida na variável de ambiente MONGO_URI.
    MongooseModule.forRoot(process.env.MONGO_URI!),
    // Importa o módulo de itens, tornando seus controllers e services disponíveis na aplicação.
    ItemsModule,
  ],
})
// Exporta a classe AppModule, que será usada como módulo raiz da aplicação.
export class AppModule {}
