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
let language;
if (localStorage.getItem('language')) {
    language = localStorage.getItem('language');
}
else {let language = 'en';}

languageSwitcher.addEventListener('click', getTranslate);

function getTranslate() {
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

/*light-dark theme*/
let theme = '';
const themeSwitcher = document.querySelector('.theme');
const themeArray = [document.querySelector('html'),
                ...document.querySelectorAll('.section-title'),
                document.querySelector('.portfolio-buttons'),
                ...document.querySelectorAll('.skills-item'),
                burger,
                document.querySelector('.nav-top'),
                themeSwitcher,
                document.querySelector('.price-items')
                ];

themeSwitcher.addEventListener('click', changeTheme);

function changeTheme() {
    theme = (theme == 'dark' || theme == '') ? 'light' : 'dark';
    themeArray.forEach(element => {
        element.classList.toggle('light');
    });
}

/*local storage*/
function setLocalStorage() {
    let langTemp = (language == 'en') ? 'ru' : 'en';
    localStorage.setItem('language', langTemp);
    localStorage.setItem('theme', theme);
  }

  function getLocalStorage() {
    if(localStorage.getItem('language')) {
      const lang = localStorage.getItem('language');
      getTranslate(lang);
    }
    if(localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme');
        if (theme == 'light') {
            changeTheme();
            theme = (theme == 'dark') ? 'light' : 'dark';
        }
    }
  }

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);
