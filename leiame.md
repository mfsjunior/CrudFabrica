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








