# Lista de Tarefas

Projeto de curso desenvolvido com React para gerenciamento de tarefas pessoais.

## Funcionalidades

- **Autenticação**: Tela de login para acesso à aplicação
- **Lista de Tarefas**: 
  - Adicionar novas tarefas
  - Remover tarefas existentes
  - Marcar tarefas como concluídas
- **Navegação**: Página inicial (lista de tarefas), Sobre e Detalhe

## Tecnologias Utilizadas

- **React 19.2.4** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset tipado do JavaScript
- **Vite 8.0.1** - Build tool e dev server
- **React Router 7.14.0** - Gerenciamento de rotas
- **Axios 1.14.0** - Cliente HTTP para requisições à API

## Instalação

1. Clone o repositório
2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria uma build de produção

## Estrutura do Projeto

```
src/
├── components/       # Componentes reutilizáveis
├── pages/           # Páginas da aplicação
│   ├── public/      # Páginas públicas (Login)
│   ├── home.tsx     # Lista de tarefas
│   ├── about.tsx    # Página Sobre
│   └── detail.tsx   # Página de detalhes
├── shared/          # Código compartilhado
│   ├── contexts/    # Contextos React
│   ├── layout/      # Layouts da aplicação
│   └── services/    # Serviços de API
└── mocks/           # Mock da API
```

## Desenvolvimento

O projeto utiliza uma API simulada para desenvolvimento e testes das funcionalidades de CRUD de tarefas.
