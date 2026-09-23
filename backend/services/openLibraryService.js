const { fetch, ProxyAgent } = require('undici');

const USAR_PROXY = false;

const proxyAgent = USAR_PROXY
  ? new ProxyAgent('http://172.16.0.253:3128')
  : undefined;

async function pesquisarLivros(titulo) {
  const opcoes = {};

  if (proxyAgent) {
    opcoes.dispatcher = proxyAgent;
  }

  const tituloFormatado = encodeURIComponent(titulo);

  const resposta = await fetch(
    `https://openlibrary.org/search.json?title=${tituloFormatado}&limit=1`,
    opcoes
  );

  if (!resposta.ok) {
    throw new Error('ERRO_OPEN_LIBRARY');
  }

  const dados = await resposta.json();

  return dados.docs.map((livro) => ({
    titulo: livro.title,
    autor: livro.author_name ? livro.author_name.join(', ') : 'Autor desconhecido',
    anoPublicacao: livro.first_publish_year || null
  }));
}

module.exports = {
  pesquisarLivros
};