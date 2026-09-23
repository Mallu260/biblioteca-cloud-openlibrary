BIBLIOTECA CLOUD
## ARQUITETURA

Frontend (porta 3001)
↓
Backend (porta 3000)
├──→ Open Library API
│
└──→ MongoDB
(registro das buscas)

O frontend NÃO acessa diretamente a Open Library.

Toda a comunicação com a Open Library é feita através do backend.

O MongoDB é utilizado para registrar as buscas realizadas pelo usuário.

## BACKEND

Abra um terminal e acesse a pasta do backend:

cd backend

Instale as dependências:

npm install

Inicie o servidor:

npm run dev

Backend:

http://localhost:3000

Teste

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

## BANCO DE DADOS

A aplicação utiliza MongoDB através do Mongoose.

O MongoDB não é utilizado para realizar a pesquisa dos livros.

As informações dos livros são obtidas através da Open Library API.

O MongoDB é utilizado para registrar as buscas realizadas pelos usuários.

## TECNOLOGIAS
Frontend

HTML

CSS

JavaScript

Backend

Node.js

Express

CORS

Mongoose

dotenv

Banco de dados

MongoDB

API

Open Library API

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
├──→ Service
│ ↓
│ Open Library
│ ↓
│ Resultados
│
└──→ MongoDB
↓
Registra a busca
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
Código	Situação
200	Pesquisa realizada com sucesso
400	Título não informado ou inválido
404	Nenhum livro encontrado
500	Erro interno ou falha ao consultar a API
RESULTADO ESPERADO

O usuário deve informar o título de um livro no frontend.

O frontend envia a pesquisa para o backend, que consulta a Open Library e retorna os resultados.

A busca realizada também é registrada no MongoDB.

Na tela, devem ser exibidas informações dos livros, como:

título;
autor;
ano de publicação.

A interface também deve apresentar mensagens de carregamento, nenhum resultado e erro.