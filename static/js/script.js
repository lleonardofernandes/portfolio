// document.addEventListener('DOMContentLoaded', function () {
    const menuMobile = document.querySelector('.menu-mobile');
    const body = document.querySelector('body');

    menuMobile.addEventListener('click', () => {
        menuMobile.classList.contains("bi-list")
        ? menuMobile.classList.replace("bi-list", "bi-x" ) // condição if ternário
        : menuMobile.classList.replace("bi-x", "bi-list"); //condiçao else
        body.classList.toggle("menu-nav-active"); //classe criada no css para voltar para posição original

    });

// });