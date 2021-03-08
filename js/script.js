let burger = document.getElementById("#burgerMenu");
const list = document.querySelector("nav ul");

burger.addEventListener('click', function() {
    list.classList.toggle('show');
});