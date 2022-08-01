let burger = document.querySelector('.burger');
let mobNav = document.querySelector('.mob-nav');
burger.addEventListener('click', function() {
    burger.classList.toggle('is-burger-active');
    mobNav.classList.toggle('is-mob-nav-active');
})

