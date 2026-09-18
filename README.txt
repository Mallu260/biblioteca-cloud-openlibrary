# BIBLIOTECA CLOUD

## ARQUITETURA

Frontend (porta 3001)
        ↓
Backend (porta 3000)
        ↓
Open Library API

O frontend NÃO acessa diretamente a Open Library.
Toda a comunicação é feita através do backend.


## BACKEND

Abra um terminal e acesse a pasta do backend:

cd backend

Instale as dependências:

npm install

npm install undici

Inicie o servidor:

npm run dev

Backend:

http://localhost:3000

### Teste

http://localhost:3000/api/livros/pesquisa?titulo=exemplo


## FRONTEND

Abra outro terminal e acesse a pasta do frontend:

cd frontend

Instale as dependências:

npm install

Inicie o frontend:

npm run dev

Frontend:

http://localhost:3001


## TECNOLOGIAS

### Frontend

- HTML
- CSS
- JavaScript

### Backend

- Node.js
- Express
- CORS
- Mongoose
- dotenv

### API

- Open Library API


## FLUXO DA APLICAÇÃO

Usuário pesquisa um livro
        ↓
Frontend
        ↓
GET /api/livros/pesquisa?titulo=exemplo
        ↓
Backend
        ↓
Route
        ↓
Controller
        ↓
Service
        ↓
Open Library
        ↓
Service / Controller
        ↓
Resposta para o Frontend


## ESTRUTURA DO BACKEND

backend/
├── config/
├── routes/
├── controllers/
├── services/
├── models/
└── server.js


## CÓDIGOS HTTP

| Código | Situação                                 |
|--------|------------------------------------------| 
|  :200  | Pesquisa realizada com sucesso           |
|  :400  | Título não informado ou inválido         |
|  :404  | Nenhum livro encontrado                  |
|  :500  | Erro interno ou falha ao consultar a API |


## RESULTADO ESPERADO

O usuário deve informar o título de um livro no frontend.

O frontend envia a pesquisa para o backend, que consulta
a Open Library e retorna os resultados.

Na tela, devem ser exibidas informações dos livros,
como:

- título;
- autor;
- ano de publicação.

A interface também deve apresentar mensagens de
carregamento, nenhum resultado e erro.