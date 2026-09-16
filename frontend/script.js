// MENU RESPONSIVO

const menuToggle = document.querySelector('#menuToggle');
const menuPrincipal = document.querySelector('#menuPrincipal');
const linksMenu = document.querySelectorAll('#menuPrincipal a');

menuToggle.addEventListener('click', () => {

    const menuAberto = menuPrincipal.classList.toggle('aberto');

    menuToggle.classList.toggle('aberto', menuAberto);

    menuToggle.setAttribute(
        'aria-expanded',
        menuAberto
    );
});


linksMenu.forEach((link) => {

    link.addEventListener('click', () => {

        menuPrincipal.classList.remove('aberto');
        menuToggle.classList.remove('aberto');

        menuToggle.setAttribute(
            'aria-expanded',
            'false'
        );

    });

});



// ELEMENTOS DA PÁGINA

const formPesquisa = document.querySelector('#formPesquisa');

const inputTitulo = document.querySelector('#titulo');

const botaoBuscar = document.querySelector('#botaoBuscar');

const mensagem = document.querySelector('#mensagem');

const resultado = document.querySelector('#resultado');

const estadoInicial = document.querySelector('#estadoInicial');


const tituloResultado =
    document.querySelector('#tituloResultado');

const autorResultado =
    document.querySelector('#autorResultado');

const anoResultado =
    document.querySelector('#anoResultado');

const chaveResultado =
    document.querySelector('#chaveResultado');



// PESQUISA DO LIVRO

formPesquisa.addEventListener('submit', async (evento) => {

    evento.preventDefault();


    const titulo = inputTitulo.value.trim();


    mensagem.innerText = '';

    resultado.classList.add('oculto');

    estadoInicial.classList.remove('oculto');


    if (titulo === '') {

        mensagem.innerText =
            'Digite o título de um livro.';

        inputTitulo.focus();

        return;

    }


    const tituloFormatado =
        encodeURIComponent(titulo);


    const url =
        `https://openlibrary.org/search.json?title=${tituloFormatado}&limit=1`;


    try {

        botaoBuscar.disabled = true;

        botaoBuscar.innerText = 'Buscando...';

        mensagem.innerText =
            'Pesquisando livro...';


        const resposta =
            await fetch(url);


        if (!resposta.ok) {

            throw new Error(
                'Erro ao consultar a Open Library'
            );

        }


        const dados =
            await resposta.json();


        if (dados.docs.length === 0) {

            mensagem.innerText =
                'Nenhum livro encontrado.';

            return;

        }


        const livro = dados.docs[0];


        tituloResultado.innerText =
            livro.title;


        autorResultado.innerText =
            livro.author_name?.[0]
            || 'Não informado';


        anoResultado.innerText =
            livro.first_publish_year
            || 'Não informado';


        chaveResultado.innerText =
            livro.key;


        mensagem.innerText =
            'Livro encontrado!';


        resultado.classList.remove('oculto');

        estadoInicial.classList.add('oculto');


    } catch (erro) {

        console.error(erro);

        mensagem.innerText =
            'Erro ao pesquisar o livro.';


    } finally {

        botaoBuscar.disabled = false;

        botaoBuscar.innerText = 'Buscar';

    }

});