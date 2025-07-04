"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsController = void 0;
// Importa os decorators e funções do NestJS para criar controllers e rotas HTTP.
const common_1 = require("@nestjs/common");
// Importa o serviço responsável pela lógica de negócio dos itens.
const items_service_1 = require("./items.service");
// Importa o DTO usado para criar um novo item.
const create_item_dto_1 = require("./dto/create-item.dto");
// Importa o DTO usado para atualizar um item existente.
const update_item_dto_1 = require("./dto/update-item.dto");
// Define que esta classe é um controller e que todas as rotas começam com '/items'.
let ItemsController = class ItemsController {
    service;
    // Injeta o serviço de itens no controller, permitindo acessar métodos de negócio.
    constructor(service) {
        this.service = service;
    }
    // Define a rota POST /items para criar um novo item.
    // O corpo da requisição deve seguir o formato do CreateItemDto.
    create(dto) {
        // Chama o serviço para criar o item e retorna o resultado.
        return this.service.create(dto);
    }
    // Define a rota GET /items para listar todos os itens.
    findAll() {
        // Chama o serviço para buscar todos os itens e retorna o resultado.
        return this.service.findAll();
    }
    // Define a rota GET /items/:id para buscar um item específico pelo ID.
    findOne(id) {
        // Chama o serviço para buscar o item pelo ID e retorna o resultado.
        return this.service.findOne(id);
    }
    // Define a rota PUT /items/:id para atualizar um item específico pelo ID.
    // O corpo da requisição deve seguir o formato do UpdateItemDto.
    update(id, dto) {
        // Chama o serviço para atualizar o item e retorna o resultado.
        return this.service.update(id, dto);
    }
    // Define a rota DELETE /items/:id para remover um item específico pelo ID.
    remove(id) {
        // Chama o serviço para remover o item e retorna o resultado.
        return this.service.remove(id);
    }
};
exports.ItemsController = ItemsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_item_dto_1.CreateItemDto]),
    __metadata("design:returntype", void 0)
], ItemsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ItemsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ItemsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_item_dto_1.UpdateItemDto]),
    __metadata("design:returntype", void 0)
], ItemsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ItemsController.prototype, "remove", null);
exports.ItemsController = ItemsController = __decorate([
    (0, common_1.Controller)('items'),
    __metadata("design:paramtypes", [items_service_1.ItemsService])
], ItemsController);
