// Importa o decorator @Module, que é usado para definir um módulo no NestJS.
import { Module } from '@nestjs/common';

// Importa o módulo do TypeORM, que permite integração com bancos relacionais como PostgreSQL.
import { TypeOrmModule } from '@nestjs/typeorm';

// Importa o módulo de configuração, que carrega variáveis do arquivo .env para process.env.
import { ConfigModule } from '@nestjs/config';

// Importa o módulo de itens, onde estarão os controllers, services e entidades relacionados aos itens.
import { ItemsModule } from './items/items.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './product/product.module';

// Define o módulo principal da aplicação usando o decorator @Module.
@Module({
  // A propriedade imports define outros módulos que este módulo depende.
  imports: [
    // Carrega as variáveis de ambiente do arquivo .env para process.env.
    ConfigModule.forRoot(),
    // Conecta a aplicação ao PostgreSQL usando as variáveis de ambiente.
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +(process.env.DB_PORT || 5432),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true, // carrega as entidade automaticamente
      // Sincroniza o banco de dados com as entidades definidas no código.
      // Útil para desenvolvimento, mas deve ser usado com cautela em produção.
      // Em produção, é recomendado usar migrações para evitar perda de dados.
      // O valor é lido da variável de ambiente SYNC_DB, que deve ser '
      synchronize: process.env.SYNC_DB === 'true',
    }),
    // Importa o módulo de itens, tornando seus controllers e services disponíveis na aplicação.
    ItemsModule,
    UsersModule,
    ProductsModule,
  ],
})
// Exporta a classe AppModule, que será usada como módulo raiz da aplicação.
export class AppModule {}

