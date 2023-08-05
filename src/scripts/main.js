document.addEventListener("DOMContentLoaded" , function () {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]')

    const heroSection = document.querySelector('.hero');
    const heightHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const nowPosition = window.scrollY;

        if (nowPosition < heightHero) {
            hiddenHeaderElements();
        } else {
            showHeaderElements();
        }
    })

    // Atracoes
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo()
            botao.target.classList.add('shows__tabs__button--is-active')
        })
    }

})


function removeBotaoAtivo () {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active')
        }
}

function escondeTodasAbas () {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}

function hiddenHeaderElements () {
    const header  = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function showHeaderElements () {
    const header  = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}