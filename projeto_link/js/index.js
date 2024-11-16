const linkOboticario = document.getElementById('oboticarioLink');
const linkquemDisse = document.getElementById('quemdisseLink');
const infoMensagem = document.getElementById('infoMensagem');

let mensagemVisivel = false;

function mostrarMensagem() {
    if (!mensagemVisivel) {
        infoMensagem.style.display = 'block';
        mensagemVisivel = true;
    }
}

function esconderMensagem() {
    if (mensagemVisivel) {
        infoMensagem.style.display = 'none';
        mensagemVisivel = false;
    }
}

function touchEndHandler(event) {

    setTimeout(() => {
        esconderMensagem();
    }, 2000); 
}


linkOboticario.addEventListener('mouseenter', mostrarMensagem);
linkquemDisse.addEventListener('mouseenter', mostrarMensagem);

linkOboticario.addEventListener('mouseleave', esconderMensagem);
linkquemDisse.addEventListener('mouseleave', esconderMensagem);


linkOboticario.addEventListener('touchstart', mostrarMensagem);
linkquemDisse.addEventListener('touchstart', mostrarMensagem);

linkOboticario.addEventListener('touchend', touchEndHandler);
linkquemDisse.addEventListener('touchend', touchEndHandler);

linkOboticario.addEventListener('click', (event) => {
    event.preventDefault();
    mostrarMensagem();

    setTimeout(() => {
        esconderMensagem();
        window.location.href = linkOboticario.href;
    }, 2000);
});

linkquemDisse.addEventListener('click', (event) => {
    event.preventDefault();
    mostrarMensagem();

    setTimeout(() => {
        esconderMensagem();
        window.location.href = linkquemDisse.href;
    }, 2000);
});



const imagens = [
    '/img produtos/img produtos1 (1).jpeg', 
    '/img produtos/img produtos1 (2).jpeg',  
    '/img produtos/img produtos1 (3).jpeg',  
    '/img produtos/img produtos1 (4).jpeg',  
    '/img produtos/img produtos1 (5).jpeg'  
];

let index = 0;


const imgElement = document.getElementById('imagemProduto');


function trocarImagem() {
    imgElement.src = imagens[index];
    index = (index + 1) % imagens.length; 
}


setInterval(trocarImagem, 2000);
