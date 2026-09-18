const mongoose = require('mongoose');

// ============================================================
// CONEXÃO COM O MONGODB LOCAL
// ============================================================

async function conectarBanco() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB local conectado com sucesso!');
  } catch (erro) {
    console.error('Erro ao conectar com o MongoDB local:');
    console.error(erro.message);
    process.exit(1);
  }
}

module.exports = conectarBanco;