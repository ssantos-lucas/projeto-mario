/* 
OBJETIVO 1 - quando o usuario clicar no botão de ver trailer, devemos abrir a modal com com o video do trailer.
    - passo 1: dar um jeito de pegar o elemento que representa o botao na tela usando o js
    - passo 2: identificar quando o usario clicou no botao 
    - passo 3: dar um jeito de pegar o elemento da modal no js
    - passo 4: abrir a modal na tela 

OBJETIVO 2 - quando o usuario clicar no x, devemos fechar a modal
    - passo 1: dar um jeito de pegar o elemento de fechar a modal no js
    - passo 2: dar um jeito de identificar o clique do usuario no x
    - passo 3: fechar a modal
*/

// passo 1: dar um jeito de pegar o elemento que representa o botao na tela usando o js

const botaoTrailer = document.querySelector(".botao-trailer");

// passo 3: dar um jeito de pegar o elemento da modal no js

const modal = document.querySelector(".modal")

// passo 2: identificar quando o usario clicou no botao 
const video = document.getElementById("video");
const linkDoVideo = video.src;

botaoTrailer.addEventListener("click", () =>{
    // passo 4: abrir a modal na tela
    modal.classList.add("aberto")
    video.setAttribute("src", linkDoVideo)

});

// passo 5: dar um jeito de pegar o elemento de fechar a modal no js

const botaoFechar = document.querySelector(".fechar-modal")

// passo 2: dar um jeito de identificar o clique do usuario no x

botaoFechar.addEventListener("click", () =>{
    // passo 3: fechar a modal
    modal.classList.remove("aberto")
    video.setAttribute("src", "")
});





