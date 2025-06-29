// Importa o decorator @Module, que é usado para definir um módulo no NestJS.
import { Module } from '@nestjs/common';

// Importa o módulo do Mongoose, que permite integração com o MongoDB.
import { MongooseModule } from '@nestjs/mongoose';

// Importa o controller responsável por receber e responder requisições HTTP relacionadas a itens.
import { ItemsController } from './items.controller';

// Importa o serviço que contém a lógica de negócio dos itens.
import { ItemsService } from './items.service';

// Importa o schema e a classe do Item, que define a estrutura dos documentos no MongoDB.
import { Item, ItemSchema } from './schemas/item.schema';

// Define o módulo de itens usando o decorator @Module.
@Module({
  // Registra o schema do Item no Mongoose para que possa ser usado via injeção de dependência.
  imports: [MongooseModule.forFeature([{ name: Item.name, schema: ItemSchema }])],
  // Registra o controller responsável pelas rotas HTTP de itens.
  controllers: [ItemsController],
  // Registra o serviço que contém a lógica de negócio dos itens.
  providers: [ItemsService],
})
// Exporta a classe ItemsModule, tornando o módulo disponível para importação em outros módulos.
export class ItemsModule {}
