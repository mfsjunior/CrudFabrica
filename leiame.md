-> Front  - NEXTJS
-> Back  - NESTJS

- Usei o docker para configurar o ambiente criando dois containers
- DockerFile -> responsável por configurar aquela instância do container

buscando o NESTJS
    npm i -g @nestjs/cli
    nest new backend

    cd backend

    npm install @nestjs/mongoose mongoose
    npm install @nestjs/config
    npm install class-validator class-transformer
    npm install --save-dev @types/node

buscando o NextJS
    npx create-next-app@latest frontend --ts

    cd frontend

    npm install axios
    npm install --save-dev @types/node


Sobre o BackEnd e o Front 

projeto/
├── backend/     ← API REST com NestJS + MongoDB (Atlas)
├── frontend/    ← Interface web com Next.js
└── docker-compose.yml  ← Orquestra os dois serviços com Docker


Como é nosso BackEnd 

backend/
├── src/
│   ├── app.module.ts
│   ├── main.ts - config inicial
│   └── items/ lógica do meu CRUD
│       ├── dto/
│       │   ├── create-item.dto.ts - Como sera o criar no HTTP 
│       │   └── update-item.dto.ts - como sera o atualizar no HTTP 
│       ├── items.controller.ts - HTTP e redirecionar para service - Controlador
│       ├── items.service.ts  - salvar, buscar e remover itens  - Quase um model 
│       └── schemas/
│           └── item.schema.ts  - definição da entidade 
├── .env - string de conexão como MongoDB Atlas 
├── Dockerfile
├── package.json - buscar as dependencias 
└── tsconfig.json - arquivo de configuração 

Como é o nosso front 

frontend/
├── src/
│   └── pages/
│       └── index.tsx - página principal onde está a chamada via get e post para o back 
├── .env.local - Define a URL da API para uso pelo navegador e no build do Next
├── Dockerfile - configuração do container 
├── package.json - dependencias 
└── tsconfig.json - typescript 



Pq orquestrar os dois juntos ?

Navegador acessa frontend via localhost:3000

Frontend se comunica com backend via localhost:3001





2  - parte da aula 

1 - migrar para o Postgres  - Crie um container para receber essa nova configuração 
Docker compose precisa ser atualizado 

postgres:
    image: postgres:17
    container_name: postgres17_integration_studio
    restart: always
    environment:
      POSTGRES_PASSWORD: supersecret
      POSTGRES_USER: postgres
      POSTGRES_DB: lanchonete
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
    networks:
      - integration_network



2 - instalar o typeORM 
	npm install @nestjs/typeorm typeorm pg
	->  Explicação está no chatgpt 

3   - configurar o .env com as novas credenciais do banco

DB_HOST=localhost
DB_PORT=5432
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=seu_banco
SYNC_DB=true



4 - Alterar o app.module.ts:
o que esse arquivo faz e pq ele?
	imports: carrega outros módulos, como banco de dados, configurações, e seus próprios módulos (ItemsModule).
	O NestJS lê essas importações e monta o contexto global da aplicação.

	Essa é a classe raiz da aplicação NestJS, usada no main.ts para iniciar o app:


		async function bootstrap() {



5  - Remova todas as referências ao Mongoose do seu projeto
@InjectModel
	MongooseModule
	Imports de @nestjs/mongoose e mongoose
	Schemas do Mongoose

5.a - remova o 
	item.schema


6 - Precisamos criar uma entidade para o Item 
C:\projetos\CrudFabrica\backend\src\items\entities
item.entity.ts

7 - Atualize o ItemsModule para usar TypeORM:

8 - Atualize o ItemsService para usar o repositório do TypeORM:
 -> antes ele fazia algo para o mongo, agora irá fazer com base na lógica do TypeORM


9 - Remova todas as referências ao Mongoose dos arquivos .ts:

Apague ou comente qualquer linha que use @nestjs/mongoose, MongooseModule, InjectModel, schemas do Mongoose, etc.


mudança de arquitetura 
Sim, é uma boa prática em projetos NestJS (e em outros frameworks MVC) organizar seu código por domínio, onde cada pasta representa um "módulo" ou "feature" e contém seus próprios controllers, services, entidades, DTOs, etc.
Isso facilita a manutenção, escalabilidade e entendimento do projeto.

Exemplo de arquitetura de pastas por domínio (feature-based)
Vantagens desse padrão:
Cada domínio (ex: items, users) fica isolado e autocontido.
Facilita encontrar arquivos relacionados a uma funcionalidade.
Ajuda na escalabilidade e divisão de times.
Segue o padrão recomendado pelo NestJS (modularização).
Resumo
Organizar por domínio/feature é recomendado.
Cada pasta de módulo pode ter seus próprios controllers, services, entidades, DTOs, etc.
O projeto fica mais limpo, modular e fácil de manter.



