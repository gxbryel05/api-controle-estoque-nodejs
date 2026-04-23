# API Controle de Estoque 

API desenvolvida para gerenciar produtos de um estoque, permitindo criar, listar, atualizar e deletar itens.

## Tecnologias Usadas
- Node.js
- Express
- PostgreSQL

## Funcionalidades
- Criar produtos
- Listar todos os produtos
- Atualizar produtos existentes
- Deletar produtos

## Como rodar o projeto

### 1. Clone o repositório

git clone https://github.com/seu-usuario/api-controle-estoque-nodejs.git

### 2. Instale as dependências

npm install

### 3. Configure o banco de dados

Certifique-se de que o PostgreSQL está rodando e crie a tabela:

```sql
CREATE TABLE produtos (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100),
  quantidade INTEGER,
  preco NUMERIC
);


## Endpoints

GET /api/produtos  
POST /api/produtos  
PUT /api/produtos/:id  
DELETE /api/produtos/:id
