let menuIcon = document.querySelector('.header__menu-icon');
let headerLinksEl = document.querySelector('.header__nav-list');
let closeIcon = document.querySelector('.header__close-icon');

menuIcon.addEventListener('click', function (event) {
    headerLinksEl.classList.add('header__nav-list--active');
});

closeIcon.addEventListener('click', function (event) {
    headerLinksEl.classList.remove('header__nav-list--active');
});
