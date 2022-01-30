import i18Obj from './translation.js';

/*burger menu*/
const burger = document.querySelector('.burger');
const shadow = document.querySelector('.shadow');
const nav = document.querySelector('.nav-top');
const links = document.querySelectorAll('.nav-top li');

[...links, burger, shadow].forEach((element) => {
    element.addEventListener('click', toggleOpen);
});

function toggleOpen() {
    [burger, shadow, nav].forEach((element) => {
        element.classList.toggle('open');
    });
}

/* photo gallery*/
const buttons = document.querySelectorAll('.portfolio-buttons > button');
const gallery = document.querySelectorAll('.portfolio-items > img');

buttons.forEach((element) => {
    element.addEventListener('click', () => { galleryUpdate(element) });
});

function galleryUpdate(element) {
    for (let i = 0; i < gallery.length; i++) {
        gallery[i].src = `assets/img/${element.dataset['i18n']}/${i + 1}.jpg`;
        buttons.forEach((button) => {
            button.classList.remove('active');
        });
        element.classList.add('active');
    }
}
    /*images preload */
const seasons = ['winter', 'spring', 'summer', 'autumn'];
function preload() {
    const img = new Image();
    seasons.forEach((element) => {
        for (let i = 1; i <= 6; i++) {
            img.src = `assets/img/${element}/${i}.jpg`;
        }
    });
}

/*internationalisation*/
const languageSwitcher = document.querySelector('.language-panel');
const translationTextArr = document.querySelectorAll('[data-i18n]');
let language = 'en';

languageSwitcher.addEventListener('click', getTranslate);

// translationTextArr.style.transition = 'ease-in 0.3s';

function getTranslate() {
    // language == 'en' ? {language = 'ru'} : language = 'en';
    if (language == 'en') {
        language = 'ru';
    document.querySelector('.language-panel > span:nth-child(1)').style.color = 'var(--white)';
    document.querySelector('.language-panel > span:nth-child(3)').style.color = 'var(--gold)';
    
    }
    else {
        document.querySelector('.language-panel > span:nth-child(3)').style.color = 'var(--white)';
    document.querySelector('.language-panel > span:nth-child(1)').style.color = 'var(--gold)';
        language = 'en';
    }

    translationTextArr.forEach(element => {
        element.textContent = i18Obj[language][element.dataset['i18n']];
        if (element.placeholder) {
            element.placeholder = i18Obj[language][element.dataset['i18n']];
            element.textContent = '';
          }
    });
}
// getTranslate();