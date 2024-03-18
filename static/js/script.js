// window.onload = function() {
//     // document.getElementById("

//         /*ao clicar em qualquer parte do menu, fixa a cor do item do menu lateral */
//         //obter url da pagina atual
//         var currentUrl = window.location.href;
        
//         //percorrer os itens do menu e verificar a url correspondete a página
//         var menuItens = document.querySelectorAll('#sidebar .nav-menu a');
//         for (var i = 0; i < menuItens.length; i++) {
//             var menuItemUrl = menuItens[i].getAttribute('href');
//             if (currentUrl.includes(menuItemUrl)) {
//                 menuItens[i].classList.add('selected');
//                 break;
//             }                 
//         }

// };


document.addEventListener('DOMContentLoaded', function () {


    // mudar o menu de list para X
    const menuMobile = document.querySelector('.menu-mobile');
    const body = document.querySelector('body');

    menuMobile.addEventListener('click', () => {
        menuMobile.classList.contains("bi-list")
        ? menuMobile.classList.replace("bi-list", "bi-x" ) // condição if ternário
        : menuMobile.classList.replace("bi-x", "bi-list"); //condiçao else
        body.classList.toggle("menu-nav-active"); //classe criada no css para voltar para posição original
    });

    const navItem = document.querySelectorAll('.nav-item');   

    navItem.forEach(item => {
        item.addEventListener('click', () => {
            if (body.classList.contains('menu-nav-active')){
                body.classList.remove('menu-nav-active')
                menuMobile.classList.replace("bi-x", "bi-list");
            }
        })
    })

    console.log(navItem)

});