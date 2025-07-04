"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
// Importa o decorator @Module, que é usado para definir um módulo no NestJS.
const common_1 = require("@nestjs/common");
// Importa o módulo do TypeORM, que permite integração com bancos relacionais como PostgreSQL.
const typeorm_1 = require("@nestjs/typeorm");
// Importa o módulo de configuração, que carrega variáveis do arquivo .env para process.env.
const config_1 = require("@nestjs/config");
// Importa o módulo de itens, onde estarão os controllers, services e entidades relacionados aos itens.
const items_module_1 = require("./items/items.module");
// Define o módulo principal da aplicação usando o decorator @Module.
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        // A propriedade imports define outros módulos que este módulo depende.
        imports: [
            // Carrega as variáveis de ambiente do arquivo .env para process.env.
            config_1.ConfigModule.forRoot(),
            // Conecta a aplicação ao PostgreSQL usando as variáveis de ambiente.
            typeorm_1.TypeOrmModule.forRoot({
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
            items_module_1.ItemsModule,
        ],
    })
    // Exporta a classe AppModule, que será usada como módulo raiz da aplicação.
], AppModule);
