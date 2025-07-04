// Importa os decorators e funções do NestJS para criar controllers e rotas HTTP.
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';

// Importa o serviço responsável pela lógica de negócio dos itens.
import { ProductsService } from './product.service';


// Importa o DTO usado para criar um novo item.
import { CreateProductDto } from './dto/create-product.dto';

// Importa o DTO usado para atualizar um item existente.
import { UpdateProductDto } from './dto/update-product.dto';

// Define que esta classe é um controller e que todas as rotas começam com '/items'.
@Controller('Products')
export class ProductsController {
  // Injeta o serviço de itens no controller, permitindo acessar métodos de negócio.
  constructor(private readonly service: ProductsService) {}

  // Define a rota POST /items para criar um novo item.
  // O corpo da requisição deve seguir o formato do CreateItemDto.
  @Post()
  create(@Body() dto: CreateProductDto) {
    // Chama o serviço para criar o item e retorna o resultado.
    return this.service.create(dto);
  }

  // Define a rota GET /items para listar todos os itens.
  @Get()
  findAll() {
    // Chama o serviço para buscar todos os itens e retorna o resultado.
    return this.service.findAll();
  }

  // Define a rota GET /items/:id para buscar um item específico pelo ID.
  @Get(':id')
  findOne(@Param('id') id: string) {
    // Chama o serviço para buscar o item pelo ID e retorna o resultado.
    return this.service.findOne(id);
  }

  // Define a rota PUT /items/:id para atualizar um item específico pelo ID.
  // O corpo da requisição deve seguir o formato do UpdateItemDto.
  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateProductDto) {
    // Chama o serviço para atualizar o item e retorna o resultado.
    return this.service.update(id, dto);
  }

  // Define a rota DELETE /items/:id para remover um item específico pelo ID.
  @Delete(':id')
  remove(@Param('id') id: string) {
    // Chama o serviço para remover o item e retorna o resultado.
    return this.service.remove(id);
  }
}
