const openLibraryService = require('../services/openLibraryService');
const Livro = require('../models/livroModel');

async function pesquisarLivros(req, res) {
  const { titulo } = req.query;

  if (!titulo || !titulo.trim()) {
    return res.status(400).json({
      erro: true,
      mensagem: 'Título não informado ou inválido.'
    });
  }

  try {
    const livros = await openLibraryService.pesquisarLivros(titulo);

    if (!livros || livros.length === 0) {
      return res.status(404).json({
        erro: true,
        mensagem: 'Nenhum livro encontrado.'
      });
    }

    await Livro.insertMany(livros);

    return res.status(200).json(livros);

  } catch (erro) {
    console.error(erro);

    return res.status(500).json({
      erro: true,
      mensagem: 'Erro interno ao consultar a Open Library.'
    });
  }
}

module.exports = {
  pesquisarLivros
};