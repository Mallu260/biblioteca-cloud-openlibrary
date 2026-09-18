const menuToggle = document.querySelector('#menuToggle');
const menuPrincipal = document.querySelector('#menuPrincipal');
const linksMenu = document.querySelectorAll('#menuPrincipal a');

menuToggle.addEventListener('click', () => {
  const menuAberto = menuPrincipal.classList.toggle('aberto');

  menuToggle.classList.toggle('aberto', menuAberto);
  menuToggle.setAttribute('aria-expanded', menuAberto);
  menuToggle.setAttribute(
    'aria-label',
    menuAberto ? 'Fechar menu' : 'Abrir menu'
  );
});

linksMenu.forEach((link) => {
  link.addEventListener('click', () => {
    menuPrincipal.classList.remove('aberto');
    menuToggle.classList.remove('aberto');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
  });
});

const formLivro = document.querySelector('#formLivro');
const inputTitulo = document.querySelector('#titulo');
const botaoBuscar = document.querySelector('#botaoBuscar');
const mensagem = document.querySelector('#mensagem');
const resultado = document.querySelector('#resultado');
const estadoInicial = document.querySelector('#estadoInicial');
const listaLivros = document.querySelector('#listaLivros');

const API = 'http://localhost:3000';

formLivro.addEventListener('submit', async (evento) => {
  evento.preventDefault();

  const titulo = inputTitulo.value.trim();

  mensagem.innerText = '';
  resultado.classList.add('oculto');
  estadoInicial.classList.remove('oculto');
  listaLivros.innerHTML = '';

  if (!titulo) {
    mensagem.innerText = 'Digite o título de um livro.';
    inputTitulo.focus();
    return;
  }

  try {
    botaoBuscar.disabled = true;
    botaoBuscar.innerText = 'Buscando...';
    mensagem.innerText = 'Pesquisando livros...';

    const resposta = await fetch(
      `${API}/api/livros/pesquisa?titulo=${encodeURIComponent(titulo)}`
    );

    const dados = await resposta.json();

    if (!resposta.ok) {
      mensagem.innerText =
        dados.mensagem || 'Não foi possível pesquisar os livros.';

      return;
    }

    if (!Array.isArray(dados) || dados.length === 0) {
      mensagem.innerText = 'Nenhum livro encontrado.';
      return;
    }

    dados.forEach((livro) => {
      const card = document.createElement('div');

      card.classList.add('dado', 'dado-livro');

      const tituloLivro = document.createElement('strong');
      tituloLivro.innerText =
        livro.titulo || 'Título não informado';

      const autor = document.createElement('span');
      autor.innerText =
        `Autor: ${livro.autor || 'Não informado'}`;

      const ano = document.createElement('span');
      ano.innerText =
        `Ano de publicação: ${livro.anoPublicacao || 'Não informado'}`;

      card.appendChild(tituloLivro);
      card.appendChild(autor);
      card.appendChild(ano);

      listaLivros.appendChild(card);
    });

    mensagem.innerText = 'Pesquisa realizada com sucesso!';

    resultado.classList.remove('oculto');
    estadoInicial.classList.add('oculto');

  } catch (erro) {
    console.error(erro);

    mensagem.innerText =
      'Não foi possível conectar ao backend.';

  } finally {
    botaoBuscar.disabled = false;
    botaoBuscar.innerText = 'Buscar';
  }
});