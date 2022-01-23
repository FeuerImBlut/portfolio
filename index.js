const burger = document.querySelector('.burger');
const shadow = document.querySelector('.shadow');
const nav = document.querySelector('.nav-top');
const links = document.querySelectorAll('.nav-top li');

[burger, shadow].forEach((element) => {
    element.addEventListener('click', toggleOpen);
});
links.forEach((element) => {
    element.addEventListener('click', toggleOpen);
})

function toggleOpen() {
    burger.classList.toggle('open');
    shadow.classList.toggle('open');
    nav.classList.toggle('open');
}