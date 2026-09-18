const express = require('express');
const cors = require('cors');
require('dotenv').config();

const conectarBanco = require('./config/database');
const livrosRoutes = require('./routes/livrosRoutes');

const app = express();

app.use(cors());
app.use(express.json());

conectarBanco();

app.get('/api/status', (req, res) => {
  res.status(200).json({
    mensagem: 'servidor funcionando'
  });
});

app.use('/api/livros', livrosRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});