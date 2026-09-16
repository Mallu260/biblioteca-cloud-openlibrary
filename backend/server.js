const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/status', (req, res) => {
    res.status(200).json({
        mensagem: 'servidor funcionando'
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});