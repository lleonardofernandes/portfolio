
// document.addEventListener('DOMContentLoaded', function () {
window.addEventListener('load', function () {

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
            if (body.classList.contains('menu-nav-active')) {
                body.classList.remove('menu-nav-active')
                menuMobile.classList.replace("bi-x", "bi-list");
            }
        })
    });


    const item = document.querySelectorAll("[data-anime]");
    const animeScroll = () => {
        const windowTop = window.scrollY + window.innerHeight * 0.85;
        item.forEach(element => {
            if (windowTop > element.offsetTop) {
                element.classList.add('animate');
            } else {
                element.classList.remove('animate')
            }
        })

        // console.log(windowTop)
    }
    animeScroll()
    window.addEventListener('scroll', () => {
        animeScroll()
    });


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1); // Remove o caractere '#' do href
            const target = document.getElementById(targetId);
            if (target) {
                const startPosition = window.pageYOffset; // Posição atual do scroll
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset; // Posição de destino do scroll
                const distance = targetPosition - startPosition; // Distância para rolagem

                const duration = 800; // Duração da animação
                const startTime = performance.now(); // Tempo início da animação

                // Função de animação
                function animateScroll(currentTime) {
                    const elapsedTime = currentTime - startTime; // Tempo decorrido desde o início da animação
                    const progress = Math.min(elapsedTime / duration, 1); // Progresso da animação entre 0 e 1
                    const easedProgress = easeInOutQuad(progress); // Aplicação de uma função de easing

                    window.scrollTo(0, startPosition + distance * easedProgress); // Rola suavemente para a posição desejada

                    // Continua a animação se a duração não tiver sido alcançada
                    if (elapsedTime < duration) {
                        requestAnimationFrame(animateScroll);
                    }
                }

                // Função de easing
                function easeInOutQuad(t) {
                    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
                }

                // Inicia a animação
                requestAnimationFrame(animateScroll);
            }
        });
    });

    const btnEnviar = document.querySelector('#btn-enviar')
    const btnEnviarLoader = document.querySelector('#btn-enviar-loader')

    btnEnviar.addEventListener('click', () => {
        btnEnviarLoader.style.display = "block";
        btnEnviar.style.display = "none";
    });

    //Tirar mensagem de alerta após algum tempo
    setTimeout(() => {
        document.querySelector('#main .alert').style.display = 'none';
    }, 3000);

    var alerts = document.querySelectorAll('#main .alert.slideIn');
        alerts.forEach(function(alert) {
            setTimeout(function() {
                alert.classList.remove('slideIn');
                alert.classList.add('slideOut');
            }, 3000);
            setTimeout(function() {
                alert.style.opacity = '1';
            }, 100);
        });


});