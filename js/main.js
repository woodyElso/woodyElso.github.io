let burgerToggle = document.getElementById('burgerBtn');
let headerMenu = document.getElementById('headerMenu');

let landingPagesLink = document.getElementById('landingPagesLink')
let mainItem = document.getElementById('mainItem');

let mainItemClose = document.getElementById('mainClose');

burgerToggle.onclick = function() {
   headerMenu.classList.toggle('header__menu--visible');
}

landingPagesLink.onclick = function() {
   console.log(mainItem.style.display);
   mainItem.classList.add('main__item--active');
}

mainItemClose.onclick = function() {
   console.log(mainItemClose.style.display);
   mainItem.classList.remove('main__item--active');
}