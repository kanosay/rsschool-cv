let burger = document.querySelector('.burger__menu');
let lists = document.querySelector('.header__links');


let open = () => {
    if (burger.classList.toggle('open')) {
        lists.style.display = "flex";
    } else {
        lists.style.display = "none"
    }
}



burger.addEventListener('click', open)